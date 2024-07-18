import React from "react";

const SectionTitle = ({ heading, title, description }) => {
  return (
    <div className="space-y-2 text-black text-center">
      <h4 className="text-lg text-primary font-semibold">{heading}</h4>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="w-1/2 mx-auto text-[#737373]">{description}</p>
    </div>
  );
};

export default SectionTitle;
