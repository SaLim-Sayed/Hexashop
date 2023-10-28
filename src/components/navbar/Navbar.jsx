import Link from "next/link";
import { links } from "./data";
import Button from "../Button/Button";

import Logo from "../Logo/Logo";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar() {
  return (
   <div className="container">
     <div className="  mx-auto border-orange-300 border-b-2  h-16 mb-8 flex items-center  justify-between">
      <Logo />
      <div className=" flex gap-10  mx-8   font-bold">
        <DarkModeToggle/>
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className=" flex gap-10  hover:text-teal-400  cursor-pointer  "
          >
            {item.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
   </div>
  );
}
