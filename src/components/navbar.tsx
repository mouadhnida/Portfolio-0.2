"use client";

import Link from "next/link";
import { Pacifico } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  console.log(pathName);
  console.log(isOpen);

  return (
    <div className="flex h-full items-center justify-between">
      {/* RESPONSIVE LOGO*/}
      <div
        className={`${pacifico.className} ${isOpen ? "text-white sm:text-black" : "text-black"} z-10 w-1/4 text-2xl lg:hidden`}
      >
        <Link href="/">Mouad.dev</Link>
      </div>
      {/* MENU */}
      <div className="hidden w-1/2 items-center gap-6 sm:flex lg:w-1/3 xl:gap-10">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.title}
            className={
              pathName === link.url
                ? "rounded-md bg-black px-4 py-2 text-white"
                : ""
            }
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bored-red-500 relative z-50 flex h-8 w-10 flex-col justify-between sm:hidden"
      >
        <div
          className={`h-1 w-10 rounded ${isOpen ? "bg-white" : "bg-black"}`}
        ></div>
        <div
          className={`h-1 w-10 rounded ${isOpen ? "bg-white" : "bg-black"}`}
        ></div>
        <div
          className={`h-1 w-10 rounded ${isOpen ? "bg-white" : "bg-black"}`}
        ></div>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-3xl text-white sm:hidden">
          {links.map((link) => (
            <Link
              onClick={() => setIsOpen(false)}
              href={link.url}
              key={link.title}
              className={""}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
      {/* LOGO */}
      <div
        className={`${pacifico.className} hidden w-1/3 justify-center text-2xl lg:flex`}
      >
        <Link href="/">Mouad.dev</Link>
      </div>
      {/* ICONS */}
      <div className="hidden w-1/3 items-center justify-end gap-5 border sm:flex">
        <Link href={"/"}>
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link href={"/"}>
          <FaLinkedin className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
