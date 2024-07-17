import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-secondary flex justify-between text-white p-10">
      <aside className="w-full mr-48">
        <Image src="/assets/logo.svg" alt="logo" height={80} width={80}></Image>
        <p>
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
        <div className="flex gap-4">
          <FcGoogle className="text-2xl rounded-full bg-slate-600 p-1" />
          <FaFacebook className="text-2xl rounded-full bg-slate-600 p-1" />
          <FaInstagram className="text-2xl rounded-full bg-slate-600 p-1" />
          <FaXTwitter className="text-2xl rounded-full bg-slate-600 p-1" />
        </div>
      </aside>
      <nav className="  w-full ">
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="  w-full ">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav className="  w-full ">
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessibility</a>
      </nav>
    </footer>
  );
};

export default Footer;
