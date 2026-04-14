"use client"

import { FileSearch, FileCheck, Award, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: FileSearch,
    titleMr: "पार्श्वभूमी तपासणी",
    titleEn: "Background Check",
    descriptionMr: "वैयक्तिक इतिहास आणि संदर्भांची सखोल पडताळणी",
    descriptionEn: "Comprehensive verification of personal history",
    step: 1,
  },
  {
    icon: FileCheck,
    titleMr: "कागदपत्र पडताळणी",
    titleEn: "Document Verification",
    descriptionMr: "सर्व व्यावसायिक प्रमाणपत्रांची तपासणी",
    descriptionEn: "Validation of all professional certifications",
    step: 2,
  },
  {
    icon: Award,
    titleMr: "कौशल्य मूल्यांकन",
    titleEn: "Skill Assessment",
    descriptionMr: "काळजी क्षमता आणि कौशल्यांचे कठोर मूल्यांकन",
    descriptionEn: "Rigorous evaluation of caregiving expertise",
    step: 3,
  },
  {
    icon: Eye,
    titleMr: "गुणवत्ता देखरेख",
    titleEn: "Quality Monitoring",
    descriptionMr: "सतत पर्यवेक्षण आणि नियमित कामगिरी पुनरावलोकन",
    descriptionEn: "Ongoing supervision and performance reviews",
    step: 4,
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="process" className="py-16 md:py-24 bg-background" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-0">
            आमची प्रक्रिया | Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            कर्मचारी <span className="text-primary">पडताळणी प्रक्रिया</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mt-2">
            Staff Verification Process
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            प्रत्येक सेवक कठोर बहु-स्तरीय पडताळणीतून जातो
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div 
            className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 rounded-full transition-all duration-1000 ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
          <div 
            className={`hidden lg:block absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full transition-all duration-1500 delay-500 ${
              isVisible ? "w-full" : "w-0"
            }`}
          />
          
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={step.titleEn} 
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
              >
                {/* Step circle */}
                <div className="group relative z-10 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-card border-4 border-primary shadow-lg hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 md:h-10 md:w-10 text-primary group-hover:scale-110 transition-transform" />
                  
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping opacity-0 group-hover:opacity-75" />
                </div>
                
                {/* Step number */}
                <div 
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold mt-4 transition-all duration-500 ${
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 200 + 300}ms` : "0ms" }}
                >
                  {step.step}
                </div>
                
                <h3 className="mt-4 text-lg md:text-xl font-bold text-foreground">
                  {step.titleMr}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.titleEn}
                </p>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {step.descriptionMr}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {step.descriptionEn}
                </p>
                
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div 
                    className={`lg:hidden absolute bottom-0 left-1/2 w-1 bg-primary rounded-full -translate-x-1/2 translate-y-full transition-all duration-500 ${
                      isVisible ? "h-8" : "h-0"
                    }`}
                    style={{ transitionDelay: isVisible ? `${index * 200 + 400}ms` : "0ms" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
