"use client"

import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const areas = [
  { en: "Baner", mr: "बाणेर" },
  { en: "Wakad", mr: "वाकड" },
  { en: "Hinjewadi", mr: "हिंजेवाडी" },
  { en: "Kothrud", mr: "कोथरूड" },
  { en: "Aundh", mr: "औंध" },
  { en: "Pimpri", mr: "पिंपरी" },
  { en: "Chinchwad", mr: "चिंचवड" },
  { en: "Viman Nagar", mr: "विमान नगर" },
  { en: "Hadapsar", mr: "हडपसर" },
  { en: "Shivajinagar", mr: "शिवाजीनगर" },
  { en: "Deccan", mr: "डेक्कन" },
  { en: "Karve Nagar", mr: "कर्वे नगर" },
  { en: "Katraj", mr: "कात्रज" },
  { en: "Kondhwa", mr: "कोंढवा" },
  { en: "Nigdi", mr: "निगडी" },
  { en: "Akurdi", mr: "आकुर्डी" },
]

export function AreasSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="areas" className="py-16 md:py-24 bg-background" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-0">
            सेवा क्षेत्र | Service Areas
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            आम्ही सेवा देतो <span className="text-primary">या ठिकाणी</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mt-2">
            Areas We Serve
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            पुणे आणि पिंपरी-चिंचवड (PCMC) मध्ये घरपोच नर्सिंग सेवा
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {areas.map((area, index) => (
            <div
              key={area.en}
              className={`group inline-flex flex-col items-center gap-0.5 rounded-xl bg-card border border-border px-4 md:px-6 py-3 md:py-4 text-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
            >
              <MapPin className="h-4 w-4 mb-1 text-primary group-hover:text-primary-foreground group-hover:animate-bounce transition-colors" />
              <span className="font-bold text-sm md:text-base">{area.mr}</span>
              <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">{area.en}</span>
            </div>
          ))}
        </div>
        
        <p 
          className={`mt-10 text-center text-muted-foreground transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block text-base md:text-lg font-medium text-foreground mb-1">
            तुमचे क्षेत्र दिसत नाही?
          </span>
          <span className="text-sm">
            Don&apos;t see your area?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline hover:text-primary/80 transition-colors">
              आम्हाला संपर्क करा | Contact Us
            </a>
          </span>
        </p>
      </div>
    </section>
  )
}
