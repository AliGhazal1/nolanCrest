"use client";

import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Branding */}
          <div>
            <div className="mb-6">
              <div className="relative w-56 h-16">
                <Image
                  src="/getty-group-logo.png"
                  alt="Getty Group Real Estate"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Trusted Calgary real estate professionals dedicated to helping families find their dream homes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-navy" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-navy" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-navy" />
              </a>
            </div>
          </div>

          {/* Property Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">144 Nolancrest Circle NW</h4>
            <ul className="space-y-3 text-white/70">
              <li>Calgary, Alberta</li>
              <li>Nolan Hill Community</li>
              <li className="text-gold font-semibold text-lg">Listed at $675,000</li>
              <li className="pt-2">
                <span className="text-white font-semibold">3 Bed</span> | 
                <span className="text-white font-semibold"> 2.5 Bath</span> | 
                <span className="text-white font-semibold"> 2,000+ sq ft</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:825-437-2266" className="text-white hover:text-gold transition-colors">
                  825-437-2266
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:info@gettygroup.ca" className="text-white hover:text-gold transition-colors">
                  info@gettygroup.ca
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-white/70">
                <strong className="text-white">Ali Ghazal</strong><br />
                Calgary Real Estate Advisor<br />
                Getty Group Real Estate
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © {currentYear} Getty Group Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
