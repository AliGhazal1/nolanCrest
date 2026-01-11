"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/property-exterior.jpg"
          alt="Beautiful family home exterior - 144 Nolancrest Circle NW"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-gold/90 text-navy px-6 py-2 rounded-full font-semibold text-sm mb-6 animate-fade-in">
          Now Listed at $675,000
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Family&apos;s Next Chapter<br />Begins at{" "}
          <span className="text-gold">144 Nolancrest Circle NW</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          A beautifully designed home in a family-first community, offering the perfect balance of comfort, connection, and convenience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:scale-105 flex items-center space-x-2"
          >
            <span>Book a Private Tour</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="tel:825-437-2266"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
          >
            Call Now: 825-437-2266
          </a>
        </div>

        {/* Property Quick Info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Bedrooms", value: "3" },
            { label: "Bathrooms", value: "2.5" },
            { label: "Sq. Ft.", value: "2,000+" },
            { label: "Garage", value: "Double" },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-gold">{item.value}</div>
              <div className="text-white/80 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
