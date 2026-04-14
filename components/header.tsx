"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "Our Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#areas", label: "Areas" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo matching business card circular design */}
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary border-2 border-primary group-hover:scale-110 transition-transform duration-300">
              <span className="text-xs font-bold text-primary-foreground text-center leading-none">M</span>
              <div className="absolute inset-0 rounded-full border border-primary-foreground/20" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-primary text-lg leading-tight tracking-tight">
                MAHALAXMI
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wide">
                NURSES BUREAU
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="hidden sm:flex group hover:shadow-lg transition-shadow">
              <a href="tel:+918928402497">
                <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Call Now
              </a>
            </Button>
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
                <X className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu with animation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-3 px-3 rounded-lg ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 sm:hidden">
                <a href="tel:+918928402497">
                  <Phone className="mr-2 h-4 w-4" />
                  8928402497
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
