import {
  About,
  CTA,
  Footer,
  Hero,
  Intro,
  Navbar,
  Pricing,
  Steps,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
