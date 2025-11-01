"use client";

import { Home, Bath, Square, Car, UtensilsCrossed, Sun } from "lucide-react";
import Image from "next/image";

export default function PropertyOverview() {
  const features = [
    { icon: Bath, label: "2.5 Bathrooms", description: "Modern fixtures and finishes" },
    { icon: Square, label: "2,000+ Sq. Ft.", description: "Open-concept living space" },
    { icon: Car, label: "Double Garage", description: "Attached with storage" },
    { icon: UtensilsCrossed, label: "Modern Kitchen", description: "Upgraded appliances included" },
    { icon: Sun, label: "Private Backyard", description: "Perfect for family gatherings" },
  ];

  const propertyImages = [
    "/property-exterior.jpg",
    "/property-enterance.jpg",
    "/property-front-view.jpg",
    "/property-living-room.jpg",
    "/property-kitchen.jpg",
    "/property-bathroom.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Welcome to 144 Nolancrest Circle NW
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in sought-after Nolan Hill, close to schools, parks, and shopping
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gold/10 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gold"
            >
              <feature.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">{feature.label}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Property Gallery */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-navy mb-8 text-center">
            Photo Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {propertyImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Property view ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Tour Section */}
        <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Explore in 3D
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Take a virtual tour of this beautiful home from the comfort of your current location
            </p>
            <a 
              href="https://www.realtor.ca/real-estate/28745454/144-nolancrest-circle-nw-calgary-nolan-hill"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              View Full Listing on Realtor.ca
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
