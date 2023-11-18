"use client";

import { useContext, useRef, useState } from "react";

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
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
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
                  Monza – bu hayotingizga kirib, unu yanada yorqin qilishga
                  tayyor bo’lgan avtomobil!
                </motion.p>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 ml-5 text-accent"
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    <div
                      className="flip-card w-[400px] h-[60px] rounded-md items-center"
                      onClick={handleFlip}
                    >
                      <motion.div
                        className="flip-card-inner w-[100%] h-[100%]"
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 360 }}
                        transition={{
                          duration: 0.6,
                          animationDirection: "normal",
                        }}
                        onAnimationComplete={() => setIsAnimating(false)}
                      >
                        <div className="flip-card-front w-[100%] h-[100%] bg-cover border rounded-full text-primary p-4 text-center">
                          <h1 className="text-2xl font-bold/"> 244 600 000 <sub>so'm</sub></h1>
                        </div>

                        <div className="flip-card-back  w-[100%] h-[100%] bg-cover border rounded-full text-primary p-4 text-center">
                          <h1 className="text-2xl font-bold/">
                            <em>yoki oyiga </em>6 017 160 <sub>so'm</sub>
                          </h1>
                        </div>
                      </motion.div>
                    </div>
                  </div>
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
        </SwiperSlide>
        <SwiperSlide>
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
                  Hashamatli, Progressiv va keng Krossover!{" "}
                  {/* <span className="text-accent">мировыми</span> предложениями */}
                </motion.h2>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-3"
                >
                  Avtomobilning har bir detalida premium sifatli his qiling.
                  Oilaviy va biznes sayohatlaringizni yana quyal qiluvchi gibrid
                  crossover!
                </motion.p>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 ml-5 text-accent"
                >
                  <ins>
                    <i>$20,000 yoki oyiga $492 evaziga</i>
                  </ins>
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
        </SwiperSlide>
        <SwiperSlide>
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
                  Haqiqiy Yapon avtomobili, endi O’zbekistonda!{" "}
                  {/* <span className="text-accent">мировыми</span> предложениями */}
                </motion.h2>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-3"
                >
                  Elegant uslub va ilg'or texnik xususiyatlarni o'zida
                  mujassamlashtirgan haqiqiy yapon avtomobili.
                </motion.p>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 ml-5 text-accent"
                >
                  <ins>
                    <i>$18,500 yoki oyiga $454 evaziga</i>
                  </ins>
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
        </SwiperSlide>
        <SwiperSlide>
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
                  Qulaylik va tejamkorlik zamon talabi!{" "}
                  {/* <span className="text-accent">мировыми</span> предложениями */}
                </motion.h2>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-3"
                >
                  Hayratlanarli va zamonaviy eksteryer hamda hashamatli interyer
                  mujassamlashgan Elektromobil.
                </motion.p>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 ml-5 text-accent"
                >
                  <ins>
                    <i>$20,000 yoki oyiga $492 evaziga</i>
                  </ins>
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
        </SwiperSlide>
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
      <div>
        {searchActive ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut }}
            className="fixed top-[60px] z-10 w-full max-w-[1920px]"
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
