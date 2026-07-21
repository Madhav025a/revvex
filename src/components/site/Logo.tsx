export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="h-8 w-8 rounded-lg bg-gradient-brand animate-gradient shadow-glow flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary-foreground"
          >
            <path
              d="M4 20 L4 4 L12 4 C15.3 4 18 6.7 18 10 C18 12.5 16.5 14.6 14.3 15.5 L20 20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <span className="text-lg font-semibold tracking-tight">
        Revvex<span className="text-muted-foreground font-normal"> Digital</span>
      </span>
    </div>
  );
}
