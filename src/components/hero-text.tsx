import HeroImage from "./hero-image";

const HeroText = () => {
  const nameParts = "Huynh Tien Di".split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts[1] : "";
  const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

  return (
    <div className="grid grid-cols-2">
      <div>
        <h3 className="font-poppins md:text-2xl max-sm:text-xl  text-sm">
          My Name is
        </h3>
        <h1 className="font-rubik md:text-7xl text-4xl name_underline text-primary ">
          {firstName} {middleName} <br /> {lastName} .
        </h1>
      </div>
      <HeroImage />
    </div>
  );
};
export default HeroText;
