import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        {bannerSlide?.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(90.00deg, rgb(21, 21, 21),rgba(21, 21, 21, 0) 100%),url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] rounded-lg bg-cover bg-no-repeat"
          >
            <div className="flex flex-col justify-center w-1/2 ml-28 space-y-4">
              <h2 className="text-5xl w-1/2 leading-[56px] text-white font-bold">
                {banner.title}
              </h2>
              <p className="w-3/4">{banner.description}</p>
              <div className="space-x-4">
                <button className="btn btn-primary ">Discover More</button>
                <button className="btn btn-outline hover:bg-primary">
                  Latest Projects
                </button>
              </div>
            </div>
            <div className="absolute right-12 bottom-8 gap-6 flex  transform justify-between">
              <a href={banner.prev} className="btn btn-circle ">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle btn-primary">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const bannerSlide = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide4",
    next: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide1",
    next: "#slide3",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide2",
    next: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide3",
    next: "#slide1",
  },
];

export default Banner;
