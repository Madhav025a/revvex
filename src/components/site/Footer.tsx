import { Logo } from "./Logo";

export function Footer() {
  const cols = [
    { t: "Services", l: ["AI Websites", "AI Agents", "SEO", "Review Automation", "CRM Integration"] },
    { t: "Industries", l: ["Legal", "HVAC", "Roofing", "Plumbing", "Electrical", "Manufacturing"] },
    { t: "Company", l: ["About", "Case Studies", "Contact", "Careers"] },
    { t: "Legal", l: ["Privacy Policy", "Terms", "Cookie Policy"] },
  ];
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            AI-powered websites that generate clients, not just traffic.
          </p>
          <form className="mt-6 flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-lg bg-background border border-border px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <button className="rounded-lg bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground">
              Subscribe
            </button>
          </form>
          <div className="mt-6 text-sm text-muted-foreground space-y-1">
            <div>hello@revvexdigital.com</div>
            <div>(555) 010-4820</div>
            <div>123 Market St · Suite 400</div>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {c.l.map((it) => (
                <li key={it}>
                  <a href="#" className="hover:text-brand transition-colors">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Revvex Digital. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">Facebook</a>
            <a href="#" className="hover:text-foreground">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
