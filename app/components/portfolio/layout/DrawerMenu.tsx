export default function DrawerMenu() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div class="drawer" id="drawer">
            <button class="drawer-close" id="closeMenu" aria-label="Close menu"><i class="fas fa-times"></i></button>
            <nav class="nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#research">Research</a>
              <a href="#projects">Projects</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        `,
      }}
    />
  );
}
