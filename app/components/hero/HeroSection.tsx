"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

function GithubIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ background: "#1C1208", borderBottom: "1px solid rgba(212,175,80,0.15)" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 400,
              color: "#F9F6F1",
              letterSpacing: "0.02em",
            }}
          >
            Abdul Jalil <span style={{ color: "#D4AF50", fontStyle: "italic" }}>Tamjid</span>
          </span>
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.22em",
              color: "rgba(212,175,80,0.6)",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            AI Engineer · Researcher
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                fontSize: "12px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(249,246,241,0.65)",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              className="hover:text-[#D4AF50]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "#1C1208",
              background: "#D4AF50",
              padding: "8px 20px",
              borderRadius: "2px",
            }}
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#F9F6F1]"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div
          style={{ background: "#1C1208", borderTop: "1px solid rgba(212,175,80,0.1)" }}
          className="md:hidden px-6 py-6 flex flex-col gap-5"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(249,246,241,0.7)",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const stats = [
  { value: "3.92", label: "CGPA / 4.00" },
  { value: "3+", label: "Publications" },
  { value: "5+", label: "Projects" },
  { value: "2+", label: "Years Research" },
];

const skills = [
  "PyTorch", "Python", "FastAPI", "Medical Imaging",
  "LLMs / RAG", "Docker", "Next.js", "PostgreSQL",
];

export default function HeroSection() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{ background: "#1C1208", minHeight: "100vh" }}
        className="flex items-center pt-[72px]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(212,175,80,0.1)",
                  border: "1px solid rgba(212,175,80,0.25)",
                  borderRadius: "2px",
                  padding: "6px 16px",
                  marginBottom: "28px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#D4AF50",
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#D4AF50",
                    fontWeight: 400,
                  }}
                >
                  Available for PhD 2025
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(48px, 7vw, 80px)",
                  fontWeight: 300,
                  color: "#F9F6F1",
                  lineHeight: 1.05,
                  marginBottom: "6px",
                }}
              >
                Abdul Jalil
              </h1>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(48px, 7vw, 80px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#D4AF50",
                  lineHeight: 1.05,
                  marginBottom: "28px",
                }}
              >
                Tamjid
              </h1>

              <div
                style={{
                  width: "48px",
                  height: "1px",
                  background: "#D4AF50",
                  marginBottom: "24px",
                }}
              />

              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(249,246,241,0.65)",
                  lineHeight: 1.85,
                  maxWidth: "480px",
                  fontWeight: 300,
                  marginBottom: "36px",
                }}
              >
                AI Engineer and Medical Imaging Researcher from Bangladesh, building intelligent systems that advance healthcare in resource-limited environments. Applying for PhD at{" "}
                <span style={{ color: "#D4AF50", fontStyle: "italic" }}>
                  Harvard University
                </span>
                .
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="/resume.pdf"
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#D4AF50",
                    color: "#1C1208",
                    padding: "13px 28px",
                    borderRadius: "2px",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  Download CV
                </a>
                <Link
                  href="/research"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid rgba(212,175,80,0.35)",
                    color: "rgba(249,246,241,0.8)",
                    padding: "13px 28px",
                    borderRadius: "2px",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  View Research
                </Link>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-5">
                {[
                  { icon: <GithubIcon />, href: "https://github.com/yourusername" },
                  { icon: <LinkedinIcon />, href: "https://linkedin.com/in/yourusername" },
                  { icon: <MailIcon />, href: "mailto:tamjid@example.com" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "rgba(249,246,241,0.45)",
                      transition: "color 0.2s",
                    }}
                    className="hover:text-[#D4AF50]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8">

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: "rgba(249,246,241,0.04)",
                      border: "1px solid rgba(212,175,80,0.15)",
                      borderRadius: "4px",
                      padding: "24px 22px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "42px",
                        fontWeight: 300,
                        color: "#D4AF50",
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(249,246,241,0.4)",
                        fontWeight: 400,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div
                style={{
                  background: "rgba(249,246,241,0.03)",
                  border: "1px solid rgba(212,175,80,0.12)",
                  borderRadius: "4px",
                  padding: "24px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#D4AF50",
                    marginBottom: "16px",
                    fontWeight: 400,
                  }}
                >
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "11px",
                        color: "rgba(249,246,241,0.6)",
                        border: "1px solid rgba(249,246,241,0.1)",
                        borderRadius: "2px",
                        padding: "4px 12px",
                        fontWeight: 300,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Research Statement */}
              <div
                style={{
                  borderLeft: "2px solid #D4AF50",
                  paddingLeft: "20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "rgba(249,246,241,0.65)",
                    lineHeight: 1.8,
                  }}
                >
                  "I aim to develop AI systems that can bridge the diagnostic gap in underserved healthcare settings — making precision medicine accessible beyond the walls of elite institutions."
                </p>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,80,0.5)",
                    marginTop: "10px",
                    fontWeight: 400,
                  }}
                >
                  Research Vision
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section style={{ background: "#F9F6F1" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "◈",
                title: "AI & Machine Learning",
                desc: "Designing and deploying transformer-based architectures for medical imaging, NLP, and large-scale inference systems.",
              },
              {
                icon: "◉",
                title: "Backend Engineering",
                desc: "Building production-grade microservices, REST/GraphQL APIs, and distributed systems with Python and modern cloud stacks.",
              },
              {
                icon: "◫",
                title: "Clinical AI Research",
                desc: "Publishing research on AI-assisted diagnostics — from retinal OCT analysis to chest X-ray triage in low-resource settings.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "28px",
                    color: "#D4AF50",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#1C1208",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "#D4AF50",
                    opacity: 0.6,
                  }}
                />
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#6B6257",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1C1208",
          borderTop: "1px solid rgba(212,175,80,0.12)",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "rgba(249,246,241,0.3)",
            textTransform: "uppercase",
          }}
        >
          © 2025 Abdul Jalil Tamjid · Built for Harvard PhD Application
        </p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </>
  );
}