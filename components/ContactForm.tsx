"use client";

import { useState } from "react";
import { Send, Phone, Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Using mailto as fallback - opens email client with pre-filled data
    const subject = encodeURIComponent(`Property Inquiry: 144 Nolancrest Circle NW`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}`
    );
    
    window.location.href = `mailto:ali@gettygroup.ca?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitStatus('idle');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Schedule Your Private Viewing Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to see your family&apos;s future home? Contact us to arrange a personalized tour of 144 Nolancrest Circle NW.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Call or Text</h3>
                  <a href="tel:825-437-2266" className="text-lg text-gold hover:text-gold-dark font-semibold">
                    825-437-2266
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Email Us</h3>
                  <a href="mailto:info@gettygroup.ca" className="text-lg text-gold hover:text-gold-dark font-semibold">
                    ali@gettygroup.ca
                  </a>
                </div>
              </div>
            </div>

            {/* Agent Spotlight */}
            <div className="bg-navy rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-2xl font-bold text-navy">
                  AG
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Ali Ghazal</h3>
                  <p className="text-gold">Calgary Real Estate Advisor</p>
                </div>
              </div>
              <p className="text-white/90 mb-4">
                Specializing in family homes in Calgary&apos;s Northwest communities. Committed to helping families find their perfect home.
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-white/70">Represented by Getty Group Real Estate</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-navy mb-6">
              Request a Showing
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="(403) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Tell us what you&apos;re looking for in your next home
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="I'm interested in scheduling a viewing..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Send Message'}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2 text-center">
                  Thank you! Your email client will open with the message.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
