import React from "react";
import profile from "../../../public/images/profile.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-center m-auto ">
      <Image
        className="mx-auto rounded-full"
        src={profile}
        width={250}
        height={250}
        alt="profile"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi I'm sunny"}</h2>
      <h3 className="text-xl font-semibold">Front Enginner</h3>
      <p>Dream come ture</p>
      <Link href="/contact">
        <button className=" bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
