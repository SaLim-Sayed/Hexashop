"use client"
import Link from "next/link";
import { Lobster } from "next/font/google";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
const logoFont = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Logo( ) {
  const { mode } = useContext(ThemeContext);
  return (
    <Link
      className={`${mode==="dark"?"hover:text-cyan-200  text-orange-300":"hover:text-cyan-800 text-orange-800"} mx-8  font-bold text-3xl ${logoFont.style} `}
      href="/"
    >
      HEXASHOP
    </Link>
  );
}
