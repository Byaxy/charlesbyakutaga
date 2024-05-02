"use client";

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
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

  const formRef = useRef();

  const onSubmit = async (data: FormInput) => {
    emailjs
      .sendForm("service_qcwr5to", "template_0ctq4q1", formRef.current, {
        publicKey: "VcMVKmWO1JNpGBaj7",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
        },
        (error) => {
          toast.error("Error sending email");
          console.log("FAILED...", error.text);
        }
      );
  };

  // Reset form to defaults on Successfull submission of data
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
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
        ref={formRef}
        className="mt-10 flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="text"
          maxLength={35}
          placeholder="Your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors?.name.message}</span>
        )}
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          maxLength={500}
          placeholder="Your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors?.email.message}</span>
        )}
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          maxLength={5000}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">
            {errors?.message.message}
          </span>
        )}
        <SubmitBtn isSubmitting={isSubmitting} />
      </form>
    </motion.section>
  );
}
