import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-black py-20 flex justify-center items-center">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl p-8 md:p-16 text-center border border-border shadow-xl bg-gradient-to-br from-primary/30 via-background/90 to-background/100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Let us build your Product
            <br />
            so you can <span className="text-primary">Scale Faster</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Book a Call Today and Start Scaling at Rapid rate
          </p>
          <a
            href="https://calendly.com/scanpickit/30min" // Replace with your actual Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-primary hover:bg-primary/80 text-white font-semibold text-base px-8 py-3 rounded-lg inline-flex items-center gap-2 shadow-lg transition-colors"
          >
            Book a free call <ArrowUpRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
