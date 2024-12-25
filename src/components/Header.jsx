import React from "react";
import logo from "../assets/images/logo.svg";
import { FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className="flex shadow-lg from-blue-400 items-center flex-row justify-around bg-white sticky z-10 top-0 py-5">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-5 text-[rgba(0,0,0,0.7)]">
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#">H o m e</a>
          </li>
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#about">A b o u t</a>
          </li>
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#services">S e r v i c e s</a>
          </li>
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#tours">T o u r s</a>
          </li>
        </ul>
      </nav>
      <a href="#" className="md:hidden text-2xl">
        <IoMenu />
      </a>
      <div className="icons flex flex-row gap-3 text-xl text-blue-400">
        <a
          className="hover:text-blue-200 transition-all duration-500"
          href="https://facebook.com"
        >
          <FaFacebook />
        </a>
        <a
          className="hover:text-blue-200 transition-all duration-500"
          href="https://x.com"
        >
          <FaTwitter />
        </a>
        <a
          className="hover:text-blue-200 transition-all duration-500"
          href="https://squarespace.com"
        >
          <FaSquarespace />
        </a>
      </div>
    </header>
  );
}

export default Header;
