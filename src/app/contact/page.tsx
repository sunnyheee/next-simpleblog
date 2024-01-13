import { link } from "fs";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import ContactFrom from "../_components/ContactFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Sunnyheeeにメールを送る",
};

const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillInstagram />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
];
const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>Sunnyheee0@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-yellow-400"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <h2 className=" text-3xl font-bold my-8 ">Or Send me an email</h2>
      <ContactFrom />
    </section>
  );
};

export default Contact;
