"use client";

import { MapPin, School, ShoppingBag, TreePine } from "lucide-react";

export default function CommunitySection() {
  const amenities = [
    {
      icon: TreePine,
      title: "Parks & Trails",
      items: ["Nolan Hill Playground", "Nose Hill Park", "Walking trails & green spaces"],
    },
    {
      icon: School,
      title: "Top Schools",
      items: ["Nolan Hill Elementary", "St. Sylvester School", "Crescent Heights High School"],
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Dining",
      items: ["Beacon Hill Shopping Centre", "Country Hills Village", "Local restaurants & cafes"],
    },
    {
      icon: MapPin,
      title: "Recreation",
      items: ["Calgary Northwest Recreation Centre", "Community events", "Family activities"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Life in Nolan Hill
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your family needs is just moments away
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-navy rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-gold transition-all duration-300 shadow-lg">
                <amenity.icon className="w-10 h-10 text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{amenity.title}</h3>
              <ul className="space-y-2">
                {amenity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start justify-center">
                    <span className="text-gold mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-96 bg-gradient-to-br from-navy/20 to-gold/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-navy mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-2">
                144 Nolancrest Circle NW
              </h3>
              <p className="text-gray-600 mb-4">Calgary, Alberta</p>
              <a
                href="https://www.google.com/maps/search/144+Nolancrest+Circle+NW+Calgary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
