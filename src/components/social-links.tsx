"use client";
import { portfolioConfig } from "@/config/config";
import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { buttonVariants } from "./ui/button";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: portfolioConfig.socialLinks.facebook,
      icon: <Facebook />,
    },
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },

    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
   
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
