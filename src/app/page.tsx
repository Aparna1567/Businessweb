


import Hero from "@/components/Home/Hero";
import Solution from "@/components/Home/Solution";
import Companies from "@/components/Home/Companies";

import dynamic from "next/dynamic";

const Commitment = dynamic(
  () => import("@/components/Home/Commitment")
);

const Process = dynamic(
  () => import("@/components/Home/Process")
);

const Projects = dynamic(
  () => import("@/components/Home/Projects")
);

const Testimonials = dynamic(
  () => import("@/components/Home/Testimonials")
);

const Pricing = dynamic(
  () => import("@/components/Home/Pricing")
);

const Blog = dynamic(
  () => import("@/components/Home/Blog")
);
import Image from "next/image";

export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <Solution />
      <Companies />
      <Commitment />
      <Process />
      <Projects />
      <Testimonials />
      <Pricing />
      <Blog />
    </main>
  </>
  );
}
