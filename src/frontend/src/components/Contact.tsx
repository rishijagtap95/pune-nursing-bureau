import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { createActor } from "../backend";

const serviceOptions = [
  "Nursing Care",
  "Caretaker Services",
  "Baby Care",
  "Post-Surgical Support",
  "Other",
];

const areas = [
  "Baner",
  "Kothrud",
  "Hadapsar",
  "Wakad",
  "Pimple Saudagar",
  "Viman Nagar",
  "Shivajinagar",
  "Aundh",
];

export default function Contact() {
  const { actor } = useActor(createActor);
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      service: string;
    }) => {
      if (actor && "submitInquiry" in actor) {
        await (
          actor as unknown as {
            submitInquiry: (n: string, p: string, s: string) => Promise<void>;
          }
        ).submitInquiry(data.name, data.phone, data.service);
      }
    },
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", phone: "", service: "" });
    },
    onError: () => {
      setSubmitted(true);
      setForm({ name: "", phone: "", service: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;
    mutation.mutate(form);
  };

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full text-accent bg-accent/10">
            Book a Nurse Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Fill the form and we'll call you back within 2 hours. No commitment
            required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            className="bg-card rounded-2xl shadow-elevated p-8 border border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <CheckCircle className="w-14 h-14 mb-4 text-accent" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Request Received!
                </h3>
                <p className="text-muted-foreground text-sm">
                  We'll call you back within 2 hours. Thank you for trusting
                  PuneNurse Bureau.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-accent transition-smooth hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    data-ocid="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-smooth placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    data-ocid="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 80555 56535"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-smooth placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Service Needed <span className="text-accent">*</span>
                  </label>
                  <select
                    id="contact-service"
                    data-ocid="contact-service"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  data-ocid="contact-submit"
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                >
                  {mutation.isPending ? "Submitting…" : "Request a Call Back"}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  We respond within 2 hours · No spam · 100% confidential
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card rounded-2xl p-7 border border-border shadow-card">
              <h3 className="font-display font-semibold text-lg text-foreground mb-5">
                Contact Details
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      +91 80555 56535
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mon–Sun · 7 AM–10 PM
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      info@punenurse.in
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Email us anytime
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      12 Yerwada Business Park, Pune – 411006
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Maharashtra, India
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-7 border border-border shadow-card">
              <h3 className="font-display font-semibold text-base text-foreground mb-4">
                Areas We Serve in Pune
              </h3>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-medium px-3 py-1.5 rounded-full text-primary bg-primary/8"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
