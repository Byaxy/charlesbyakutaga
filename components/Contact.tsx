"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/server-actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const { register, handleSubmit, formState, reset } = useForm<FormInput>({
    defaultValues: defaultValues,
  });
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit = async (data: FormInput) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Reset form to defaults on Successfull submission of data
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    console.log(isSubmitSuccessful);
  }, [isSubmitSuccessful, reset]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 sm:mb-40 scroll-mt-28 w-[min(100%,40rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact Me" />
      <p className="text-lg tracking-tight text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a
          href="https://api.whatsapp.com/send?phone=231881845358"
          className="inline-flex items-center italic text-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          +231 881 845358
          <FaWhatsapp className="w-4 h-4 ml-2 text-green-600 inline-block cursor-pointer transition ease-in-out" />
        </a>{" "}
        or use the form below
      </p>
      <form
        className="mt-10 flex flex-col gap-2"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="name"
          type="text"
          required
          maxLength={35}
          placeholder="Your name"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
