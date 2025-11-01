"use client";

import { Heart, Users, TrendingUp, Home } from "lucide-react";

export default function EmotionalSection() {
  const values = [
    {
      icon: Heart,
      title: "Built for Connection",
      description: "Open spaces designed for family moments that matter",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "A welcoming neighborhood where families thrive together",
    },
    {
      icon: TrendingUp,
      title: "Smart Investment",
      description: "Strong property values in Calgary's growing Northwest",
    },
    {
      icon: Home,
      title: "Work-Life Balance",
      description: "Ideal for professionals seeking comfort and convenience",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Narrative */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            More Than a Home — It&apos;s a Lifestyle
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Designed for families who value <span className="text-gold font-semibold">connection</span>, 
              <span className="text-gold font-semibold"> growth</span>, and 
              <span className="text-gold font-semibold"> community</span> — 144 Nolancrest Circle is more than a home; 
              it&apos;s where your family&apos;s next chapter begins.
            </p>
            <p className="text-lg text-gray-600">
              With top-rated schools nearby, parks within walking distance, and a welcoming neighborhood spirit, 
              this home is built for those who cherish family moments and balanced living.
            </p>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Ideal Buyer Persona */}
        <div className="bg-navy rounded-2xl p-10 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Perfect For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h4 className="text-xl font-bold mb-2">Growing Families</h4>
              <p className="text-white/80">
                Safe, family-friendly community with excellent schools and parks
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h4 className="text-xl font-bold mb-2">Professionals</h4>
              <p className="text-white/80">
                Dual-income households in finance, healthcare, and tech sectors
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Long-Term Buyers</h4>
              <p className="text-white/80">
                Those seeking stability, community, and quality of life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
