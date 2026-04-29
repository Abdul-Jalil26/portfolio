export default function ProjectsSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <section class="page-section alt" id="projects">
            <div class="section-head reveal">
              <div class="section-eyebrow"><span class="num">04</span> Projects</div>
              <h2 class="section-title">Things I've <span class="script">built</span></h2>
              <p class="section-sub">
                Open-source tools, internal platforms, and weekend experiments —
                a few favourites from the last few years.
              </p>
            </div>

              <div class="projects-grid">
              <article class="project reveal">
                <div class="project-image"><i class="project-icon fas fa-bolt"></i></div>
                <div class="project-body">
                  <div class="project-tag">Production · 2026</div>
                  <h4>AI Powered Medical Education Platform</h4>
                  <p>A multi-tenant scheduler for serving large language models at sub-100ms p99 latency. Cut serving costs by 38% across two production clusters.</p>
                  <div class="project-stack"><span>LLM</span><span>CUDA</span><span>Python</span></div>
                  <div class="project-links">
                    <a href="https://ai-lms.eatlbd.com/"><i class="fab fa-github"></i>Source</a>
                    <a href="https://ai-lms.eatlbd.com/"><i class="fas fa-arrow-up-right-from-square"></i>Live demo</a>
                 
                  </div>
                </div>
              </article>

              <article class="project reveal">
                <div class="project-image"><i class="project-icon fas fa-bolt"></i></div>
                <div class="project-body">
                  <div class="project-tag">Production · 2025</div>
                  <h4>Basic LLM Agent</h4>
                  <p>A multi-tenant scheduler for serving large language models at sub-100ms p99 latency. Cut serving costs by 38% across two production clusters.</p>
                  <div class="project-stack"><span>LLM</span><span>CUDA</span><span>Python</span></div>
                  <div class="project-links">
                    <a href="https://github.com/Abdul-Jalil26/Basic-LLM-Agent"><i class="fab fa-github"></i>Source</a>
                    <a href="#"><i class="fas fa-arrow-up-right-from-square"></i>Live demo</a>
                    <a href="#"><i class="fas fa-file-pdf"></i>Paper</a>
                  </div>
                </div>
              </article>

              <article class="project reveal d1">
                <div class="project-image"><i class="project-icon fas fa-database"></i></div>
                <div class="project-body">
                  <div class="project-tag">Open Source · 2024</div>
                  <h4>Inventory Management System</h4>
                  <p>Vectorised execution layer over Apache Arrow. Started as an internal tool, now used by ~60 teams across two companies.</p>
                  <div class="project-stack"><span>Rust</span><span>Arrow</span><span>SQL</span></div>
                  <div class="project-links">
                    <a href="https://github.com/Abdul-Jalil26/django_app"><i class="fab fa-github"></i>Source</a>
                    <a href="#"><i class="fas fa-book"></i>Docs</a>
                  </div>
                </div>
              </article>

              <article class="project reveal d2">
                <div class="project-image"><i class="project-icon fas fa-book-open"></i></div>
                <div class="project-body">
                  <div class="project-tag">Open Source · 2023</div>
                  <h4>Vector Embeddings Project</h4>
                  <p>Lightweight environment that pins data, code, and stochastic state in a single artifact. 4.2k stars; used in two NeurIPS workshops.</p>
                  <div class="project-stack"><span>Python</span><span>TypeScript</span><span>Docker</span></div>
                  <div class="project-links">
                    <a href="https://github.com/Abdul-Jalil26/Vector_Embedding"><i class="fab fa-github"></i>Source</a>
                    <a href="#"><i class="fas fa-arrow-up-right-from-square"></i>Try it</a>
                  </div>
                </div>
              </article>

           

              <article class="project reveal d2">
                <div class="project-image"><i class="project-icon fas fa-mobile-screen"></i></div>
                <div class="project-body">
                  <div class="project-tag">Course Project · 2021</div>
                  <h4>Responsive Travel Website</h4>
                  <p>A small thing built for an ecology lab in Tanzania that turned into a thing. Now deployed across 12 conservation projects.</p>
                  <div class="project-stack"><span>React Native</span><span>SQLite</span></div>
                  <div class="project-links">
                    <a href="https://github.com/Abdul-Jalil26/Responsive_Travel_Website_Desing"><i class="fab fa-github"></i>Source</a>
                    <a href="#"><i class="fas fa-arrow-up-right-from-square"></i>Project page</a>
                  </div>
                </div>
              </article>

              <article class="project reveal d3">
                <div class="project-image"><i class="project-icon fas fa-language"></i></div>
                <div class="project-body">
                  <div class="project-tag">Course Project · 2022</div>
                  <h4>On-Campus Job Management System</h4>
                  <p>A web-based application for managing job postings and applications for students and employers on campus.</p>
                  <div class="project-stack"><span>Python</span><span>Django</span></div>
                  <div class="project-links">
                    <a href="https://github.com/Abdul-Jalil26/On-Campus-Job-Management-System"><i class="fab fa-github"></i>Source</a>
                    <a href="#"><i class="fas fa-file-pdf"></i>Paper</a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        `,
      }}
    />
  );
}
