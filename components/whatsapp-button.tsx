"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)
  
  // Kulkarni's primary phone number
  const phoneNumber = "918928402497"
  const message = encodeURIComponent("Namaskar! I'm interested in Mahalaxmi Nurses Bureau's home nursing services in Pune.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  useEffect(() => {
    // Show button after a short delay
    const showTimer = setTimeout(() => setIsVisible(true), 1500)
    
    // Stop pulsing after 5 seconds
    const pulseTimer = setTimeout(() => setIsPulsing(false), 6500)
    
    return () => {
      clearTimeout(showTimer)
      clearTimeout(pulseTimer)
    }
  }, [])

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className={`h-7 w-7 ${isPulsing ? "animate-bounce" : ""}`} />
      
      {/* Pulse ring effect */}
      {isPulsing && (
        <>
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-20" />
        </>
      )}
    </a>
  )
}
