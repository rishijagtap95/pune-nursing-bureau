"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, BadgeCheck, Heart } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-accent/30 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 text-center lg:text-left">
            {/* Registration Badge */}
            <div 
              className={`inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mx-auto lg:mx-0 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <BadgeCheck className="h-4 w-4" />
              Reg. No. 1731000311406280
            </div>
            
            {/* Main Title */}
            <div 
              className={`transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary text-balance">
                MAHALAXMI
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-foreground mt-2">
                Nurses Bureau Vruddhaseva Kendra
              </p>
            </div>
            
            {/* Tagline - Highlighted with Marathi */}
            <div 
              className={`bg-primary/10 rounded-xl p-4 md:p-5 border border-primary/20 transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl md:text-2xl font-bold text-primary text-balance">
                तुमच्या कुटुंबाची काळजी, आमची जबाबदारी
              </p>
              <p className="text-base md:text-lg text-foreground mt-1 font-medium">
                Your Family&apos;s Care is Our Responsibility
              </p>
            </div>
            
            {/* Key Services Quick View */}
            <div 
              className={`flex flex-wrap justify-center lg:justify-start gap-2 transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Elderly Care
              </Badge>
              <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium">
                Home Nursing
              </Badge>
              <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium">
                24/7 Service
              </Badge>
              <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium">
                Trained Staff
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start transition-all duration-700 delay-[350ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button size="lg" asChild className="group text-base">
                <a href="#contact">
                  <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Book Service
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="group text-base">
                <a href="tel:+918928402497">
                  <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  Call Now
                </a>
              </Button>
            </div>
            
            {/* Contact Info Card */}
            <div 
              className={`bg-card rounded-xl p-4 border border-border shadow-md transition-all duration-700 delay-[400ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <Phone className="h-7 w-7" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm text-muted-foreground">Contact</div>
                  <div className="font-bold text-foreground text-lg">Kulkarni </div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mt-1">
                    <a href="tel:+918928402497" className="text-lg font-bold text-primary hover:underline transition-colors">
                      8928402497
                    </a>
                    <a href="tel:+919552163135" className="text-lg font-bold text-primary hover:underline transition-colors">
                      9552163135
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div 
              className={`flex items-center gap-4 pt-2 justify-center lg:justify-start transition-all duration-700 delay-[500ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary transition-transform hover:scale-110 hover:z-10"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-left">
                <div className="font-semibold text-foreground">Trusted by 1000+ Families</div>
                <div className="text-muted-foreground">in Pune and PCMC</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border-4 border-primary/20">
              <Image
                src="/images/hero-nurse.jpg"
                alt="Mahalaxmi Nurses Bureau - Professional nurse caring for elderly patient at home"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Overlay with tagline */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg md:text-xl font-bold drop-shadow-lg">
                  व्यावसायिक घरपोच आरोग्य सेवा
                </p>
                <p className="text-white/90 text-sm md:text-base">
                  Professional Home Healthcare
                </p>
              </div>
            </div>
            
            {/* 24/7 Badge */}
            <div 
              className={`absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-xl bg-card p-3 md:p-4 shadow-lg border border-border transition-all duration-700 delay-[600ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base">
                  24/7
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-sm md:text-base">Round the Clock</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Service Available</div>
                </div>
              </div>
            </div>
            
            {/* Pune Badge */}
            <div 
              className={`absolute -top-2 -right-2 md:-top-4 md:-right-4 rounded-lg bg-primary text-primary-foreground px-3 py-2 md:px-4 md:py-2 shadow-lg transition-all duration-700 delay-[700ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="font-bold text-sm md:text-base">Pune & PCMC</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  )
}
