export default function ExperienceSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <section class="page-section alt" id="experience">
            <div class="section-head reveal">
              <div class="section-eyebrow"><span class="num">02</span> Experience</div>
              <h2 class="section-title">Where I've <span class="script">worked</span> &amp; studied</h2>
              <p class="section-sub">
                A short tour through the labs and engineering teams that shaped
                how I think about software and research today.
              </p>
            </div>

            <div class="timeline">
            
              <div class="tl-item reveal">
                <div class="tl-card">
                  <div class="tl-meta">
                    <span class="tl-period">May 2024 — Aug 2025</span>
                    <span class="tl-type">Part-time · Onsite</span>
                  </div>
                  <div class="tl-role">Research Assistant</div>
                  <div class="tl-org">Mawlana Bhashani Science and Technology University <span class="dot">●</span> Tangail, Bangladesh</div>
                  <p class="tl-desc">
                    Worked on retrieval-augmented generation and evaluation
                    methods for long-context models. Shipped a grounded-QA
                    dataset adopted by three university courses; first author
                    on three peer-reviewed papers.
                  </p>
                  <div class="tl-stack"><span>PyTorch</span><span>Tensorflow</span><span>Machine Learning</span><span>HuggingFace</span><span>FAISS</span></div>
                </div>
              </div>

              <div class="tl-item reveal">
                <div class="tl-card">
                  <div class="tl-meta">
                    <span class="tl-period">Aug 2025 — Ongoing</span>
                    <span class="tl-type">Full-time · Onsite</span>
                  </div>
                  <div class="tl-role">AI/ML Engineer</div>
                  <div class="tl-org">Ethics Advance Technology Limited<span class="dot">●</span> Dhaka, Bangladesh</div>
                  <p class="tl-desc">
                    Built the real-time fraud-detection backend serving 11M+
                    users. Migrated a 14-service legacy stack to four well-typed
                    services. Owned the on-call rotation and the post-incident
                    writeups nobody else wanted.
                  </p>
                  <div class="tl-stack"><span>Python</span><span>FastAPI</span><span>Postgres</span><span>Next.js</span><span>LLMs</span></div>
                </div>
              </div>

              <div class="tl-item reveal">
                <div class="tl-card">
                  <div class="tl-meta">
                    <span class="tl-period">2019 — 2025</span>
                    <span class="tl-type">Education</span>
                  </div>
                  <div class="tl-role">B.Sc. in Computer Science &amp; Engineering</div>
                  <div class="tl-org">Mawlana Bhashani Science and Technology University (MBSTU)</div>
                  <p class="tl-desc">
                    Graduated top 5% of class. Undergraduate thesis on
                    transformer compression for low-resource languages, later
                    extended into a workshop paper.
                  </p>
                  <div class="tl-stack"><span>First Class First</span><span>Merit Scholarships</span><span>Dean's List</span><span>Dean's Award</span></div>
                </div>
              </div>

            </div>
          </section>
        `,
      }}
    />
  );
}
