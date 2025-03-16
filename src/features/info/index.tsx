import FramerWrapper from "@/components/animation/FramerWrapper";
import React from "react";
import CardInfo from "./components/card-info";
import CardAboutMe from "./components/card-about";

const InformationCard = () => {
  return (
    <FramerWrapper
      className=" h-full w-auto flex flex-col justify-start gap-4"
      y={0}
      x={-130}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <CardInfo />
        <CardAboutMe />
      </div>
    </FramerWrapper>
  );
};

export default InformationCard;
