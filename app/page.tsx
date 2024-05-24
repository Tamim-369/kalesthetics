import { About, Hero, Intro, Navbar, Pricing, Steps } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Steps />
      <Pricing />
      <About />
    </>
  );
}
