"use client";

import { Button } from "../ui/button";
import StarField from "../animations/StarField";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-scanpick-black">
      {/* Animated Star Field Background */}
      <StarField />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* New Badge */}
        <div className="inline-flex items-center rounded-full bg-scanpick-red/20 border border-scanpick-red/30 px-4 py-2 mb-8 animate-fade-in-up delay-300">
          <span className="bg-scanpick-red text-scanpick-white text-xs font-semibold px-2 py-1 rounded-full mr-3">
            New
          </span>
          <span className="text-scanpick-white text-sm font-medium">
            Industrial Automation Solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-scanpick-white mb-6 leading-tight animate-fade-in-up delay-500">
          Machines. Systems. Software.
          <br />
          <span className="text-scanpick-red">Built for Now.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-scanpick-white/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-700">
          ScanPick delivers intelligent vending, custom automation, and
          full-stack development - all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-1000">
          <Button variant="scanpick" size="xl" className="min-w-[160px]">
            Get in touch →
          </Button>
          <Button
            variant="scanpick-outline"
            size="xl"
            className="min-w-[160px]"
          >
            View services
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-scanpick-black to-transparent z-5" />
    </section>
  );
};

export default Hero;
