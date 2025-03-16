import logo from "../../public/avatar.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={1000}
        width={1000}
        className="rounded-full border border-primary"
      />
    </>
  );
};
export default HeroImage;
