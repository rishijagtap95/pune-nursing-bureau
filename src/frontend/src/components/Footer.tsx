import { Heart, Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  "Nursing Care",
  "Caretaker Services",
  "Baby Care",
  "Post-Surgical Support",
];

const areas = [
  "Baner",
  "Kothrud",
  "Hadapsar",
  "Wakad",
  "Viman Nagar",
  "Aundh",
  "Shivajinagar",
  "Pimple Saudagar",
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-accent">
                <Heart
                  className="w-5 h-5 text-accent-foreground"
                  fill="currentColor"
                />
              </div>
              <span className="text-white font-display font-semibold text-lg">
                PuneNurse Bureau
              </span>
            </div>
            <p className="text-white/85 text-sm leading-relaxed mb-4">
              Trusted Home Healthcare in Pune Since 2019. Verified nurses and
              caretakers for your loved ones.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 80555 56535</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-white/80 hover:text-white text-sm transition-smooth"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas served */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Areas Served
            </h4>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-white/80 text-sm">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/85 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                <span>12 Yerwada Business Park, Pune – 411006</span>
              </li>
              <li className="flex items-center gap-2 text-white/85 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>+91 80555 56535</span>
              </li>
              <li className="flex items-center gap-2 text-white/85 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>info@punenurse.in</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="mt-5 w-full py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold transition-smooth hover:opacity-90"
            >
              Request a Call Back
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-white/60 text-xs">
          <span>© {year} PuneNurse Bureau. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
