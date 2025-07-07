import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import CTASection from "@/components/CTASection";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen bg-scanpick-black">
      <main>
        <HomePage/>
      </main>
    </div>
  );
}
