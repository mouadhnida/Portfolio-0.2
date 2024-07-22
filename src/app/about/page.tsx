"use client";

import { motion } from "framer-motion";
import aboutIllustration from "../../../public/about-illustration.svg";

import Image from "next/image";

export default function page() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.5 }}
      className="mt-12 px-4 sm:px-8 md:px-20 xl:flex xl:w-full xl:px-48"
    >
      <Image src={aboutIllustration} alt="about illustration" />
    </motion.div>
  );
}
