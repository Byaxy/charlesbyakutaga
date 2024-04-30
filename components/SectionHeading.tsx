import React from "react";

type SectionHeadingProps = {
  title: string;
};
export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl font-medium capitalize mb-8 text-center">
      {title}
    </h2>
  );
}
