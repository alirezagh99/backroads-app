import React from "react";
import logo from "../assets/images/logo.svg";
import { FaFacebook, FaTwitter, FaSquarespace } from "react-icons/fa";

function Header() {
  return (
    <header className="flex flex-row justify-around bg-white py-5">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex flex-row gap-5 text-[rgba(0,0,0,0.7)]">
          <li>H o m e</li>
          <li>A b o u t</li>
          <li>S e r v i c e s</li>
          <li>T o u r s</li>
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
