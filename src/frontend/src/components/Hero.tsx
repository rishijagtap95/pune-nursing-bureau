import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-nursing.dim_1200x700.jpg"
          alt="Compassionate home nursing in Pune"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/90 [background:linear-gradient(to_right,oklch(var(--primary)/0.92)_55%,oklch(var(--primary)/0.65)_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/50 bg-accent/15 text-accent text-sm font-medium mb-7"
          >
            <CheckCircle className="w-4 h-4" />
            500+ Families Served Across Pune
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Compassionate <span className="text-accent">Home Nursing</span>
            <br />
            in Pune
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-white/85 text-lg leading-relaxed mb-9 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional, verified nurses and caretakers delivered to your home
            across Pune & PCMC. Background-checked, medically trained, available
            24/7.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              type="button"
              data-ocid="hero-cta-primary"
              onClick={() => scrollTo("#contact")}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base transition-smooth hover:opacity-90 active:scale-[0.98]"
            >
              Request a Call
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              data-ocid="hero-cta-secondary"
              onClick={() => scrollTo("#services")}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base border border-white/30 text-white transition-smooth hover:bg-white/10"
            >
              Our Services
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {["Police Verified Staff", "Trained Nurses", "24/7 Support"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-white/75 text-sm"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-accent" />
                  {item}
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
