'use client';

import { useEffect } from 'react';

export default function PortfolioClientEffects() {
  useEffect(() => {
    const drawer = document.getElementById('drawer');
    const openBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');

    const openDrawer = () => drawer?.classList.add('open');
    const closeDrawer = () => drawer?.classList.remove('open');

    openBtn?.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);

    const drawerLinks = drawer ? Array.from(drawer.querySelectorAll('a')) : [];
    drawerLinks.forEach((a) => a.addEventListener('click', closeDrawer));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealTargets = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    revealTargets.forEach((el) => io.observe(el));

    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.sidebar .nav a');
    const navIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = '#' + e.target.id;
            navLinks.forEach((a) => {
              a.classList.toggle('active', a.getAttribute('href') === id);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => navIO.observe(s));

    return () => {
      openBtn?.removeEventListener('click', openDrawer);
      closeBtn?.removeEventListener('click', closeDrawer);
      drawerLinks.forEach((a) => a.removeEventListener('click', closeDrawer));
      io.disconnect();
      navIO.disconnect();
    };
  }, []);

  return null;
}
