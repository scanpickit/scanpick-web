import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-black py-20 flex justify-center items-center">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl rounded-2xl p-8 md:p-16 text-center border border-white/10 shadow-xl bg-gradient-to-br from-[#A62929]/30 via-black/90 to-black/100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Let us build your Product
            <br />
            so you can <span className="text-[#A62929]">Scale Faster</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Book a Call Today and Start Scaling at Rapid rate
          </p>
          <Button
            className="mt-2 bg-[#A62929] hover:bg-[#922222] text-white font-semibold text-base px-8 py-3 rounded-lg inline-flex items-center gap-2 shadow-lg transition-colors"
            size="xl"
          >
            Book a free call <ArrowUpRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
