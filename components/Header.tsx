"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-navy backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative w-48 h-12">
              <Image
                src="/dark-getty-group-logo.png"
                alt="Getty Group Real Estate"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <a
            href="tel:825-437-2266"
            className="flex items-center space-x-2 bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">825-437-2266</span>
          </a>
        </div>
      </div>
    </header>
  );
}
