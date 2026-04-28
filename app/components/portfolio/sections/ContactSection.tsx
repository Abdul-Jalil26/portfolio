export default function ContactSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <section class="page-section alt" id="contact">
            <div class="section-head reveal">
              <div class="section-eyebrow"><span class="num">06</span> Contact</div>
              <h2 class="section-title">Let's <span class="script">talk</span></h2>
              <p class="section-sub">
                Have a project, a research collaboration, or just want to chat about
                systems and ML? My inbox is open.
              </p>
            </div>

            <div class="contact-wrap">
              <div class="reveal">
                <div class="contact-cards">
                  <div class="c-card">
                    <div class="c-icon"><i class="fas fa-envelope"></i></div>
                    <div>
                      <div class="label">Email</div>
                      <div class="value"><a href="mailto:ajtamjid@gmail.com">ajtamjid@gmail.com</a></div>
                    </div>
                  </div>
                  <div class="c-card">
                    <div class="c-icon"><i class="fas fa-phone"></i></div>
                    <div>
                      <div class="label">Phone</div>
                      <div class="value">+880 1700 000 000</div>
                    </div>
                  </div>
                  <div class="c-card">
                    <div class="c-icon"><i class="fas fa-location-dot"></i></div>
                    <div>
                      <div class="label">Location</div>
                      <div class="value">Nikunjo-2, Dhaka, Bangladesh</div>
                    </div>
                  </div>
                  <div class="availability">
                    <span class="av-dot"></span>
                    <span>Currently available for research collaborations &amp; consulting work.</span>
                  </div>
                </div>
              </div>

              <div class="contact-form reveal d1">
                <div class="form-row">
                  <div class="field">
                    <label for="name">Name</label>
                    <input id="name" type="text" placeholder="Jane Researcher" />
                  </div>
                  <div class="field">
                    <label for="email">Email</label>
                    <input id="email" type="email" placeholder="jane@example.com" />
                  </div>
                </div>
                <div class="field">
                  <label for="topic">What's this about?</label>
                  <select id="topic">
                    <option>Project / consulting inquiry</option>
                    <option>Research collaboration</option>
                    <option>Speaking invitation</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div class="field">
                  <label for="msg">Message</label>
                  <textarea id="msg" placeholder="Tell me a bit about what you're working on…"></textarea>
                </div>
                <button class="form-submit" type="button">
                  Send message <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </section>
        `,
      }}
    />
  );
}
