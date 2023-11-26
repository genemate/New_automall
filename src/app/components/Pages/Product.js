"use client";

//import swiper styles
import "swiper/css";

//next images
import Image from "next/image";

import "swiper/css/navigation";

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

import { items } from "../items";

export default function Product() {
  return (
    <div className="container flex">
      <h1>Barcha avtomobillar</h1>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex container mx-auto pb-10 pt-10 flex-initial"
      >
        {items.map((car) => {
          return (
            <div className="max-w-[385px] mx-auto sm:mx-0 shadow-md cursor-pointer pt-10 pb-2">
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
                {/* <div className="flex gap-x-2 text-blue-500 h-max mr-4">
                    <VscColorMode />
                  </div> */}
              </div>
              {/* car info */}
              {/* <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10 ml-4">
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
                      <Image src={item.icon} width={24} height={24} alt="" />
                    </motion.div>
                    <div className="text-[12px] uppercase">{item.text}</div>
                  </div>
                );
              })}
            </div> */}
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
                  <button className="btn btn-yellow btn-yellow w-[164px] mx-auto ml-4">
                    Batafsil
                  </button>
                </div>
              </div>

              {/* <button className="btn btn-accent btn-lg">
                  <a href="{productId}">Подробнее</a>
                </button> */}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
