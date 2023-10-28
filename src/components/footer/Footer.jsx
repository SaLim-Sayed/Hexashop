"use client"
import { ThemeContext } from "@/context/ThemeContext";
import { Copyright, Facebook, Instagram, Linkedin } from "lucide-react";
 
import Link from "next/link";
import { useContext } from "react";

export const Footer = () => {
  const{mode}=useContext(ThemeContext)
  return (
    <div className="container">
      <div className={`${mode==="dark"?"text-cyan-200":"text-cyan-800"} border-t-2 border-orange-300  h-10 mb-0  flex justify-between  items-center`}>
      <div className="flex justify-start mx-4 cursor-not-allowed selection:bg-cyan-900 ">
        <Copyright /> 2023 Hexashop All rights reserved
      </div>
      <div className="flex gap-4 mx-4">
        <Link href="http://www.facebook.com/" target="_blank">
          {" "}
          <Facebook
            z={20}
            fill="white"
            className=" opacity-50 transition-opacity duration-75 ease-in hover:opacity-100  cursor-pointer rounded-full  p-1    bg-[#0866FF] text-white"
          />
        </Link>
        <Linkedin
          z={20}
          fill="white"
          className=" opacity-50 transition-opacity duration-75 ease-in hover:opacity-100  cursor-pointer rounded-lg p-1  bg-[#0077B5] text-white"
        />
        <Instagram
          z={20}
          className=" opacity-50 transition-opacity duration-75 ease-in hover:opacity-100  cursor-pointer rounded-lg p-1 bg-gradient-to-b from-[#5C53CA] via-[#D032AD] to-[#FFA34B]"
        />
      </div>
    </div>
    </div>
  );
};
