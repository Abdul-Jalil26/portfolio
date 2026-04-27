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
                    <span class="tl-period">Jan 2024 — Present</span>
                    <span class="tl-type">Full-time · Remote</span>
                  </div>
                  <div class="tl-role">Senior Machine Learning Engineer</div>
                  <div class="tl-org">AnthemicLabs <span class="dot">●</span> Inference &amp; Platform team</div>
                  <p class="tl-desc">
                    Lead engineer on the model-serving platform powering the
                    company's flagship LLM API. Cut p99 latency by 38% and
                    halved per-token serving cost through a custom batching
                    scheduler. Co-author on two infrastructure papers.
                  </p>
                  <div class="tl-stack"><span>Rust</span><span>Python</span><span>CUDA</span><span>K8s</span><span>Triton</span></div>
                </div>
              </div>

              <div class="tl-item reveal">
                <div class="tl-card">
                  <div class="tl-meta">
                    <span class="tl-period">Aug 2022 — Dec 2023</span>
                    <span class="tl-type">Full-time · Hybrid</span>
                  </div>
                  <div class="tl-role">Research Scientist (NLP)</div>
                  <div class="tl-org">TechCo Research <span class="dot">●</span> Bangalore, India</div>
                  <p class="tl-desc">
                    Worked on retrieval-augmented generation and evaluation
                    methods for long-context models. Shipped a grounded-QA
                    dataset adopted by three university courses; first author
                    on three peer-reviewed papers.
                  </p>
                  <div class="tl-stack"><span>PyTorch</span><span>HuggingFace</span><span>FAISS</span><span>Ray</span></div>
                </div>
              </div>

              <div class="tl-item reveal">
                <div class="tl-card">
                  <div class="tl-meta">
                    <span class="tl-period">Jul 2020 — Jul 2022</span>
                    <span class="tl-type">Full-time · Onsite</span>
                  </div>
                  <div class="tl-role">Software Engineer</div>
                  <div class="tl-org">Praxis Fintech <span class="dot">●</span> Dhaka, Bangladesh</div>
                  <p class="tl-desc">
                    Built the real-time fraud-detection backend serving 11M+
                    users. Migrated a 14-service legacy stack to four well-typed
                    services. Owned the on-call rotation and the post-incident
                    writeups nobody else wanted.
                  </p>
                  <div class="tl-stack"><span>Go</span><span>Postgres</span><span>Kafka</span><span>gRPC</span></div>
                </div>
              </div>

              <div class="tl-item reveal">
                <div class="tl-card">
                  <div class="tl-meta">
                    <span class="tl-period">May 2019 — Aug 2019</span>
                    <span class="tl-type">Internship</span>
                  </div>
                  <div class="tl-role">Software Engineering Intern</div>
                  <div class="tl-org">Tigris Systems <span class="dot">●</span> Singapore</div>
                  <p class="tl-desc">
                    Returned-internship offer after shipping a query optimiser
                    for the analytics product. Sole engineer on the project;
                    still in production five years later.
                  </p>
                  <div class="tl-stack"><span>C++</span><span>SQL</span><span>Linux</span></div>
                </div>
              </div>

              <div class="tl-item reveal">
                <div class="tl-card">
                  <div class="tl-meta">
                    <span class="tl-period">2015 — 2019</span>
                    <span class="tl-type">Education</span>
                  </div>
                  <div class="tl-role">B.Sc. in Computer Science &amp; Engineering</div>
                  <div class="tl-org">Bangladesh University of Engineering &amp; Technology (BUET)</div>
                  <p class="tl-desc">
                    Graduated top 5% of class. Undergraduate thesis on
                    transformer compression for low-resource languages, later
                    extended into a workshop paper.
                  </p>
                  <div class="tl-stack"><span>CGPA 3.92/4.00</span><span>Dean's Award</span></div>
                </div>
              </div>
            </div>
          </section>
        `,
      }}
    />
  );
}
