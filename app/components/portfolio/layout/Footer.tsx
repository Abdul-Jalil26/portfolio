export default function Footer() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <footer class="footer">
            <div class="footer-brand">Abdul Jalil Tamjid</div>
            <div class="footer-meta">
              <span>Built &amp; designed by hand <i class="fas fa-heart"></i></span>
              <span>·</span>
              <span>© 2026 All rights reserved</span>
            </div>
            <div class="footer-socials">
              <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Scholar"><i class="fas fa-graduation-cap"></i></a>
            </div>
          </footer>
        `,
      }}
    />
  );
}
