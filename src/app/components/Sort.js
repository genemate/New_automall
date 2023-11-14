"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

//next images
import Image from "next/image";

//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

//car data
const cars = [
  {
    type: "Хэтчбек",
    name: "Ford Focus",
    price: 29000000000,
    stars: 3.5,
    image: "/images/carSlider/car1.png",
    logo: "icons/brands/mercedes.svg",
    info: [
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 ЛС",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Газ",
      },
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Механика",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Передний",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 мест",
      },
    ],
  },
  {
    type: "Седан",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "/images/carSlider/car1.png",
    logo: "icons/brands/bmw.svg",
    info: [
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 ЛС",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Газ",
      },
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Автомат",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Передний",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 мест",
      },
    ],
  },
  {
    type: "Кабриолет",
    name: "Honda CR-V",
    price: 32,
    stars: 4.9,
    image: "/images/carSlider/car1.png",
    logo: "icons/brands/vw.svg",
    info: [
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 ЛС",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Газ",
      },
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Автомат",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Передний",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 мест",
      },
    ],
  },
  {
    type: "Внедорожник",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "/images/carSlider/car1.png",
    logo: "icons/brands/mercedes.svg",
    info: [
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 ЛС",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Газ",
      },
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Автомат",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Передний",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 мест",
      },
    ],
  },
];

export default function Sort() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      {cars.map((car, index) => {
        return (
          <div className="inline-block max-w-[385px] mx-auto sm:mx-0 mb-10">
            <div className="flex justify-between">
              <div className="inline-block mb-2 ml-2 rounded-full border-solid 
              border-2 hover:scale-105 transition-all ease duration-200  py-2 
              px-10 font-semibold uppercase xl:justify-start cursor-pointer">
                {car.type}
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
