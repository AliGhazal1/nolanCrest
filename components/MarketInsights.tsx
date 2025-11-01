"use client";

import { TrendingUp, Shield, Award } from "lucide-react";

export default function MarketInsights() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Confidence in Your Investment
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Nolan Hill continues to show strong property value stability and family-driven demand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center">
            <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Growing Market</h3>
            <p className="text-white/80">
              Calgary&apos;s Northwest shows consistent property value growth
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center">
            <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Sound Investment</h3>
            <p className="text-white/80">
              Family-focused communities retain strong equity potential
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">High Demand</h3>
            <p className="text-white/80">
              Homes like this attract quality buyers seeking lifestyle balance
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Why Nolan Hill?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-navy mb-2 flex items-center">
                  <span className="text-gold mr-2">✓</span>
                  Strategic Location
                </h4>
                <p className="text-gray-600 ml-6">
                  Easy access to major routes, downtown Calgary, and the mountains
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2 flex items-center">
                  <span className="text-gold mr-2">✓</span>
                  Family Infrastructure
                </h4>
                <p className="text-gray-600 ml-6">
                  Top-rated schools, parks, and recreational facilities
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2 flex items-center">
                  <span className="text-gold mr-2">✓</span>
                  Modern Development
                </h4>
                <p className="text-gray-600 ml-6">
                  Well-planned community with contemporary homes and amenities
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2 flex items-center">
                  <span className="text-gold mr-2">✓</span>
                  Strong Community
                </h4>
                <p className="text-gray-600 ml-6">
                  Active neighborhood with family-oriented events and activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
