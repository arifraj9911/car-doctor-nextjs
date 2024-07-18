import Image from "next/image";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact text-black p-4 w-96 shadow-xl">
      <figure>
        <Image src={img} alt="service-image" height={500} width={500}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>

        <div className="card-actions  justify-end font-semibold text-primary">
          <p className="text-lg">Price: ${price}</p>
          <button>
            <IoMdArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
