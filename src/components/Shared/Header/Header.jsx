import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";

const Header = () => {
  const navLink = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100 py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink?.map((link) => (
              <Link
                className="mr-8 font-semibold hover:text-primary duration-300"
                href={link.path}
                key={link.path}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <Image src="/assets/logo.svg" alt="logo" height={80} width={80}></Image>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink?.map((link) => (
            <Link
              className="mr-8 font-semibold hover:text-primary duration-300"
              href={link.path}
              key={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 mr-4">
          <HiOutlineShoppingBag className="text-xl" />
          <GoSearch className="text-xl" />
        </div>
        <button className="btn btn-outline btn-primary ">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
