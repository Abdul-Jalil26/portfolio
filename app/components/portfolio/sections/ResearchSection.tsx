export default function ResearchSection() {
  return (
    <section className="page-section" id="research">
      <div className="section-head reveal">
        <div className="section-eyebrow">
          <span className="num">03</span> Research
        </div>
        <h2 className="section-title">
          Things I&apos;m <span className="script">studying</span>
        </h2>
        <p className="section-sub">
          My research sits at the seam of systems and machine learning:
          how we build, serve, and evaluate models at scale.
        </p>
      </div>

      <div className="areas-grid">
        <div className="area-card reveal">
          <div className="icon">S</div>
          <h4>Distributed ML Systems</h4>
          <p>
            Inference scheduling, KV-cache management, admission control,
            and multi-tenant serving for transformer workloads.
          </p>
        </div>

        <div className="area-card reveal d1">
          <div className="icon">N</div>
          <h4>Natural Language Processing</h4>
          <p>
            Retrieval-augmented generation, long-context reasoning,
            and low-resource language modeling for Bengali and similar languages.
          </p>
        </div>

        <div className="area-card reveal d2">
          <div className="icon">E</div>
          <h4>Evaluation and Reliability</h4>
          <p>
            Building realistic benchmarks that catch calibration drift,
            hallucinations, and distribution shifts before production impact.
          </p>
        </div>
      </div>

      <div className="pubs-title">- Selected Publications -</div>

      <div className="pub-list">
        <article className="pub reveal">
          <div className="pub-year">2025</div>
          <div>
            <div className="pub-venue">
              <span className="star">*</span> Journal Paper
            </div>
            <h4 className="pub-name">
              <a href="#">DAM-Net: Dual Attention Multi-task Framework for Coronary Artery Segmentation and
                Stenosis Severity Classification</a>
            </h4>
            <p className="pub-authors">
              <span className="self">Abdul Jalil Tamjid</span>, Mohammad Motiur Rahman, Sadia Tasnim
            </p>
            <div className="pub-links">
              <a href="#">PDF</a>
              <a href="#">arXiv</a>
              <a href="#">Code</a>
              <a href="#">BibTeX</a>
            </div>
          </div>
        </article>

        <article className="pub reveal">
          <div className="pub-year">2025</div>
          <div>
            <div className="pub-venue">ICCIT Conference Paper</div>
            <h4 className="pub-name">
              <a href="#">Performance Comparison of Spatial Filters for Denoising Rayleigh, Rician, and Gamma Noise Models in Ultrasound Images</a>
            </h4>
            <p className="pub-authors">
              <span className="self">Monir Hossain</span>, Abdul Jalil Tamjid, Mohammad Motiur Rahman ...
            </p>
            <div className="pub-links">
              <a href="#">PDF</a>
              <a href="#">arXiv</a>
              <a href="#">Slides</a>
              <a href="#">Talk</a>
            </div>
          </div>
        </article>

        <article className="pub reveal">
          <div className="pub-year">2026</div>
          <div>
            <div className="pub-venue">ICEFront Conference Paper</div>
            <h4 className="pub-name">
              <a href="#">A Note on Calibration Drift in Long-Lived Production Models</a>
            </h4>
            <p className="pub-authors">
              <span className="self">Abdul Jalil Tamjid</span>, Tresha Rani Robi Das, Abdur Rakib ...
            </p>
            <div className="pub-links">
              <a href="#">PDF</a>
              <a href="#">Dataset</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
