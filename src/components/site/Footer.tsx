export function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-12">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-6 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center lg:px-16">
        <div className="font-display text-xl normal-case tracking-tight text-foreground">
          <span className="gradient-gold">Dubai</span> Mall
        </div>
        <div>© {new Date().getFullYear()} The Dubai Mall · Emaar Properties</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">Privacy</a>
          <a href="#" className="hover:text-gold">Press</a>
          <a href="#" className="hover:text-gold">Careers</a>
        </div>
      </div>
    </footer>
  );
}