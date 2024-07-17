import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex my-20">
      <div className=" w-3/5 mr-8">
        <div className="relative">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="person"
            className="rounded-lg"
            height={500}
            width={500}
          ></Image>
          <Image
            src="/assets/images/about_us/parts.jpg"
            alt="person"
            className="rounded-lg border-2 absolute bg-white -bottom-28 right-12 border-slate-100 p-1"
            height={300}
            width={280}
          ></Image>
        </div>
      </div>
      <div className="w-3/5 space-y-4">
        <h5 className="text-lg font-bold text-primary">About Us</h5>
        <h2 className="text-4xl font-bold w-3/5 text-black">
          We are qualified & of experience in this field
        </h2>
        <p className="w-3/4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>

        <p className="w-3/4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <button className="btn btn-primary">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
