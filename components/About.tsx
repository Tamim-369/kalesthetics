import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="flex jus
  tify-center items-center"
    >
      <div className="about-image">
        <Image src={"/logo.png"} alt={"logo"} height={200} width={200} />
      </div>
    </div>
  );
};

export default About;
