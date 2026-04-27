export default function MobileBar() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div class="mobile-bar">
            <div class="mobile-brand">
              <div class="mobile-avatar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="ma" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D9DEEA"/><stop offset="1" stop-color="#B8C0D5"/></linearGradient></defs>
                  <rect width="100" height="100" fill="url(#ma)"/>
                  <circle cx="50" cy="40" r="16" fill="#0E1849" opacity="0.7"/>
                  <path d="M20 90 Q50 60 80 90 Z" fill="#0E1849" opacity="0.7"/>
                </svg>
              </div>
              <span>Abdul Jalil Tamjid</span>
            </div>
            <button class="menu-btn" id="openMenu" aria-label="Open menu"><i class="fas fa-bars"></i></button>
          </div>
        `,
      }}
    />
  );
}
