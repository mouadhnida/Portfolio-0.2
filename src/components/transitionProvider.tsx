"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="relative mx-auto min-h-screen w-screen bg-gradient-to-b from-customBlue to-customGreen"
      >
        <motion.div
          className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-black"
          initial={{ height: 0 }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="fixed inset-0 z-50 m-auto h-fit w-fit cursor-default text-8xl text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {pathName === "/" ? "home" : pathName.substring(1)}
        </motion.div>
        <motion.div
          className="fixed bottom-0 z-40 h-screen w-screen rounded-t-[100px] bg-black"
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 0.3 },
          }}
        />

        <div className="h-24">
          <Navbar />
        </div>

        <div>{children}</div>
      </div>
    </AnimatePresence>
  );
}
