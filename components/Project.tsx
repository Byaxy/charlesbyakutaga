"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[0];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  sourceCodeUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[65rem] border border-black/5 overflow-hidden rounded-lg hover:bg-gray-200 transition py-8 px-5 flex gap-5 flex-col sm:flex-row sm:group-even:flex-row-reverse">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="object-cover rounded-lg overflow-hidden"
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 font-medium">
            <a
              href={sourceCodeUrl}
              target="blank"
              className="bg-white flex items-center justify-center rounded-full px-5 py-[6px] outline-none  borderBlack hover:scale-110 transition"
            >
              Source Code
            </a>
            <a
              href={demoUrl}
              target="blank"
              className="bg-gray-900  text-white flex items-center justify-center rounded-full px-5  py-[6px] outline-none hover:scale-110 transition"
            >
              Preview Demo
            </a>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
