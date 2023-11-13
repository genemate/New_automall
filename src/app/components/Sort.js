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
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <div className="flex justify-between ml-5">
                  <div className="text-[13px] text-secondary uppercase mb-5">
                    {car.type}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
