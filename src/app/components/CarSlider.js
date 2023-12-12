"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

//next images
import Image from "next/image";

//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillCaretRight,
  AiFillCaretLeft,
} from "react-icons/ai";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

import { items } from "./items";

import backgroundImage from "/public/images/carSlider/Champion_bg.png";

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper>
        {items.map((car, index) => {
          <SwiperSlide key={index}>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="container mx-auto"
            >
              <div>
                {items.map((car, index) => {
                  return (
                    <div className="inline-block max-w-[385px] mx-auto sm:mx-0 pt-20">
                      <div className="flex justify-between">
                        <div
                          className="inline-block mb-2 ml-2 rounded-full border-solid 
              border-2 hover:scale-105 transition-all ease duration-200  py-2 
              px-10 font-semibold uppercase xl:justify-start cursor-pointer"
                        >
                          {car.type}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="flex gap-x-[10px] justify-end hover:text-accent mb-10">
                  <h3 className="flex flex-col gap-y-4 font-semibold">
                    <ul>
                      <li>
                        <a href="../product">See all</a>
                      </li>
                    </ul>
                  </h3>
                  <AiFillCaretRight />
                </div>
              </div>
            </motion.div>
          </SwiperSlide>;
        })}
      </Swiper>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {items.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0 cursor-pointer">
                <motion.div className="flex justify-center items-center	">
                  {/* <Image src={car.logo} width={100} height={100} alt="" /> */}
                </motion.div>
                <div
                  style={{
                    backgroundImage: `url(${car.backgroundImage})`,
                    backgroundPosition: "right",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    whileHover={{
                      position: "relative",
                      zIndex: 1,
                      scale: 1.2,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Image src={car.image} width={380} height={284} alt="" />
                  </motion.div>
                </div>

                <div className="flex justify-between ml-5">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-normal">
                      {car.price} so'm
                    </h3>
                  </div>
                  {/* stars */}
                  {/* <div className="flex gap-x-2 text-blue-500 h-max mr-4">
                    <VscColorMode />
                  </div> */}
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10 ml-4">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <motion.div
                          whileHover={{
                            position: "relative",
                            zIndex: 1,
                            scale: 1.2,
                            transition: {
                              duration: 0.2,
                            },
                          }}
                          className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2"
                        >
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </motion.div>
                        <div className="text-[12px] uppercase drop-shadow-xl font-semibold">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                {/* <button className="btn btn-accent btn-lg">
                  <a href="{car.src}">Подробнее</a>
                </button> */}

                {/* btn request */}
                <div className="flex gap-x-3 justify-center xl:justify-start">
                  <div>
                    <button className="btn btn-cta btn-primary w-[164px] mx-auto ml-4">
                      Ariza qoldirish
                    </button>
                  </div>
                  {/* btn more */}
                  <div>
                    <button className="btn btn-yellow btn-yellow w-[164px] mx-auto ml-4 font-semibold">
                      Batafsil
                    </button>
                  </div>
                </div>

                {/* <button className="btn btn-accent btn-lg">
                  <a href="{productId}">Подробнее</a>
                </button> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center gap-x-[10px] justify-start p-8">
        <AiFillCaretLeft className="cursor-pointer font-semibold hover:text-accent inline-block mb-2 rounded-full border-solid border-2 py-5 px-5" />
        <AiFillCaretRight className="hover:text-accent inline-block mb-2 rounded-full border-solid border-2 cursor-pointer py-5 px-5" />
      </div>
    </motion.div>
  );
}
