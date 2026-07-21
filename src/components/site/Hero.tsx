import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

function AiMockup() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 5), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-8 bg-gradient-brand opacity-20 blur-3xl rounded-[3rem]" />

      {/* Browser frame */}
      <div className="relative glass-strong rounded-2xl overflow-hidden shadow-glow">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="ml-4 flex-1 rounded-md bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
            yourbusiness.com
          </div>
        </div>

        <div className="p-5 grid grid-cols-3 gap-4 min-h-[380px]">
          {/* Fake website content */}
          <div className="col-span-2 space-y-3">
            <div className="h-6 w-3/4 rounded bg-muted/70" />
            <div className="h-3 w-full rounded bg-muted/50" />
            <div className="h-3 w-5/6 rounded bg-muted/50" />
            <div className="h-24 rounded-lg bg-brand/15 border border-border grid-bg" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 rounded-lg bg-muted/40" />
              <div className="h-16 rounded-lg bg-muted/40" />
            </div>
          </div>

          {/* AI chat */}
          <div className="col-span-1 rounded-xl border border-border bg-background/60 p-3 flex flex-col text-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <div className="h-6 w-6 rounded-md bg-gradient-brand flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                AI
              </div>
              <div>
                <div className="font-medium">Revvex Assistant</div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-dot" />
                  Online
                </div>
              </div>
            </div>

            <div className="flex-1 py-3 space-y-2">
              <div className="rounded-lg bg-muted/60 p-2 max-w-[90%]">
                Hi! Looking for a quote?
              </div>
              {step >= 1 && (
                <div className="animate-rise ml-auto rounded-lg bg-gradient-brand text-primary-foreground p-2 max-w-[90%] text-right">
                  Yes, for a new roof.
                </div>
              )}
              {step >= 2 && (
                <div className="animate-rise rounded-lg bg-muted/60 p-2 max-w-[90%]">
                  Great — a few quick questions...
                </div>
              )}
              {step >= 3 && (
                <div className="animate-rise rounded-lg border border-border bg-background p-2 space-y-1">
                  <div className="font-medium">Book a slot</div>
                  <div className="grid grid-cols-3 gap-1 mt-1">
                    <div className="text-center rounded bg-muted/60 py-1">9:00</div>
                    <div className="text-center rounded bg-gradient-brand text-primary-foreground py-1">
                      10:30
                    </div>
                    <div className="text-center rounded bg-muted/60 py-1">2:00</div>
                  </div>
                </div>
              )}
              {step >= 4 && (
                <div className="animate-rise rounded-lg bg-green-400/15 border border-green-400/30 text-green-300 p-2 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Appointment confirmed
                </div>
              )}
            </div>

            {step < 4 && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-dot" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-dot" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-dot" style={{ animationDelay: "300ms" }} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <FloatingCard className="absolute -left-6 top-16 animate-float" style={{ animationDelay: "0s" }}>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-brand/15 border border-border flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-brand">
              <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">This month</div>
            <div className="text-sm font-semibold">+8 Qualified Appointments</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute -right-4 top-40 animate-float" style={{ animationDelay: "1s" }}>
        <div className="flex items-center gap-3">
          <div className="text-yellow-300 text-sm">★★★★★</div>
          <div className="text-xs">New Google Review</div>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute -left-4 -bottom-4 animate-float" style={{ animationDelay: "2s" }}>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse-dot" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Response time</div>
            <div className="text-sm font-semibold">95% Faster</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute -right-6 -bottom-2 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center text-[10px] font-bold text-primary-foreground">
            24/7
          </div>
          <div className="text-sm font-semibold">AI Assistant Live</div>
        </div>
      </FloatingCard>
    </div>
  );
}

function FloatingCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`glass-strong rounded-xl px-3.5 py-2.5 shadow-card ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-dot" />
              AI-Powered Websites • Built for Conversion
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
              Your website should be your{" "}
              <span className="text-gradient">best salesperson.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build AI-powered websites that help legal firms, trade contractors, local businesses,
              and B2B companies generate qualified appointments automatically — even while you sleep.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
              >
                Book Free Strategy Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-card transition"
              >
                See How It Works
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-background bg-gradient-brand"
                    style={{ filter: `hue-rotate(${i * 40}deg)` }}
                  />
                ))}
              </div>
              <div>
                <div className="text-yellow-300">★★★★★</div>
                Trusted by growing service businesses
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <AiMockup />
        </Reveal>
      </div>
    </section>
  );
}
