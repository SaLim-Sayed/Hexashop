"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";
import  { useContext } from "react";

const DarkModeToggle = () => {
 const { mode, toggle } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className=" flex w-16 border-2 p-1 relative border-[#FDBA74]  border-solid rounded-2xl justify-between "
    >
      <SunIcon fill="white" className=" cursor-pointer" />
      <MoonIcon fill="black" className=" cursor-pointer" />
      <button
        className=" w-7 h-6 aspect-square bg-[#FDBA74] absolute rounded-full"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
