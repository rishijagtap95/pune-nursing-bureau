"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "प्रिया जोशी",
    nameEn: "Priya Joshi",
    rating: 5,
    feedbackMr: "माझ्या वडिलांच्या शस्त्रक्रियेनंतर महालक्ष्मी नर्सेस ब्युरोने उत्कृष्ट सेवा दिली. नर्स खूप व्यावसायिक आणि काळजी घेणाऱ्या होत्या. कुलकर्णी साहेबांचे आभार!",
    feedbackEn: "Excellent care for my father after his surgery. The nurses were professional and compassionate. Thank you Kulkarni ji!",
    location: "बाणेर, पुणे",
  },
  {
    name: "संदीप पाटील",
    nameEn: "Sandeep Patil",
    rating: 5,
    feedbackMr: "गेल्या ६ महिन्यांपासून आम्ही माझ्या आईसाठी त्यांची वृद्धसेवा घेत आहोत. सेवक तिला कुटुंबातील सदस्यासारखे वागवतात. अत्यंत शिफारसीय!",
    feedbackEn: "Using their elderly care services for my mother for 6 months. The caregivers treat her like family. Highly recommended!",
    location: "कोथरूड, पुणे",
  },
  {
    name: "अनिता देशमुख",
    nameEn: "Anita Deshmukh",
    rating: 5,
    feedbackMr: "त्यांच्या २४ तास सेवेने कठीण काळात मनःशांती दिली. फिजिओथेरपीने माझ्या पतींना अपेक्षेपेक्षा लवकर बरे होण्यास मदत केली.",
    feedbackEn: "Their 24/7 support gave us peace of mind. Physiotherapy helped my husband recover faster than expected.",
    location: "औंध, पुणे",
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-0">
            अभिप्राय | Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            कुटुंबांचे <span className="text-primary">अनुभव</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mt-2">
            What Families Say
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            महालक्ष्मी नर्सेस ब्युरोवर विश्वास ठेवणाऱ्या कुटुंबांचे खरे अनुभव
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.nameEn}
              className={`group relative overflow-hidden border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <CardContent className="p-5 md:p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-300" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 fill-primary text-primary transition-all duration-300 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + i * 50}ms` : "0ms" }}
                    />
                  ))}
                </div>
                
                {/* Marathi Feedback */}
                <p className="text-foreground font-medium leading-relaxed mb-2 text-sm md:text-base">
                  &ldquo;{testimonial.feedbackMr}&rdquo;
                </p>
                
                {/* English Feedback */}
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-5 italic">
                  {testimonial.feedbackEn}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {testimonial.nameEn.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.nameEn}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
