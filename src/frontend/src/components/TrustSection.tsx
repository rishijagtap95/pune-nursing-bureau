import {
  Award,
  ClipboardList,
  Clock,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: ShieldCheck,
    title: "Background Check",
    description:
      "Police verification and government identity verification completed for every staff member before placement.",
  },
  {
    icon: GraduationCap,
    title: "Medical Training",
    description:
      "Minimum 2 years of clinical training or a recognized nursing degree required — no exceptions.",
  },
  {
    icon: ClipboardList,
    title: "Ongoing Monitoring",
    description:
      "Regular performance reviews and family feedback loops ensure consistent, high-quality care.",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Families Served" },
  { icon: Award, value: "100+", label: "Verified Staff" },
  { icon: MapPin, value: "5+", label: "Years in Pune" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full text-accent bg-accent/10">
            Safety First
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Verification Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Every nurse and caretaker undergoes a rigorous vetting process
            before entering your home.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="bg-card rounded-xl p-7 shadow-card border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent/12">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase mb-1 text-accent">
                  Step {index + 1}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl p-5 text-center bg-primary text-primary-foreground"
              >
                <Icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
                <div className="font-display text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-xs mt-0.5 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
