export default function BlogSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <section class="page-section" id="blog">
            <div class="section-head reveal">
              <div class="section-eyebrow"><span class="num">05</span> Blog</div>
              <h2 class="section-title">Notes from the <span class="script">workbench</span></h2>
              <p class="section-sub">
                Essays on systems, machine learning, and the strange job of being
                paid to think for a living.
              </p>
            </div>

            <div class="blog-grid">
           <a 
  href="https://medium.com/@ajtamjid/why-accuracy-alone-is-misleading-in-machine-learning-057d661295d0" 
  target="_blank" 
  class="post reveal"
>
  <div class="post-cover">
    <i class="fas fa-brain"></i>
  </div>

  <div class="post-body">
    <div class="post-meta">
      <span class="post-cat">Machine Learning</span>
      <span class="post-date">April 2026</span>
    </div>

    <h4>Why Accuracy Alone Is Misleading in Machine Learning</h4>

    <p>
      Accuracy can create a false sense of success—especially in imbalanced datasets. 
      This article explores why relying solely on accuracy can fail real-world models 
      and how metrics like precision, recall, and AUC provide deeper insights.
    </p>

    <span class="post-read">
      Read article <i class="fas fa-arrow-right"></i>
    </span>
  </div>
</a>



     <a class="post reveal d1" href="https://medium.com/p/9b0b5b4460bf?postPublishedType=initial" target="_blank">
  <div class="post-cover">
    <i class="fas fa-code"></i>
  </div>

  <div class="post-body">
    <div class="post-meta">
      <span class="post-cat">Software Architecture</span>
      <span class="post-date">May 2026</span>
    </div>

    <h4>What is an API? A Beginner-Friendly Guide to How the Web Really Works</h4>

    <p>
      Ever wondered what happens behind the scenes when you book a train ticket, 
      scroll through an app, or log into a website? This article breaks down APIs, 
      monolithic architecture, and how modern applications communicate — with real-world examples.
    </p>

    <span class="post-read">
      Read article <i class="fas fa-arrow-right"></i>
    </span>
  </div>
</a>

              <a class="post reveal d2">
                <div class="post-cover"><i class="fas fa-pen-nib"></i></div>
                <div class="post-body">
                  <div class="post-meta"><span class="post-cat">Craft</span><span class="post-date">Jan 19, 2026</span></div>
                  <h4>In praise of the small tool</h4>
                  <p>Why my favourite engineering output of last year was a 280-line script nobody asked for.</p>
                  <span class="post-read">Read article <i class="fas fa-arrow-right"></i></span>
                </div>
              </a>

              <a class="post reveal">
                <div class="post-cover"><i class="fas fa-flask"></i></div>
                <div class="post-body">
                  <div class="post-meta"><span class="post-cat">Research</span><span class="post-date">Dec 02, 2025</span></div>
                  <h4>How I read 80 papers a year (and remember most of them)</h4>
                  <p>A modest reading system built around index cards, anchor links, and a single ugly script.</p>
                  <span class="post-read">Read article <i class="fas fa-arrow-right"></i></span>
                </div>
              </a>

              <a class="post reveal d1">
                <div class="post-cover"><i class="fas fa-rocket"></i></div>
                <div class="post-body">
                  <div class="post-meta"><span class="post-cat">Career</span><span class="post-date">Nov 11, 2025</span></div>
                  <h4>From engineer to engineer-researcher: a working playbook</h4>
                  <p>What it actually took to break into ML research from a backend engineering background.</p>
                  <span class="post-read">Read article <i class="fas fa-arrow-right"></i></span>
                </div>
              </a>

              <a class="post reveal d2">
                <div class="post-cover"><i class="fas fa-book"></i></div>
                <div class="post-body">
                  <div class="post-meta"><span class="post-cat">Notes</span><span class="post-date">Oct 04, 2025</span></div>
                  <h4>A reading list for restless engineers</h4>
                  <p>Twelve books, three papers, one cookbook. None of them are about software, and that is the point.</p>
                  <span class="post-read">Read article <i class="fas fa-arrow-right"></i></span>
                </div>
              </a>
            </div>
          </section>
        `,
      }}
    />
  );
}
