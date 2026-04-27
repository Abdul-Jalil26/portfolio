export default function ResearchSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <section class="page-section" id="research">
            <div class="section-head reveal">
              <div class="section-eyebrow"><span class="num">03</span> Research</div>
              <h2 class="section-title">Things I'm <span class="script">studying</span></h2>
              <p class="section-sub">
                My research sits at the seam of systems and machine learning —
                how we build, serve, and evaluate models at scale.
              </p>
            </div>
 
            <div class="areas-grid">
              <div class="area-card reveal">
                <div class="icon">⚙️</div>
                <h4>Distributed ML Systems</h4>
                <p>Inference scheduling, KV-cache management, multi-tenant serving for transformer models.</p>
              </div>
              <div class="area-card reveal d1">
                <div class="icon">🧠</div>
                <h4>Natural Language Processing</h4>
                <p>Retrieval-augmented generation, long-context evaluation, low-resource language modelling.</p>
              </div>
              <div class="area-card reveal d2">
                <div class="icon">🔬</div>
                <h4>Model Evaluation</h4>
                <p>Building benchmarks that catch what unit tests can't — drift, calibration, and distributional gaps.</p>
              </div>
            </div>

            <div class="pubs-title">— Selected Publications —</div>

            <div class="pub-list">
              <article class="pub reveal">
                <div class="pub-year">2026</div>
                <div>
                  <div class="pub-venue"><span class="star">★</span>ICLR · Spotlight</div>
                  <h4 class="pub-name"><a href="#">On the Memorisation–Generalisation Frontier in Sparse Mixture-of-Experts</a></h4>
                  <p class="pub-authors"><span class="self">A. Hossain</span>, R. Okafor, M. Lindqvist, J. Park</p>
                  <div class="pub-links">
                    <a href="#"><i class="fas fa-file-pdf"></i>PDF</a>
                    <a href="#"><i class="fas fa-link"></i>arXiv</a>
                    <a href="#"><i class="fab fa-github"></i>Code</a>
                    <a href="#"><i class="fas fa-quote-right"></i>BibTeX</a>
                  </div>
                </div>
              </article>

              <article class="pub reveal">
                <div class="pub-year">2025</div>
                <div>
                  <div class="pub-venue">OSDI · Conference Paper</div>
                  <h4 class="pub-name"><a href="#">Loom: Adaptive Batching for Heterogeneous LLM Serving</a></h4>
                  <p class="pub-authors"><span class="self">A. Hossain</span>, S. Hassanian, T. Brooks</p>
                  <div class="pub-links">
                    <a href="#"><i class="fas fa-file-pdf"></i>PDF</a>
                    <a href="#"><i class="fas fa-link"></i>arXiv</a>
                    <a href="#"><i class="fas fa-presentation-screen"></i>Slides</a>
                    <a href="#"><i class="fas fa-video"></i>Talk</a>
                  </div>
                </div>
              </article>

              <article class="pub reveal">
                <div class="pub-year">2024</div>
                <div>
                  <div class="pub-venue">TMLR · Journal</div>
                  <h4 class="pub-name"><a href="#">A Note on Calibration Drift in Long-Lived Production Models</a></h4>
                  <p class="pub-authors">L. Aoki, <span class="self">A. Hossain</span>, R. Okafor</p>
                  <div class="pub-links">
                    <a href="#"><i class="fas fa-file-pdf"></i>PDF</a>
                    <a href="#"><i class="fas fa-database"></i>Dataset</a>
                  </div>
                </div>
              </article>

              <article class="pub reveal">
                <div class="pub-year">2023</div>
                <div>
                  <div class="pub-venue"><span class="star">★</span>NeurIPS · Workshop · Best Paper</div>
                  <h4 class="pub-name"><a href="#">Vellum: Reproducible Notebooks for Stochastic ML Pipelines</a></h4>
                  <p class="pub-authors"><span class="self">A. Hossain</span>, P. Marlowe</p>
                  <div class="pub-links">
                    <a href="#"><i class="fas fa-file-pdf"></i>PDF</a>
                    <a href="#"><i class="fab fa-github"></i>Code</a>
                    <a href="#"><i class="fas fa-cube"></i>Tool</a>
                  </div>
                </div>
              </article>

              <article class="pub reveal">
                <div class="pub-year">2022</div>
                <div>
                  <div class="pub-venue">EMNLP · Workshop</div>
                  <h4 class="pub-name"><a href="#">Compressing Transformers for Low-Resource Languages: A Bengali Case Study</a></h4>
                  <p class="pub-authors"><span class="self">A. Hossain</span>, M. Karim</p>
                  <div class="pub-links">
                    <a href="#"><i class="fas fa-file-pdf"></i>PDF</a>
                    <a href="#"><i class="fab fa-github"></i>Code</a>
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
