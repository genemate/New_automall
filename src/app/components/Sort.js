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
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCaretRight } from "react-icons/ai";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

import { items } from "./items";

export default function Sort() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      {items.map((car, index) => {
        return (
          <div className="inline-block max-w-[385px] mx-auto sm:mx-0 mb-10">
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
    </motion.div>
  );
}
