"use client"

import { ShieldCheck, Clock, IndianRupee, ClipboardList } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: ShieldCheck,
    titleMr: "प्रमाणित कर्मचारी",
    titleEn: "Verified Staff",
    descriptionMr: "सर्व कर्मचाऱ्यांची पार्श्वभूमी तपासणी आणि प्रशिक्षण",
    descriptionEn: "Background verified and professionally trained caregivers",
  },
  {
    icon: Clock,
    titleMr: "२४ तास सेवा",
    titleEn: "24/7 Support",
    descriptionMr: "दिवस-रात्र आपत्कालीन सहाय्य उपलब्ध",
    descriptionEn: "Round-the-clock emergency assistance available",
  },
  {
    icon: IndianRupee,
    titleMr: "परवडणारे दर",
    titleEn: "Affordable Rates",
    descriptionMr: "गुणवत्तापूर्ण सेवा योग्य किमतीत",
    descriptionEn: "Quality healthcare at competitive transparent pricing",
  },
  {
    icon: ClipboardList,
    titleMr: "वैयक्तिक काळजी",
    titleEn: "Personalized Care",
    descriptionMr: "प्रत्येक रुग्णासाठी सानुकूलित सेवा योजना",
    descriptionEn: "Customized care plans for each patient",
  },
]

export function WhyUsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="why-us" className="py-16 md:py-24 bg-card" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-0">
            आमच्याबद्दल | About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            महालक्ष्मी <span className="text-primary">का निवडावे?</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mt-2">
            Why Choose MAHALAXMI?
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            आपल्या प्रियजनांची सर्वोत्तम काळजी आमची प्राथमिकता
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.titleEn}
              className={`group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-secondary/50 border border-border hover:bg-primary hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="mt-5 text-xl md:text-2xl font-bold text-foreground group-hover:text-primary-foreground transition-colors">
                {feature.titleMr}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {feature.titleEn}
              </p>
              <p className="mt-3 text-sm md:text-base text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed transition-colors">
                {feature.descriptionMr}
              </p>
              <p className="mt-1 text-xs text-muted-foreground/70 group-hover:text-primary-foreground/70 transition-colors">
                {feature.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
