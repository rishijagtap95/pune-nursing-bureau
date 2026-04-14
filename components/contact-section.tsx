"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Phone, Mail, MapPin, Send, CheckCircle2, BadgeCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  { mr: "वृद्धसेवा", en: "Elderly Care (Vruddhaseva)" },
  { mr: "शस्त्रक्रियेनंतरची काळजी", en: "Post-Surgery Care" },
  { mr: "घरी आयसीयू सेवा", en: "ICU Care at Home" },
  { mr: "रुग्ण सेवक", en: "Patient Attendant Services" },
  { mr: "फिजिओथेरपी", en: "Physiotherapy Support" },
  { mr: "उपशामक काळजी", en: "Palliative Care" },
  { mr: "२४ तास नर्सिंग", en: "24-Hour Nursing Care" },
  { mr: "इतर", en: "Other" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-0">
            संपर्क | Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            आमच्याशी <span className="text-primary">संपर्क साधा</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mt-2">
            Get In Touch
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            घरपोच नर्सिंग सेवेसाठी आजच संपर्क साधा - आम्ही तासाभरात उत्तर देतो
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-5">
          <Card 
            className={`lg:col-span-3 border-border transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                <span className="block text-primary">सेवा विनंती करा</span>
                <span className="block text-base text-muted-foreground font-normal mt-1">Request a Service</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary animate-in zoom-in duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    विनंती सबमिट झाली!
                  </h3>
                  <p className="text-base text-foreground">Request Submitted!</p>
                  <p className="text-muted-foreground mt-2">
                    संपर्क केल्याबद्दल धन्यवाद. कुलकर्णी साहेब लवकरच संपर्क करतील.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Thank you. Kulkarni ji will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FieldGroup>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel>
                          <span className="block">नाव</span>
                          <span className="text-xs text-muted-foreground font-normal">Name</span>
                        </FieldLabel>
                        <Input
                          placeholder="तुमचे पूर्ण नाव"
                          required
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </Field>
                      <Field>
                        <FieldLabel>
                          <span className="block">फोन नंबर</span>
                          <span className="text-xs text-muted-foreground font-normal">Phone Number</span>
                        </FieldLabel>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </Field>
                    </div>
                    
                    <Field>
                      <FieldLabel>
                        <span className="block">सेवा निवडा</span>
                        <span className="text-xs text-muted-foreground font-normal">Select Service</span>
                      </FieldLabel>
                      <Select required>
                        <SelectTrigger className="transition-all duration-300 focus:scale-[1.01]">
                          <SelectValue placeholder="सेवा निवडा | Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.en} value={service.en.toLowerCase().replace(/\s+/g, "-")}>
                              <span className="font-medium">{service.mr}</span>
                              <span className="text-muted-foreground ml-2 text-sm">({service.en})</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    
                    <Field>
                      <FieldLabel>
                        <span className="block">संदेश</span>
                        <span className="text-xs text-muted-foreground font-normal">Message</span>
                      </FieldLabel>
                      <Textarea
                        placeholder="तुमच्या गरजांबद्दल सांगा... | Tell us about your requirements..."
                        rows={4}
                        className="transition-all duration-300 focus:scale-[1.01]"
                      />
                    </Field>
                  </FieldGroup>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-base" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        सबमिट होत आहे...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        विनंती पाठवा | Submit Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          
          <div 
            className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Proprietor Card */}
            <Card 
              className={`border-primary/30 bg-primary/5 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    कु
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-foreground text-lg md:text-xl">कुलकर्णी</h3>
                      <BadgeCheck className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground text-sm">KULKARNI</p>
                    <div className="flex flex-col gap-2 mt-3">
                      <a
                        href="tel:+918928402497"
                        className="text-primary font-bold text-lg hover:underline flex items-center gap-2"
                      >
                        <Phone className="h-5 w-5" />
                        8928402497
                      </a>
                      <a
                        href="tel:+919552163135"
                        className="text-primary font-bold text-lg hover:underline flex items-center gap-2"
                      >
                        <Phone className="h-5 w-5" />
                        9552163135
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {[
              {
                icon: Mail,
                titleMr: "ईमेल",
                titleEn: "Email Us",
                subtitleMr: "आम्ही २४ तासात उत्तर देतो",
                subtitleEn: "We reply within 24 hours",
                content: "mahalaxminurses@gmail.com",
                href: "mailto:mahalaxminurses@gmail.com",
              },
              {
                icon: MapPin,
                titleMr: "सेवा क्षेत्र",
                titleEn: "Service Area",
                subtitleMr: "पुणे आणि PCMC",
                subtitleEn: "Pune & PCMC Region",
                content: "महाराष्ट्र, भारत | Maharashtra, India",
              },
            ].map((item, index) => (
              <Card 
                key={item.titleEn}
                className={`border-border group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? `${500 + index * 100}ms` : "0ms" }}
              >
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.titleMr}</h3>
                      <p className="text-sm text-muted-foreground">{item.titleEn}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.subtitleMr}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-primary font-medium hover:underline mt-2 block transition-colors hover:text-primary/80"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Registration Info */}
            <div className="text-center p-4 bg-card rounded-xl border border-border">
              <p className="text-xs text-muted-foreground mb-1">नोंदणी क्रमांक | Registration No.</p>
              <p className="text-sm font-mono text-foreground">1731000311406280 | 66232 | XVIII 4300</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
