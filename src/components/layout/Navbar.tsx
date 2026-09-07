import Button from "../ui/Button";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      id: 1,
      label: "الخدمات",
      path: "#services",

    },
    {
      id: 2,
      label: "الشبكة",
      path: "#network",
    },
    {
      id: 3,
      label: "آلية العمل",
      path: "#process",
    },
    {
      id: 4,
      label: "تواصل",
      path: "#contact",
    },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 flex justify-between items-center bg-ink-secondary h-20 px-15 shadow-line shadow-md">
      <div className="flex items-center gap-2">
        <div
          className="flex items-center lg:hidden" 
          onClick={() => setIsOpen(true)}
        >
          <CiMenuFries size={25} className="text-lime pt-2 cursor-pointer" />
        </div>
        <Logo />
      </div>
      <div className="hidden lg:flex items-center gap-4">
        {links.map((link) => (
          <a 
            href={link.path}
            key={link.id}
            className="text-paper-secondary hover:text-lime text-sm"
          >{link.label}</a>
        ))}
      </div>
      <div className={`${isOpen ? "fixed" : "hidden"} inset-0 bg-ink-tertiary w-screen shadow-line shadow-2xl`}>
        <div className="absolute left-9 top-3.5">
          <IoMdClose 
            size={30} 
            className="text-lime pt-2 cursor-pointer" 
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col items-center mt-32 gap-4 h-full">
          {links.map((link) => (
            <a 
              href={link.path}
              key={link.id}
              className="text-paper-secondary hover:text-lime text-sm" 
              onClick={() => setIsOpen(false)}
            >{link.label}</a>
          ))}
        </div>
      </div>
      <Button
        path="#contact"
        text="احصل على عرض سعر"
        styles="hidden md:flex bg-lime hover:bg-white text-ink-primary px-5 py-3 font-semibold text-sm rounded-sm"
      />
    </nav>
  )
}
