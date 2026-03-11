import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Services from "@/sections/Services";
import AiInAction from "@/sections/AiInAction";
import HowItWorks from "@/sections/HowItWorks";
import FinalCta from "@/sections/FinalCta";

import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center overflow-clip">
        <Navbar />
        <Hero />
        <LogoTicker />
        <Introduction />
        <Services />
        <HowItWorks />
        <Features />
        <AiInAction />
        <Integrations />
        <Faqs />
        <FinalCta />
        <Footer />
      </div>
    </>
  );
}
