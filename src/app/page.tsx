import Benefits from "@/components/sections/Benefits";
import Hero from "@/components/sections/Hero";
import Problem_Solution from "@/components/sections/Problem_Solution";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem_Solution />
      <Benefits />
      <Testimonials />
      <CTA />
    </>
  );
}
