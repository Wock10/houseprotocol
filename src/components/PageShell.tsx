import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, lead, children }: PageShellProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-20">
      <header className="mb-10 animate-rise">
        {eyebrow ? (
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {lead}
        </p>
        <div className="glow-line mt-8" />
      </header>
      <div className="prose-doc animate-rise-delay">{children}</div>
    </article>
  );
}
