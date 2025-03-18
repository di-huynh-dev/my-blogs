"use client";
import { cn } from "@/lib/utils";

import {
  BriefcaseBusiness,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
} from "lucide-react";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/animation/DockAnimation";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const data = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full " />,
      href: "home",
    },
    {
      title: "Skills",
      icon: <LightbulbIcon className="h-full w-full " />,
      href: "skills",
    },
    {
      title: "Work Experience",
      icon: <BriefcaseBusiness className="h-full w-full " />,
      href: "experience",
    },
    {
      title: "Projects",
      icon: <FolderGit2 className="h-full w-full " />,
      href: "projects",
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-full w-full " />,
      href: "education",
    },
    {
      title: "Contact me",
      icon: <Mail className="h-full w-full " />,
      href: "contact",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${
        scrolling ? "hidden" : "block"
      }`}
    >
      <Dock className="items-end pb-3 rounded-full">
        {data.map((item, idx) => (
          <button key={idx} onClick={() => scrollToSection(item.href)}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                pathname === `/#${item.href}` &&
                  " bg-gray-100 !border !border-primary-sky"
              )}
            >
<<<<<<< Updated upstream
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(pathname === `/#${item.href}` && "text-[#2f7df4]")}
              >
                {item.icon}
              </DockIcon>
=======
                <DockLabel>{item.title}</DockLabel>
                <DockIcon className={cn(pathname === item.href && "text-[#2f7df4]")}>
                  {item.icon}
                </DockIcon>
>>>>>>> Stashed changes
            </DockItem>
          </button>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
