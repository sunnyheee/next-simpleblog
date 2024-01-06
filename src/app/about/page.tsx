import React from "react";
import Hero from "../_components/Hero";

const TITLE_CLASS = " text-2xl font-bold text-gray-800 my2";
const About = () => {
  return (
    <>
      <Hero />
      <section className=" bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 프론트 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만들고 싶음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>Bizlink (-Now)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, jQuery, Vue</p>
      </section>
    </>
  );
};

export default About;
