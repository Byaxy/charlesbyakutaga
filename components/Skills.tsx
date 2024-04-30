"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 sm:mb-40 max-w-[54rem] scroll-mt-28"
    >
      <SectionHeading title="Skills" />
      <ul className="flex flex-wrap gap-4 sm:gap-y-6 text-gray-800 text-lg justify-center">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              key={skill}
              className="bg-white px-5 py-3 border border-black/5 shadow-md rounded-lg"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
