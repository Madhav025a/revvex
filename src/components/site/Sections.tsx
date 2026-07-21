import { useEffect, useState } from "react";
import {
  Bot, Calendar, MessageCircle, Search, Zap, Star, Database, Mail,
  Smartphone, BarChart3, Shield, MousePointerClick, ArrowRight,
  Scale, Wrench, Hammer, Plug, Home, Truck, Factory, Briefcase, TrendingUp,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useCountUp, useReveal } from "@/hooks/use-reveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

/* ---------- Social Proof ---------- */
export function SocialProof() {
  const logos = ["ClearLaw", "PeakHVAC", "IronRoof", "SwiftPlumb", "BrightVolt", "HaulPro", "GreenScape", "NorthMfg"];
  return (
    <section className="py-16 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by growing businesses across North America
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-muted-foreground/70 font-semibold tracking-tight hover:text-foreground transition">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
export function Problem() {
  const problems = [
    "Visitors leave without ever contacting you",
    "Calls after business hours go unanswered",
    "Leads get forgotten in a busy inbox",
    "Staff waste hours answering the same questions",
    "Your website reads like a brochure, not a salesperson",
    "Reviews trickle in and local visibility suffers",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">The problem</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Most websites cost you money — quietly.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              You paid for a website. It looks fine. But it's not doing what a real salesperson would do.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <div className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-brand/50 transition-all">
                <div className="text-destructive/80 text-2xl">—</div>
                <p className="mt-2 text-base">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Solution ---------- */
export function Solution() {
  const cards = [
    { icon: Bot, title: "AI Agent", desc: "A 24/7 assistant that answers, qualifies, and books like your best rep." },
    { icon: MousePointerClick, title: "Conversion Funnel", desc: "Every section engineered to move the visitor toward booking." },
    { icon: Search, title: "SEO Foundation", desc: "Fast, technical SEO baked in from day one — local and organic." },
    { icon: Star, title: "Review Automation", desc: "Turn happy customers into 5-star Google reviews on autopilot." },
    { icon: Calendar, title: "Calendar Booking", desc: "Live availability, instant confirmations, no back-and-forth." },
    { icon: MessageCircle, title: "Lead Qualification", desc: "The AI asks the right questions and routes only real prospects." },
    { icon: Database, title: "CRM Automation", desc: "Every lead lands in your CRM with context, tagged and ready." },
    { icon: BarChart3, title: "Analytics", desc: "See what's converting — traffic, chats, bookings, revenue." },
  ];
  return (
    <section id="solution" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">The solution</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              A website that <span className="text-gradient">sells for you.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We don't ship brochures. We build AI-powered client acquisition systems that
              generate qualified appointments while you focus on the work.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="group relative h-full glass rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transition-all">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                <div className="h-11 w-11 rounded-xl bg-brand/10 border border-border flex items-center justify-center text-brand">
                  <c.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
export function HowItWorks() {
  const steps = [
    { n: "01", t: "Strategy Session", d: "We map your offer, ideal client, and conversion path." },
    { n: "02", t: "Website Design", d: "Custom, premium design built around booked calls." },
    { n: "03", t: "AI Setup", d: "Your AI agent is trained on your services, pricing, and FAQs." },
    { n: "04", t: "Automation Setup", d: "CRM, follow-ups, review requests — wired end to end." },
    { n: "05", t: "Launch", d: "We handle DNS, speed, and technical SEO on go-live." },
    { n: "06", t: "Appointments Start", d: "Qualified consultations start landing on your calendar." },
  ];
  return (
    <section id="how" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">How it works</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Six steps from strategy to booked calls.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className={`relative flex md:items-center gap-6 md:gap-12 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-brand shadow-glow" />
                  <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="glass rounded-2xl p-6">
                      <div className="text-xs text-brand font-mono">{s.n}</div>
                      <h3 className="mt-2 text-xl font-semibold">{s.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- AI Section ---------- */
export function AiDeepDive() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand">The AI layer</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Meet the AI receptionist that never sleeps.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Trained on your services, pricing, and FAQs. It greets visitors,
              answers real questions, qualifies leads, and drops booked appointments
              straight into your CRM — 24/7, in seconds.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Answers instantly — 95% faster than human response",
                "Qualifies before it books — no tire kickers",
                "Auto follow-ups over email + SMS",
                "Requests reviews from happy customers",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 rounded-full bg-gradient-brand flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" />
            <div className="relative glass-strong rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 pb-3 border-b border-border">
                <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center text-xs font-bold text-primary-foreground">AI</div>
                <div className="text-sm font-medium">Live Qualification</div>
                <div className="ml-auto flex items-center gap-1 text-xs text-green-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-dot" /> Active
                </div>
              </div>
              {[
                { who: "ai", text: "Hi! What service are you looking for?" },
                { who: "u", text: "Emergency plumbing — burst pipe" },
                { who: "ai", text: "Got it. Is water still running? What's your ZIP?" },
                { who: "u", text: "Yes. 30329." },
                { who: "ai", text: "Dispatching options. Fastest slot: today 2:30 PM." },
              ].map((m, i) => (
                <div key={i} className={`flex ${m.who === "u" ? "justify-end" : ""}`}>
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    m.who === "u" ? "bg-gradient-brand text-primary-foreground" : "bg-muted/60"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-brand/30 bg-brand/5 p-3 mt-2">
                <div className="text-xs text-muted-foreground">Lead scored</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-sm font-semibold">Qualified · Emergency</div>
                  <div className="text-xs text-green-300">→ Sent to CRM</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Features Grid ---------- */
export function Features() {
  const items = [
    { i: Bot, t: "AI Receptionist", d: "Answers questions and qualifies leads 24/7." },
    { i: Calendar, t: "Calendar Booking", d: "Live availability with instant confirmations." },
    { i: MessageCircle, t: "Live Chat", d: "AI-first with human handoff when needed." },
    { i: Search, t: "SEO Foundation", d: "Technical + local SEO baked in." },
    { i: Zap, t: "Speed Optimized", d: "Sub-second loads on Core Web Vitals." },
    { i: Star, t: "Review Automation", d: "Grow 5-star Google reviews automatically." },
    { i: Database, t: "CRM Integration", d: "Every lead syncs, tagged and enriched." },
    { i: Mail, t: "Email Automation", d: "Follow-ups that keep leads warm." },
    { i: Smartphone, t: "Mobile First", d: "Designed for the way clients actually browse." },
    { i: BarChart3, t: "Analytics", d: "See conversions, not just pageviews." },
    { i: Shield, t: "Security", d: "SSL, backups, and hardened hosting." },
    { i: MousePointerClick, t: "Lead Capture", d: "Frictionless forms + smart routing." },
  ];
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">Everything included</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Twelve pieces. One system.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((f, i) => (
            <Reveal key={f.t} delay={i * 40}>
              <div className="group glass rounded-2xl p-6 h-full hover:-translate-y-1 hover:border-brand/50 transition-all">
                <div className="h-10 w-10 rounded-lg bg-brand/10 border border-border flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                  <f.i size={18} />
                </div>
                <h3 className="mt-4 font-semibold">{f.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Results / Counters ---------- */
function Metric({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const n = useCountUp(value, 1600, visible);
  const display = value % 1 === 0 ? Math.round(n) : n.toFixed(1);
  return (
    <div ref={ref} className="glass rounded-2xl p-8 text-center">
      <div className="text-5xl md:text-6xl font-semibold tracking-tight text-gradient">
        {display}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function Results() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">Real outcomes</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Built to move the numbers that matter.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Metric value={8} label="Qualified appointments a month, typical" />
          <Metric value={24} suffix="/7" label="AI agent — always on" />
          <Metric value={3} suffix="x" label="More website conversions" />
          <Metric value={90} suffix="%" label="Faster lead response" />
          <Metric value={5} suffix="★" label="Google review growth" />
          <Metric value={100} suffix="%" label="Mobile optimized" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
export function Industries() {
  const items = [
    { i: Scale, t: "Legal Firms" },
    { i: Wrench, t: "HVAC" },
    { i: Home, t: "Roofing" },
    { i: Plug, t: "Electrical" },
    { i: Hammer, t: "Plumbing" },
    { i: Truck, t: "Junk Removal" },
    { i: Factory, t: "Manufacturing" },
    { i: Briefcase, t: "Professional Services" },
  ];
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">Industries we serve</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Built for real businesses.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 50}>
              <div className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:border-brand/50 transition-all">
                <div className="h-12 w-12 rounded-xl bg-brand/10 border border-border flex items-center justify-center text-brand">
                  <it.i size={22} />
                </div>
                <div className="mt-4 font-medium">{it.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / After ---------- */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const rows = [
    ["Speed", "Slow, bloated", "Sub-second loads"],
    ["Conversions", "< 1%", "5–8% typical"],
    ["SEO", "Afterthought", "Foundation"],
    ["Design", "Template", "Custom, premium"],
    ["Lead capture", "One form", "AI + forms + chat"],
    ["Bookings", "Manual back-and-forth", "Automatic"],
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">Before / After</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              The difference is measurable.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 glass-strong rounded-3xl p-6 md:p-10">
            <div className="relative h-56 rounded-2xl overflow-hidden border border-border" style={{ background: "linear-gradient(135deg, oklch(0.25 0.02 265), oklch(0.2 0.02 265))" }}>
              <div
                className="absolute inset-y-0 left-0 bg-gradient-brand animate-gradient"
                style={{ width: `${pos}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-between px-6 text-sm font-medium">
                <span className="text-primary-foreground drop-shadow">Revvex Website</span>
                <span className="text-muted-foreground">Old Website</span>
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize"
                style={{ left: `calc(${pos}% - 2px)` }}
              />
            </div>
            <input
              type="range"
              min={10}
              max={90}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Compare before and after"
              className="mt-4 w-full accent-brand"
            />
            <div className="mt-8 grid md:grid-cols-3 gap-x-8">
              <div className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">Metric</div>
              <div className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">Old website</div>
              <div className="hidden md:block text-xs uppercase tracking-widest text-brand">Revvex</div>
              {rows.map((r) => (
                <div key={r[0]} className="contents">
                  <div className="mt-4 font-medium">{r[0]}</div>
                  <div className="mt-1 md:mt-4 text-sm text-muted-foreground line-through">{r[1]}</div>
                  <div className="mt-1 md:mt-4 text-sm">{r[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  const t = [
    { q: "The AI books calls while I'm on the truck. It's like adding a full-time rep.", a: "Marcus R.", r: "Owner, HVAC" },
    { q: "We went from 3 booked consults a month to over a dozen. The site pays for itself.", a: "Elena G.", r: "Managing Partner, Law Firm" },
    { q: "Reviews doubled in 90 days. Local search rankings finally moved.", a: "Danny T.", r: "Owner, Roofing" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">What clients say</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Fewer questions. More booked calls.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {t.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                <div className="text-yellow-300">★★★★★</div>
                <p className="mt-4 text-lg leading-relaxed">"{it.q}"</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand" />
                  <div>
                    <div className="text-sm font-medium">{it.a}</div>
                    <div className="text-xs text-muted-foreground">{it.r}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Case Studies ---------- */
export function CaseStudies() {
  const cases = [
    {
      tag: "Legal",
      title: "Boutique law firm books 14 consults / month",
      c: "Outdated site, no after-hours coverage, low intake conversion.",
      s: "Custom site, AI intake bot, automated qualification and calendar.",
      r: ["3.2× more consults", "78% faster response", "+41% organic traffic"],
    },
    {
      tag: "HVAC",
      title: "Regional HVAC captures emergency jobs 24/7",
      c: "Losing after-hours emergency work to competitors.",
      s: "AI dispatch bot with location + severity qualification.",
      r: ["+62 emergency jobs / qtr", "24/7 coverage", "5★ growth: 3.9 → 4.8"],
    },
    {
      tag: "Roofing",
      title: "Roofer triples booked estimates in a season",
      c: "Traffic came in but rarely converted to on-site estimates.",
      s: "Conversion-first design, AI qualifier, review automation.",
      r: ["3.1× booked estimates", "+2.4× review volume", "#1–3 local pack"],
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">Case studies</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Real work. Real numbers.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="glass rounded-2xl p-6 h-full flex flex-col">
                <div className="text-xs uppercase tracking-widest text-brand">{c.tag}</div>
                <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
                <div className="mt-5 space-y-3 text-sm">
                  <div><span className="text-muted-foreground">Challenge · </span>{c.c}</div>
                  <div><span className="text-muted-foreground">Solution · </span>{c.s}</div>
                </div>
                <ul className="mt-5 space-y-1.5 text-sm">
                  {c.r.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-brand" />
                      {r}
                    </li>
                  ))}
                </ul>
                <a href="#book" className="mt-6 inline-flex items-center gap-1.5 text-sm text-brand hover:opacity-80">
                  Book a similar system <ArrowRight size={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FAQ() {
  const items = [
    { q: "How long does the whole build take?", a: "Most launches happen in 3–5 weeks depending on scope. Strategy is week one; the AI is trained and tested by launch." },
    { q: "Do you build custom websites, or use templates?", a: "Every site is custom-designed around your offer and conversion path. No cookie-cutter templates." },
    { q: "Can the AI actually answer my customers' questions?", a: "Yes — it's trained on your services, pricing, FAQs, and policies. When it's not sure, it hands off cleanly." },
    { q: "Will it integrate with my CRM?", a: "We integrate with HubSpot, GoHighLevel, Pipedrive, Salesforce, Jobber, ServiceTitan and more via native APIs or Zapier." },
    { q: "Can it book appointments on my calendar?", a: "Yes. Google Calendar, Outlook, Calendly, and most scheduling tools work out of the box." },
    { q: "Do you handle hosting?", a: "We offer managed hosting with SSL, backups, monitoring, and speed optimization included." },
    { q: "Can you improve my Google rankings?", a: "We build the SEO foundation — technical, on-page, and local — that ranking depends on. We focus on outcomes we can influence rather than guarantees." },
  ];
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand">FAQ</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Good questions.</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-10">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base py-5 hover:no-underline">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA + Calendar ---------- */
export function FinalCta() {
  return (

    <section id="book" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl overflow-hidden glass-strong p-8 md:p-14">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-2/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                  Ready to turn your website into your{" "}
                  <span className="text-gradient">best salesperson?</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 text-lg text-muted-foreground max-w-lg">
                  Book a free 30-minute strategy call. We'll audit your current site,
                  map your conversion path, and show you what an AI-powered version could do.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="mt-6 space-y-2 text-sm">
                  {["No pitch, no pressure", "Custom strategy walkthrough", "Live AI demo on your business"].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-gradient-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="rounded-2xl bg-background/60 border border-border p-2 sm:p-3 overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ogVSAO3RczY-cRVOLtL4Z4x_afy9wOqGGH3lCaW_6iwyA_fJ0GrrPuoTxfL20PdAlrgVi4bPh?gv=true"
                  title="Book a strategy call with Revvex Digital"
                  loading="lazy"
                  className="w-full rounded-xl bg-white"
                  style={{ border: 0, minHeight: 600 }}
                  height={600}
                  frameBorder={0}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
