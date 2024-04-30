/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/lib/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About", 0.6);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[48rem] text-center text-lg leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        I was introduced to{" "}
        <span className="font-medium">
          programming and software development
        </span>
        during my time at the University, where I pursued a{" "}
        <span className="italic">
          Bachelor of Information Technology and Computing
        </span>
        . While initially fascinated by the world of programming, I faced
        limitations in resources and exposure that dampened my curiosity.
        However, the challenges posed by the COVID-19 pandemic reignited my
        interest in software development, prompting me to explore the field of{" "}
        <span className="italic">Web Development</span>. Through self-guided
        learning via YouTube tutorials and formal education at freecodecamp.org,
        I acquired a certificate in{" "}
        <span className="underline">Responsive Web Design</span> and laid the
        foundation for my technical journey. Subsequently, my participation in
        the <span className="italic">ALX Software Engineering Program </span>
        provided me with a comprehensive understanding of{" "}
        <span className="font-medium">
          Software Engineering principles, OOP, Algorithms & Data Structures,
          DevOps, C, Python, JavaScript, Typescript, Database, React
        </span>{" "}
        and many more.
      </p>
      <p>
        Despite encountering personal obstacles that prevented me from
        completing the final sprint for certification, the program significantly
        enhanced my skills and expertise in software development. In November
        2023, I furthered my professional growth by enrolling in the
        <span className="italic"> React Learning Program</span> by Andela,
        supported by Meta and Pluralsight. This experience sharpened my
        abilities in developing React-based applications and reinforced my
        commitment to leveraging technology for positive change.
      </p>

      <p>
        When I'm not coding, I enjoy watching movies, and spending time with
        friends and family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="italic">
          Getting started with Google AI Studio, Gemini AI and NodeJS
        </span>
      </p>
    </motion.section>
  );
}
