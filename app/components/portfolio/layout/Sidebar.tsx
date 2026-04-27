export default function Sidebar() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <aside class="sidebar">
            <div class="brand">
              <div class="avatar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stop-color="#EFF1F7"/>
                      <stop offset="1" stop-color="#C9CFE0"/>
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="url(#bg)"/>
                  <path d="M22 38 Q22 18 50 18 Q78 18 78 40 L78 50 Q70 38 50 38 Q30 38 22 50 Z" fill="#1F1B17"/>
                  <ellipse cx="50" cy="48" rx="20" ry="22" fill="#E8C9A8"/>
                  <circle cx="42" cy="48" r="5" fill="none" stroke="#0E1849" stroke-width="1.5"/>
                  <circle cx="58" cy="48" r="5" fill="none" stroke="#0E1849" stroke-width="1.5"/>
                  <line x1="47" y1="48" x2="53" y2="48" stroke="#0E1849" stroke-width="1.5"/>
                  <path d="M44 58 Q50 63 56 58" fill="none" stroke="#0E1849" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M18 100 Q18 78 50 76 Q82 78 82 100 Z" fill="#FFFFFF"/>
                  <path d="M50 76 L46 86 L50 90 L54 86 Z" fill="#E8C9A8"/>
                </svg>
              </div>
              <div class="brand-name">Abdul Jalil Tamjid</div>
              <div class="brand-role">SE · Researcher</div>
              <div class="brand-script">Abdul Jalil Tamjid</div>
            </div>

            <nav class="nav">
              <a href="#home" class="active">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#research">Research</a>
              <a href="#projects">Projects</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </nav>

            <div class="socials">
              <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
            </div>

            <div class="copyright">
              Copyright © 2026 Tamjid<br>
              Hossain. All rights reserved.
            </div>
          </aside>
        `,
      }}
    />
  );
}
