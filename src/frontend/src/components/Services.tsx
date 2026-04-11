import { Baby, Bandage, Stethoscope, UserCheck } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Stethoscope,
    title: "Nursing Care",
    description:
      "ICU-trained nurses for post-hospitalization recovery, medication management, wound dressing, and clinical monitoring at home.",
    variant: "accent" as const,
  },
  {
    icon: UserCheck,
    title: "Caretaker Services",
    description:
      "Compassionate attendants for elderly and bedridden patients — bathing, feeding, mobility support, and companionship.",
    variant: "primary" as const,
  },
  {
    icon: Baby,
    title: "Baby Care",
    description:
      "Certified baby nurses for newborns and mothers — feeding guidance, sleep routines, bathing, and post-partum support.",
    variant: "accent" as const,
  },
  {
    icon: Bandage,
    title: "Post-Surgical Support",
    description:
      "Comprehensive wound care, medication schedules, physiotherapy coordination, and vital monitoring after surgery.",
    variant: "primary" as const,
  },
];

function scrollToContact() {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full text-accent bg-accent/10">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Home Healthcare Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Professional, background-verified care delivered to your doorstep —
            across Pune and PCMC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAccent = service.variant === "accent";
            return (
              <motion.div
                key={service.title}
                data-ocid={`service-card-${index}`}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-smooth group cursor-default border border-border"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110 ${
                    isAccent ? "bg-accent/10" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${isAccent ? "text-accent" : "text-primary"}`}
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="mt-4 text-sm font-semibold text-accent transition-smooth hover:underline"
                >
                  Request a Nurse →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
