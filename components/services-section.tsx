"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    image: "/images/services/elderly-care.jpg",
    titleEn: "Elderly Care",
    titleMr: "वृद्धसेवा",
    tagline: "24/7 Care",
    taglineMr: "२४ तास सेवा",
    descriptionEn: "Compassionate daily care for your senior family members with dignity and respect",
    descriptionMr: "आपल्या ज्येष्ठ कुटुंबातील सदस्यांची सन्मानाने आणि आदराने दररोज काळजी",
  },
  {
    image: "/images/services/post-surgery.jpg",
    titleEn: "Post-Surgery Care",
    titleMr: "शस्त्रक्रियेनंतरची काळजी",
    tagline: "Recovery Support",
    taglineMr: "पुनर्प्राप्ती सेवा",
    descriptionEn: "Professional nursing support for faster recovery after surgery",
    descriptionMr: "शस्त्रक्रियेनंतर जलद पुनर्प्राप्तीसाठी व्यावसायिक नर्सिंग सेवा",
  },
  {
    image: "/images/services/icu-care.jpg",
    titleEn: "ICU Care at Home",
    titleMr: "घरी आयसीयू सेवा",
    tagline: "Critical Care",
    taglineMr: "गंभीर काळजी",
    descriptionEn: "Hospital-level critical care with advanced monitoring at home",
    descriptionMr: "घरी प्रगत देखरेखीसह हॉस्पिटल-स्तरीय गंभीर काळजी",
  },
  {
    image: "/images/services/patient-attendant.jpg",
    titleEn: "Patient Attendant",
    titleMr: "रुग्ण सेवक",
    tagline: "Round-the-Clock",
    taglineMr: "दिवस-रात्र सेवा",
    descriptionEn: "Trained attendants for daily assistance and patient support",
    descriptionMr: "दैनंदिन मदत आणि रुग्ण सहाय्यासाठी प्रशिक्षित सेवक",
  },
  {
    image: "/images/services/physiotherapy.jpg",
    titleEn: "Physiotherapy",
    titleMr: "फिजिओथेरपी",
    tagline: "Rehab Support",
    taglineMr: "पुनर्वसन सेवा",
    descriptionEn: "Rehabilitation exercises by experienced physiotherapists",
    descriptionMr: "अनुभवी फिजिओथेरपिस्टद्वारे पुनर्वसन व्यायाम",
  },
  {
    image: "/images/services/palliative-care.jpg",
    titleEn: "Palliative Care",
    titleMr: "उपशामक काळजी",
    tagline: "Comfort Care",
    taglineMr: "आराम सेवा",
    descriptionEn: "Compassionate care for chronic and terminal illnesses",
    descriptionMr: "दीर्घकालीन आणि अंतिम आजारांसाठी सहानुभूतीपूर्ण काळजी",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-0">
            आमच्या सेवा | Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            घरपोच <span className="text-primary">नर्सिंग सेवा</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mt-2">
            Home Nursing Services
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            महालक्ष्मी नर्सेस ब्युरो - तुमच्या कुटुंबाची काळजी आमची जबाबदारी
          </p>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Your family&apos;s care is our responsibility
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.titleEn}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.titleEn}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Tagline Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs">
                    {service.tagline}
                  </Badge>
                </div>
                
                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {service.titleMr}
                  </h3>
                  <p className="text-sm text-white/90 font-medium mt-0.5">
                    {service.titleEn}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <CardContent className="p-5 md:p-6 text-center">
                {/* Marathi Tagline */}
                <Badge variant="outline" className="mb-3 text-primary border-primary/30 bg-primary/5">
                  {service.taglineMr}
                </Badge>
                
                {/* Description in Marathi */}
                <p className="text-foreground font-medium text-sm md:text-base leading-relaxed mb-2">
                  {service.descriptionMr}
                </p>
                
                {/* Description in English */}
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {service.descriptionEn}
                </p>
              </CardContent>
              
              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div 
          className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col items-center gap-3 p-6 md:p-8 rounded-2xl bg-card shadow-lg border border-border/50">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              आजच संपर्क साधा | Contact Us Today
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="tel:8928402497"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                8928402497
              </a>
              <a 
                href="tel:9552163135"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-all hover:scale-105 border border-border"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                9552163135
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Kulkarni  | कुलकर्णी
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
