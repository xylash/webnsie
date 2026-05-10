export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl font-light tracking-wide text-foreground">
              Truelens
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Photography
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Truelens Photography. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
