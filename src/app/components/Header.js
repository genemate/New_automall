"use client";
import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

//react scroll
import { Link } from "react-scroll";

//components
import SearchMobile from "./SearchMobile";

//media query hook
import { useMediaQuery } from "react-responsive";

//icons
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { FaInstagram, FaTelegramPlane, FaFacebook } from "react-icons/fa";

//search context
import { SearchContext } from "../context/search";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      //search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    //add event listener
    window.addEventListener("scroll", handleScroll);

    //remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/logo-hor.png"}
              width={223}
              height={254}
              alt=""
            />
          </Link>
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? <BiX className="text-4xl" /> : <BiMenuAltRight />}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold 
          xl:font-medium xl:flex-row xl:w-max xl:gap-x-2 xl:h-max xl:bg-transparent 
          xl:pb-0 transition-all duration-150 text-center xl:text-center uppercase 
          text-sm xl:text-[15px] xl:normal-case xl:items-center`}
        >
          <Link
            className="cursor-pointer uppercase text-[13px] font-semibold text-primary hover:text-accent inline-block mb-2 rounded-full border-solid border-2 py-2 px-10"
            to="#"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            href="/"
          >
            Avtomobillar
          </Link>
          <Link
            className="cursor-pointer uppercase text-[13px] font-semibold text-primary hover:text-accent inline-block mb-2 rounded-full border-solid border-2 py-2 px-10"
            to="#"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Maxsus takliflar
          </Link>
          <Link
            className="cursor-pointer uppercase text-[13px] font-semibold text-primary hover:text-accent inline-block mb-2 rounded-full border-solid border-2 py-2 px-10"
            to="#"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            href="/"
          >
            Muddatli to'lov
          </Link>
          <Link
            className="cursor-pointer uppercase text-[13px] font-semibold text-primary hover:text-accent inline-block mb-2 rounded-full border-solid border-2 py-2 px-10"
            to="#"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            href="/"
          >
            Biz haqimizda
          </Link>
          {/* <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>
          <SearchMobile /> */}
          {/* <div className="flex h-full justify-between border-dark items-center mb-2 rounded-full border-solid border-2">
            <a href="/">
              <FaTelegramPlane />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaFacebook />
            </a>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
