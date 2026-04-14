"use client"

import Link from "next/link"
import { Facebook, Instagram, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const quickLinks = [
  { href: "#services", label: "Our Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#process", label: "Our Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#areas", label: "Service Areas" },
  { href: "#contact", label: "Contact Us" },
]

const services = [
  "Elderly Care (Vruddhaseva)",
  "Post-Surgery Care",
  "ICU Care at Home",
  "Physiotherapy",
  "Palliative Care",
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
]

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <footer className="bg-primary text-primary-foreground" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div 
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20 border-2 border-primary-foreground/40 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <div>
                <span className="font-bold text-primary-foreground text-lg block">
                  MAHALAXMI
                </span>
                <span className="text-primary-foreground/70 text-xs">
                  NURSES BUREAU
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Vruddhaseva Kendra - Professional home nursing and elderly care services in Pune. Trusted by thousands of families.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li 
                  key={link.href}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${100 + index * 50}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold text-primary-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li 
                  key={service}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${200 + index * 50}ms` : "0ms" }}
                >
                  <Link
                    href="#services"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 inline-block transition-all"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold text-primary-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="group">
                <span className="block text-primary-foreground font-medium">Kulkarni </span>
                <div className="flex flex-col gap-1 mt-1">
                  <a href="tel:+918928402497" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    8928402497
                  </a>
                  <a href="tel:+919552163135" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    9552163135
                  </a>
                </div>
              </li>
              <li className="group">
                <span className="block text-primary-foreground font-medium">Email</span>
                <a href="mailto:mahalaxminurses@gmail.com" className="hover:text-primary-foreground transition-colors">
                  mahalaxminurses@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-primary-foreground font-medium">Service Area</span>
                Pune & PCMC, Maharashtra
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          className={`mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center sm:text-left">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Mahalaxmi Nurses Bureau Vruddhaseva Kendra. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40 mt-1">
              Reg. No. 1731000311406280 | 66232 | XVIII 4300
            </p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
