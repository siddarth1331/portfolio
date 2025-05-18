import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className=" fixed top-0  right-15 w-10/15 -z-2 translate-y-[-70%] ">
        <a href="#">
          <Image
            src="/header-bg-color.png"
            alt="Header Background"
            width={700}
            height={0}
          />
        </a>
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image src={assets.mylogo} alt="logo" width={112} height={28} />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a className="'font-Ovo" href="#top">
              Home&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a className="'font-Ovo" href="#about">
              About Me&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a className="'font-Ovo" href="#work">
              My work&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a className="'font-Ovo" href="#contact">
              Contact Me&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image
              src="/arrow-icon.png"
              alt="arrow"
              width={12}
              height={12}
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src="/menu-black.png"
              alt="menu"
              width={21}
              height={21}
              className="w-6 h-6"
            />
          </button>
        </div>
        {/* --------mobile menu----*/}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src="/close-black.png"
              alt="close"
              width={21}
              height={21}
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="'font-Ovo" onClick={closeMenu} href="#top">
              Home&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
            </a>
            <a className="'font-Ovo" onClick={closeMenu} href="#about">
              About Me&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
            </a>

            <a className="'font-Ovo" onClick={closeMenu} href="#work">
              My work&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
            </a>
            <a className="'font-Ovo" onClick={closeMenu} href="#contact">
              Contact Me&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
