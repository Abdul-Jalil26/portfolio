export default function DrawerMenu() {
  return (
    <div className="drawer" id="drawer">
      <button className="drawer-close" id="closeMenu" aria-label="Close menu">
        <i className="fas fa-times"></i>
      </button>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#research">Research</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}