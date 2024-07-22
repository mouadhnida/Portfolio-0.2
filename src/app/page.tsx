"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import handcoding from "../../public/hand-coding-animate1.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.5 }}
      className="mt-12 px-4 sm:px-8 md:px-20 xl:mt-28 xl:flex xl:w-full xl:px-48 2xl:mt-40"
    >
      <div className="flex justify-center xl:w-1/2">
        <Image src={handcoding} alt="Picture of hand coding animate" />
      </div>
      <div className="py-16 text-center xl:w-1/2 xl:pl-5 xl:text-left">
        <h1 className="text-3xl font-bold md:text-5xl">
          Transforming Ideas into Digital Reality.
        </h1>
        <p className="py-8">
          Web developer with a passion for creating engaging and user-friendly
          experiences. Let's turn your vision into a stunning reality. Explore
          my portfolio and let's build something extraordinary together.
        </p>
        <div className="flex justify-center gap-8 xl:justify-start">
          <Link href={"/portfolio"}>
            <Button
              buttonText="View my work"
              className="text-white hover:bg-slate-800"
            />
          </Link>
          <Link href={"/contact"}>
            <Button
              buttonText="Contact me"
              className="border border-black bg-transparent text-black hover:bg-slate-800 hover:text-white"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
