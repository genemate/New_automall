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

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <div className="flex items-center gap-x-[10px] justify-end">
        <h3 className="flex flex-col gap-y-4 font-semibold">
          <ul>
            <li>
              <a href="#">See all</a>
            </li>
          </ul>
        </h3>
        <AiFillCaretRight />
      </div>
      <div className="flex items-center gap-x-[10px] justify-start">
        <AiFillCaretLeft />
        <AiFillCaretRight />
      </div>
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
              <div className="max-w-[385px] mx-auto sm:mx-0 shadow-md cursor-pointer">
                <motion.div
                  // whileHover={{
                  //   position: "relative",
                  //   zIndex: 1,
                  //   scale: 1.2,
                  //   transition: {
                  //     duration: 0.2,
                  //   },
                  // }}
                  className="flex justify-center items-center"
                >
                  <Image src={car.logo} width={60} height={60} alt="" />
                </motion.div>
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
                  <div className="flex gap-x-2 text-blue-500 h-max mr-4">
                    <VscColorMode />
                  </div>
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
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">
                  <a href="{mazda}">Подробнее</a>
                </button>
                {/* <button className="btn btn-accent btn-lg">
                  <a href="{productId}">Подробнее</a>
                </button> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
