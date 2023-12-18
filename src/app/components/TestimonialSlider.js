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
import { AiFillCaretRight } from "react-icons/ai";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

//car data
import { news } from "./news";

export default function TestimonialSlider() {
  return (
    <section className="container">
      <div className="container mx-auto ">
        <h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-left"
        >
          Yangiliklar
        </h2>
        <div className="flex items-center gap-x-[10px] justify-end">
          <h3 className="flex flex-col gap-y-4 font-semibold">
            <ul>
              <li>
                <a href="#">See all</a>
              </li>
            </ul>
          </h3>
          <AiFillCaretRight className="cursor-pointer" />
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 32 },
            1260: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {news.map((news, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[385px] mx-auto sm:mx-0 cursor-pointer">
                  <motion.div
                    whileHover={{
                      position: "relative",
                      zIndex: 1,
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Image
                      src={news.image}
                      width={380}
                      height={284}
                      alt=""
                    />
                  </motion.div>

                  <div className="flex justify-between">
                    <div>
                      {/* <div className="text-[13px] text-secondary uppercase">
                        {testimonial.type}
                      </div> */}
                      <h3 className="text-lg uppercase font-bold py-6">
                        {news.title}
                      </h3>
                      {/* <p className="mb-10 font-normal uppercase">
                        {testimonial.description}
                      </p> */}
                      <div className="text-[13px] text-secondary uppercase py-6 flex items-center gap-x-[160px] ">
                        {news.date}
                        <div className="flex items-center gap-x-[10px]">
                          <h3 className="flex flex-col gap-y-4 font-semibold">
                            <ul>
                              <li>
                                <a href="#">Batafsil</a>
                              </li>
                            </ul>
                          </h3>
                          <AiFillCaretRight
                            className="cursor-pointer"
                            href="/"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          
          {/* <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FaArrowRight />
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </motion.div>
    </section>
  );
}
