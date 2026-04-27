export default function Sidebar() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <aside class="sidebar">
            <div class="brand">
              <div class="avatar">
                <img 
    src="/Abdul_Jalil_Tamjid.jpg" 
    alt="Abdul Jalil Tamjid" 
    style="width:100%; height:100%; object-fit:cover; border-radius:50%;"
  />
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
              <a href="https://github.com/Abdul-Jalil26" aria-label="GitHub"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/abdul-jalil-tamjid-25a6671a5" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://x.com/Abdul_Jalil__?t=vywGphndYAza37MrG7OQRw&s=09" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
              <a href="https://scholar.google.com/citations?view_op=new_profile&hl=en" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
            </div>

            <div class="copyright">
              Copyright © 2026 Abdul Jalil Tamjid<br>
              .All rights reserved.
            </div>
          </aside>
        `,
      }}
    />
  );
}
