import { NextResponse } from 'next/server';

type ChatRole = 'user' | 'assistant';
type ChatTurn = { role: ChatRole; content: string };

type OpenRouterResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

type XaiResponsesApi = {
  output_text?: string;
  output?: Array<{
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
};

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const XAI_RESPONSES_URL = 'https://api.x.ai/v1/responses';

const PORTFOLIO_CONTEXT = [
  'Name: Abdul Jalil Tamjid',
  'Role: Software Engineer and ML Researcher',
  'Location: Banani, Dhaka, Bangladesh',
  'Projects: Loom (LLM serving runtime), Sift (typed query engine), Vellum (reproducible notebooks)',
  'Primary skills: Python, TypeScript, Rust, Kubernetes, AWS, GCP, Postgres, Redis, Kafka',
  'Contact: hello@abduljaliltamjid.dev',
].join('\n');

function normalizeHistory(value: unknown): ChatTurn[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is ChatTurn => {
      if (!item || typeof item !== 'object') return false;
      const role = (item as { role?: unknown }).role;
      const content = (item as { content?: unknown }).content;
      return (role === 'user' || role === 'assistant') && typeof content === 'string' && content.trim().length > 0;
    })
    .slice(-12);
}

function buildConversationInput(history: ChatTurn[]): string {
  if (!history.length) {
    return 'User says: hello';
  }

  return history.map((item) => `${item.role === 'assistant' ? 'Assistant' : 'User'}: ${item.content}`).join('\n');
}

function extractXaiReply(data: XaiResponsesApi): string {
  if (typeof data.output_text === 'string' && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const collected = (data.output ?? [])
    .flatMap((item) => item.content ?? [])
    .filter((part) => (part.type === 'output_text' || part.type === 'text') && typeof part.text === 'string' && part.text.trim())
    .map((part) => part.text!.trim())
    .join('\n');

  return collected;
}

export async function POST(request: Request) {
  const provider = (process.env.CHAT_PROVIDER ?? '').toLowerCase();
  const useXai = provider === 'xai' || (!!process.env.XAI_API_KEY && provider !== 'openrouter');

  const apiKey = useXai ? process.env.XAI_API_KEY : process.env.OPENROUTER_API_KEY;
  const model = useXai ? process.env.XAI_MODEL ?? 'grok-3-mini' : process.env.OPENROUTER_MODEL ?? 'openai/gpt-5.2';
  const siteUrl = useXai ? process.env.XAI_SITE_URL : process.env.OPENROUTER_SITE_URL;
  const siteName = useXai
    ? process.env.XAI_SITE_NAME ?? 'Portfolio Chat Assistant'
    : process.env.OPENROUTER_SITE_NAME ?? 'Portfolio Chat Assistant';
  const apiUrl = useXai ? XAI_RESPONSES_URL : OPENROUTER_URL;

  if (!apiKey) {
    const missingVar = useXai ? 'XAI_API_KEY' : 'OPENROUTER_API_KEY';
    return NextResponse.json({ error: `Missing ${missingVar}` }, { status: 500 });
  }

  let jsonBody: unknown;
  try {
    jsonBody = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const rawHistory = (jsonBody as { history?: unknown })?.history;
  const history = normalizeHistory(rawHistory);

  const messages = [
    {
      role: 'system',
      content: 'You are a concise portfolio assistant for Abdul Jalil Tamjid. Use first-person voice and only use known profile facts.',
    },
    ...history,
  ];

  const xaiInput = buildConversationInput(history);

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'X-Title': siteName,
  };

  if (siteUrl) {
    headers['HTTP-Referer'] = siteUrl;
  }

  try {
    const upstream = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...(useXai
          ? {
              model,
              input: xaiInput,
              instructions: `You are a concise portfolio assistant. Answer using known facts from the profile context only. If asked beyond known facts, say you do not have that detail yet.\n\nProfile context:\n${PORTFOLIO_CONTEXT}`,
              max_output_tokens: 700,
            }
          : {
              model,
              messages,
              temperature: 0.6,
              max_tokens: 600,
            }),
      }),
    });

    if (!upstream.ok) {
      const errorBody = await upstream.text();
      const status = upstream.status >= 400 && upstream.status < 500 ? upstream.status : 502;
      const authMessage = useXai
        ? 'xAI authentication failed. Check XAI_API_KEY.'
        : 'OpenRouter authentication failed. Check OPENROUTER_API_KEY.';
      const billingMessage = useXai
        ? 'xAI access denied. Your team may not have credits or licenses yet.'
        : 'OpenRouter access denied. Check plan, quota, or account permissions.';
      const message = upstream.status === 401 ? authMessage : upstream.status === 403 ? billingMessage : 'Upstream API request failed';
      return NextResponse.json(
        { error: message, details: errorBody.slice(0, 500) },
        { status },
      );
    }

    const data = (await upstream.json()) as OpenRouterResponse | XaiResponsesApi;
    const reply = useXai
      ? extractXaiReply(data as XaiResponsesApi)
      : (data as OpenRouterResponse).choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({ error: 'Empty response from upstream model' }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: 'Failed to connect to upstream API' }, { status: 502 });
  }
}
