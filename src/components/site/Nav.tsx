import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#solution", label: "Solution" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[60] h-0.5 bg-gradient-brand origin-left"
        style={{ width: `${progress * 100}%` }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Book Strategy Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}

export function StickyBookButton() {
  return (
    <a
      href="#book"
      className="fixed bottom-6 right-6 z-40 md:hidden inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow"
    >
      Book a Call
    </a>
  );
}
