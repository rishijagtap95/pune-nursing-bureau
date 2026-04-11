import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const testimonials = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    location: "Kothrud, Pune",
    initials: "PS",
    text: "The nurse assigned to my mother was incredibly caring and professional. Her recovery post-surgery was so much smoother than we expected. PuneNurse Bureau truly delivers on their promise.",
    rating: 5,
    service: "Nursing Care",
  },
  {
    id: "rajesh-mehta",
    name: "Rajesh Mehta",
    location: "Baner, Pune",
    initials: "RM",
    text: "We needed a caretaker urgently after my father's surgery. PuneNurse responded within hours and sent a verified, experienced caretaker. We felt safe and supported the entire time.",
    rating: 5,
    service: "Caretaker Services",
  },
  {
    id: "sunita-patil",
    name: "Sunita Patil",
    location: "Hadapsar, Pune",
    initials: "SP",
    text: "Excellent baby nurse for our newborn. She was calm, knowledgeable, and gave us confidence as first-time parents. I'd recommend PuneNurse Bureau to every new family in Pune.",
    rating: 5,
    service: "Baby Care",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full text-accent bg-accent/10">
            What Families Say
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Families Trust Us
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main testimonial card */}
          <div className="bg-card border border-border rounded-2xl shadow-elevated px-8 py-10 md:px-14 md:py-14 text-center max-w-2xl mx-auto">
            <Quote className="w-10 h-10 mx-auto mb-5 opacity-20 text-accent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <Star
                      key={`star-${t.id}-${i}`}
                      className="w-5 h-5 fill-current text-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-foreground text-base md:text-lg leading-relaxed mb-7 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {t.location}
                    </div>
                  </div>
                  <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full text-accent bg-accent/10">
                    {t.service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <button
              type="button"
              data-ocid="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center transition-smooth hover:border-accent hover:text-accent shadow-card"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  type="button"
                  key={testimonial.id}
                  data-ocid={`testimonial-dot-${i}`}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-smooth ${
                    i === current ? "bg-accent" : "bg-accent/25"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              data-ocid="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center transition-smooth hover:border-accent hover:text-accent shadow-card"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
