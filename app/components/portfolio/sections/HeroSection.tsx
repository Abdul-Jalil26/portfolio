export default function HeroSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <section class="hero" id="home">
            <div class="hero-text">
              <h1 class="reveal in d1">
                Hi, I'm <span class="accent">Tamjid!</span><br>
                Software Engineer<br>
                &amp; Researcher
              </h1>
              <p class="hero-sub reveal in d2">
                I'm a Dhaka based software engineer &amp; ML researcher with
                <strong>6+ years</strong> of experience building production
                systems and publishing applied research.
              </p>
              <div class="cta-row reveal in d3">
                <a href="#contact" class="btn btn-primary">Got a project?</a>
                <a href="#contact" class="btn btn-ghost">Let's talk</a>
                <span class="dot-deco" aria-hidden="true"></span>
              </div>
              <div class="contact-info reveal in d4">
                <p><i class="fas fa-phone"></i>+880 1700 000 000</p>
                <p><a href="mailto:hello@abduljaliltamjid.dev"><i class="fas fa-envelope"></i>hello@abduljaliltamjid.dev</a></p>
                <p><i class="fas fa-location-dot"></i>Banani, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div class="hero-visual reveal in d2">
              <div class="visual-wrap">
                <div class="shape">
                  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <clipPath id="topHalf"><rect x="0" y="0" width="400" height="200"/></clipPath>
                      <clipPath id="bottomHalf"><rect x="0" y="200" width="400" height="200"/></clipPath>
                    </defs>
                    <circle cx="200" cy="200" r="180" fill="#8B7BFF" clip-path="url(#topHalf)" transform="translate(-14 0)"/>
                    <circle cx="200" cy="200" r="180" fill="#8B7BFF" clip-path="url(#bottomHalf)" transform="translate(14 0)"/>
                  </svg>
                </div>
                <div class="portrait">
                  <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M40 70 Q40 25 100 25 Q160 25 160 75 L160 95 Q145 70 100 70 Q55 70 40 95 Z" fill="#231C16"/>
                    <ellipse cx="100" cy="95" rx="42" ry="48" fill="#E8C9A8"/>
                    <ellipse cx="58" cy="100" rx="6" ry="10" fill="#E8C9A8"/>
                    <ellipse cx="142" cy="100" rx="6" ry="10" fill="#E8C9A8"/>
                    <circle cx="84" cy="95" r="11" fill="none" stroke="#0E1849" stroke-width="2.4"/>
                    <circle cx="116" cy="95" r="11" fill="none" stroke="#0E1849" stroke-width="2.4"/>
                    <line x1="95" y1="95" x2="105" y2="95" stroke="#0E1849" stroke-width="2.4"/>
                    <line x1="73" y1="93" x2="66" y2="91" stroke="#0E1849" stroke-width="2.4" stroke-linecap="round"/>
                    <line x1="127" y1="93" x2="134" y2="91" stroke="#0E1849" stroke-width="2.4" stroke-linecap="round"/>
                    <path d="M100 100 Q98 112 100 116 Q102 117 104 115" fill="none" stroke="#C9A684" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M88 128 Q100 138 112 128" fill="none" stroke="#0E1849" stroke-width="2.2" stroke-linecap="round"/>
                    <rect x="86" y="138" width="28" height="18" fill="#E8C9A8"/>
                    <path d="M30 220 Q30 165 100 158 Q170 165 170 220 Z" fill="#A39989"/>
                    <ellipse cx="100" cy="160" rx="22" ry="10" fill="#A39989"/>
                    <ellipse cx="100" cy="158" rx="20" ry="6" fill="#8E8474"/>
                    <path d="M40 200 Q70 175 100 185 Q130 175 160 200 L160 220 L40 220 Z" fill="#8E8474"/>
                  </svg>
                </div>
                <span class="deco deco-1">✦</span>
                <span class="deco deco-2">✦</span>
                <span class="deco deco-3">✦</span>
                <span class="deco deco-4">✦</span>
                <svg class="swoosh" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 Q40 5 65 25 Q70 28 65 35" stroke="#0E1849" stroke-width="2" fill="none" stroke-linecap="round"/>
                  <path d="M58 30 L65 35 L60 42" stroke="#0E1849" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </section>
        `,
      }}
    />
  );
}
