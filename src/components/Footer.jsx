import React from "react";
import { FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center text-white gap-4 py-20 bg-[#102A42] mt-20">
      <div>
        <ul className="flex flex-row gap-5">
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
      </div>
      <div className="flex flex-row gap-7 mt-7 mb-7 text-3xl">
        <a
          className="hover:text-blue-400 transition-all duration-500"
          href="https://facebook.com"
        >
          <FaFacebook />
        </a>
        <a
          className="hover:text-blue-400 transition-all duration-500"
          href="https://x.com"
        >
          <FaTwitter />
        </a>
        <a
          className="hover:text-blue-400 transition-all duration-500"
          href="https://squarespace.com"
        >
          <FaSquarespace />
        </a>
      </div>
      <div className="tracking-[0.2em] font-light">
        copyright © Backroads travel tours company2024. all rights reserved
      </div>
    </footer>
  );
}

export default Footer;
