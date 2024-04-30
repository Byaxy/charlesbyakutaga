"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/lib/hooks/useSectionInView";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 sm:mb-40 scroll-mt-28 w-full"
    >
      <SectionHeading title="My Experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience) => (
          <VerticalTimelineElement
            key={experience.title}
            className="vertical-timeline-element--work"
            date={experience.date}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.2rem 1.5rem",
            }}
            contentArrowStyle={{ borderRight: "0.5rem solid  #9ca3af" }}
            iconStyle={{ background: "white", fontSize: "1.5rem" }}
            icon={experience.icon}
          >
            <h3 className="font-semibold capitalize text-lg">
              {experience.title}
            </h3>
            <p className="flex flex-row items-center justify-between font-normal !mt-0">
              <span>{experience.company}</span>
              <span>{experience.location}</span>
            </p>
            <ul className="font-normal !mt-2 text-gray-700 list-disc pl-5 w-full">
              {experience.description &&
                experience.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
