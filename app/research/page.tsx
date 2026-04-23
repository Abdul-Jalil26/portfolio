import Link from "next/link";

const publications = [
  {
    title: "Lightweight Transformer Architectures for Retinal OCT Segmentation in Resource-Constrained Environments",
    venue: "IEEE Transactions on Medical Imaging",
    year: "2024",
    status: "Under Review",
    tags: ["Vision Transformer", "Medical Imaging", "OCT"],
  },
  {
    title: "Automated Brain MRI Lesion Detection Using Hybrid CNN-Transformer Networks",
    venue: "MICCAI 2024 Workshop on Uncertainty Quantification",
    year: "2024",
    status: "Published",
    tags: ["CNN", "Transformer", "Brain MRI"],
  },
  {
    title: "Scalable Clinical Decision Support via LLM-Augmented Radiology Reporting",
    venue: "ICCIT 2023",
    year: "2023",
    status: "Best Paper Award",
    tags: ["LLM", "Radiology", "Clinical AI"],
  },
];

export default function ResearchPage() {
  return (
    <main style={{ background: "#F9F6F1", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#1C1208", padding: "80px 0 60px" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Link
            href="/"
            style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(212,175,80,0.6)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "24px",
            }}
          >
            ← Back to Home
          </Link>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              color: "#F9F6F1",
              lineHeight: 1.1,
            }}
          >
            Research &amp; <span style={{ fontStyle: "italic", color: "#D4AF50" }}>Publications</span>
          </h1>
        </div>
      </div>

      {/* Publications */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {publications.map((pub, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid rgba(28,18,8,0.08)",
                borderLeft: "3px solid #D4AF50",
                borderRadius: "4px",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#1C1208",
                  lineHeight: 1.4,
                  marginBottom: "10px",
                }}
              >
                {pub.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#8B7355",
                  marginBottom: "14px",
                  fontStyle: "italic",
                }}
              >
                {pub.venue} · {pub.year}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "9.5px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: pub.status === "Best Paper Award" ? "#8B6914" : pub.status === "Under Review" ? "#1a5f7a" : "#2d6a2d",
                    background: pub.status === "Best Paper Award" ? "rgba(212,175,80,0.14)" : pub.status === "Under Review" ? "rgba(26,95,122,0.1)" : "rgba(45,106,45,0.1)",
                    padding: "3px 10px",
                    borderRadius: "2px",
                  }}
                >
                  {pub.status}
                </span>
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      color: "rgba(28,18,8,0.45)",
                      border: "1px solid rgba(28,18,8,0.1)",
                      borderRadius: "2px",
                      padding: "2px 9px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}