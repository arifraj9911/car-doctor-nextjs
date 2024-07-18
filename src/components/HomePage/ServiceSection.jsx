import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { serviceApi } from "@/lib/serviceApi";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceSection = () => {
  const serviceData = serviceApi;
  // console.log(serviceData)
  return (
    <div>
      <SectionTitle
        heading="Services"
        title="Our Service Area"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {serviceData?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
