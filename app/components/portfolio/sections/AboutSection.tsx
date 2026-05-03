export default function AboutSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <section class="page-section" id="about">
            <div class="section-head reveal">
              <div class="section-eyebrow"><span class="num">01</span> About me</div>
              <h2 class="section-title">Engineer by craft, <span class="script">researcher</span> by curiosity</h2>
              <p class="section-sub">
                I work at the intersection of building and asking questions —
                shipping production software while contributing to applied
                machine-learning research.
              </p>
            </div>

            <div class="about-grid">
              <div class="about-text reveal">
             <p>
  I'm <strong>Abdul Jalil Tamjid</strong>, an engineer working in AI and machine learning, based in Dhaka, Bangladesh. Over the past year, I have worked on building practical systems and exploring applied research in areas like computer vision, deep learning, and intelligent systems.
</p>

<p>
  My work focuses on understanding how models perform in real-world settings—from data preprocessing and model design to deployment and evaluation. I am particularly interested in building systems that are not only accurate, but also reliable, interpretable, and aligned with real-world impact.
</p>

<p>
  Beyond my core work, I explore new ideas through hands-on experimentation, write about machine learning and systems, and enjoy helping others learn and grow in the field.
</p>

                <div class="quick-facts">
                  <div class="fact">
                    <div class="num">1<span>+</span></div>
                    <div class="label">Years of experience</div>
                  </div>
                  <div class="fact">
                    <div class="num">5</div>
                    <div class="label">Papers published</div>
                  </div>
                  <div class="fact">
                    <div class="num">20<span>+</span></div>
                    <div class="label">Projects completed</div>
                  </div>
                 <div class="fact">
  <div class="num">10+</div>
  <div class="label">ML & AI Projects</div>
</div>
                </div>
              </div>

              <div class="about-skills reveal d2">
                <div class="skills-card">
                  <h4><i class="fas fa-code"></i>Languages</h4>
                  <ul class="skill-tags">
                    <li>Python</li><li>FastAPI</li><li>Django</li><li>TypeScript</li><li>C#</li><li>C++</li>
                    <li>C</li><li>SQL</li>
                  </ul>
                </div>
                <div class="skills-card">
                  <h4><i class="fas fa-brain"></i>ML &amp; Research</h4>
                  <ul class="skill-tags">
                    <li>PyTorch</li><li>Tensorflow</li><li>HuggingFace</li>
                    <li>scikit-learn</li><li>LangChain</li><li>vLLM</li>
                    <li>Weights &amp; Biases</li><li>NLP</li>
                  </ul>
                </div>
                <div class="skills-card">
                  <h4><i class="fas fa-server"></i>Infrastructure</h4>
                  <ul class="skill-tags">
                    <li>Docker</li><li>Kubernetes</li><li>AWS</li><li>GCP</li>
                    <li>Postgres</li><li>MySQL</li><li>GitLab</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="what-grid">
              <div class="what-card reveal">
                <div class="what-icon"><i class="fas fa-cube"></i></div>
                <h4>Engineering</h4>
                <p>Designing and shipping reliable backend systems, ML pipelines, and developer tools that real teams depend on every day.</p>
              </div>
              <div class="what-card reveal d2">
                <div class="what-icon"><i class="fas fa-flask"></i></div>
                <h4>Research</h4>
                <p>Investigating practical problems in NLP, distributed ML, and model evaluation — and writing them up for venues that actually publish code.</p>
              </div>
              <div class="what-card reveal d3">
                <div class="what-icon"><i class="fas fa-pen-nib"></i></div>
                <h4>Writing &amp; Mentoring</h4>
                <p>Teaching what I learn through essays, talks, code reviews, and the occasional 1:1 with a junior engineer trying to figure out their next move.</p>
              </div>
            </div>
          </section>
        `,
      }}
    />
  );
}
