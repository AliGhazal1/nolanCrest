"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-navy rounded-2xl shadow-2xl p-6 max-w-sm relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-4">
          <h3 className="text-white font-bold text-lg mb-2">
            Love What You See?
          </h3>
          <p className="text-white/80 text-sm">
            Schedule your private tour of 144 Nolancrest Circle NW today!
          </p>
        </div>

        <a
          href="tel:825-437-2266"
          className="flex items-center justify-center space-x-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full group"
        >
          <Phone className="w-5 h-5" />
          <span>Call 825-437-2266</span>
        </a>
      </div>
    </div>
  );
}
