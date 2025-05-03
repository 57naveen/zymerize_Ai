import { Button } from "@/components/ui/button";
import BgGradient from "@/components/ui/common/BgGradient";
import CtaSection from "@/components/ui/home/CtaSection";
import DemoSection from "@/components/ui/home/Demo-Section";

import HeroSection from "@/components/ui/home/HeroSection";
import Howitworks from "@/components/ui/home/How-it-works";
import PricingSection from "@/components/ui/home/PricingSection";




export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient/>
      <div className="flex flex-col">
      <HeroSection/>
      <DemoSection/>
      <Howitworks/>
      <PricingSection/>
      <CtaSection/>
      </div>
    
    
   
    </div>
  );
}
