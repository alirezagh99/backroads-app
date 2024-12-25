import React from "react";
import logo from "../assets/images/logo.svg";
import { FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";

function Header() {
  return (
    <header className="flex shadow-lg from-blue-400 flex-row justify-around bg-white sticky z-10 top-0 py-5">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex flex-row gap-5 text-[rgba(0,0,0,0.7)]">
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#">H o m e</a>
          </li>
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#">A b o u t</a>
          </li>
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#">S e r v i c e s</a>
          </li>
          <li className="hover:text-blue-400 transition-all duration-500">
            <a href="#">T o u r s</a>
          </li>
        </ul>
      </nav>
      <div className="icons flex flex-row gap-3 text-xl text-blue-400">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://x.com">
          <FaTwitter />
        </a>
        <a href="https://squarespace.com">
          <FaSquarespace />
        </a>
      </div>
    </header>
  );
}

export default Header;
