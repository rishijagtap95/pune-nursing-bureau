import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <a
      data-ocid="whatsapp-cta"
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full shadow-elevated transition-all duration-300 ease-in-out bg-[#25D366] px-3.5 py-3.5 hover:gap-2 hover:px-5 group"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-6 h-6 text-white flex-shrink-0" />
      <span className="text-white text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs">
        Chat on WhatsApp
      </span>
    </a>
  );
}
