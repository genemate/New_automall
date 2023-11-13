"use client";

import { useContext } from "react";

// components
import Search from "./Search";

//context
import { SearchContext } from "../context/search";

//next images
import Image from "next/image";

//motion
import { motion, easeInOut } from "framer-motion";

//variants
import { fadeIn } from "/variants";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

{/* <Swiper
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2000,
  }}
>
  <SwiperSlide>{Slide()}</SwiperSlide>
  <SwiperSlide>{Slide()}</SwiperSlide>
  <SwiperSlide>{Slide()}</SwiperSlide>
</Swiper>; */}

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & image wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h2"
            >
              Chevrolet Monza – Yangilanish vaqti keldi!{" "}
              {/* <span className="text-accent">мировыми</span> предложениями */}
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-3"
            >
              Monza – bu hayotingizga kirib, unu yanada yorqin qilishga tayyor
              bo’lgan avtomobil!
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 ml-5 text-accent"
            >
              <ins><i>$20,000 yoki oyiga $492 evaziga</i></ins>
            </motion.p>
            {/* btn google */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <div>
                <button className="btn btn-cta btn-accent w-[164px] mx-auto">
                  Ariza qoldirish
                </button>
              </div>
              {/* btn app store */}
              <div>
                <button className="btn btn-cta btn-secondary w-[164px] mx-auto">
                  Batafsil
                </button>
              </div>
            </motion.div>
          </div>

          {/* image car */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-w-[50vh] md:max-w-[70vw]
          xl:max-w-[860px] xl:max-[]:"
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      <div>
        {searchActive ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut }}
            className="fixed top-[80px] z-10 w-full max-w-[1920px]"
          >
            <Search />
          </motion.div>
        ) : (
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="-mt-12 w-full max-w-[1300px] mx-auto"
            >
              <Search />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
