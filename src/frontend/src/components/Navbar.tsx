import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#trust" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      data-ocid="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth bg-primary ${
        scrolled ? "shadow-elevated" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 transition-smooth hover:opacity-80"
            aria-label="PuneNurse Bureau home"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-accent">
              <Heart
                className="w-5 h-5 text-accent-foreground"
                fill="currentColor"
              />
            </div>
            <div className="text-left min-w-0">
              <span className="text-primary-foreground font-display font-semibold text-lg leading-tight block">
                PuneNurse Bureau
              </span>
              <span className="text-primary-foreground/60 text-xs leading-tight block tracking-wide">
                Home Healthcare Pune
              </span>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="nav-cta"
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-accent text-accent-foreground transition-smooth hover:opacity-90 active:scale-95"
            >
              Request a Call
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-primary-foreground/10 bg-primary">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => {
                  scrollTo(link.href);
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-2.5 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                scrollTo("#contact");
                setMenuOpen(false);
              }}
              className="w-full mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-accent text-accent-foreground transition-smooth"
            >
              Request a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
