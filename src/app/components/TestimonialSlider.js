"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

//next images
import Image from "next/image";

//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

//car data
const testimonial = [
  {
    type: "Text",
    title: "Мы открылись",
    description:
      "У нас в филиале Карши, открытие. Приглашаем всех наших посетителей на нашу церемонию",
    image: "/images/news/1.jpg",
    date: "31 Oktober, 2023",
  },
  {
    type: "Video",
    title: "Title",
    description: "Description",
    image: "/images/news/1.jpg",
    date: "30 Oktober, 2023",
  },
  {
    type: "Photo",
    title: "Title",
    description: "Description",
    image: "/images/news/1.jpg",
    date: "29 Oktober, 2023",
  },
  {
    type: "Audio",
    title: "Title",
    description: "Description",
    image: "/images/news/1.jpg",
    date: "28 Oktober, 2023",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="container">
      <div className="container mx-auto">
      <div>
        {/* <Text src={testimonial.type}/> */}
      </div>
        <h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-left"
        >
          News
        </h2>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <Swiper
          // modules={[Navigation, Pagination, Apply]}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 32 },
            1260: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {testimonial.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[385px] mx-auto sm:mx-0">
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
                      src={testimonial.image}
                      width={380}
                      height={284}
                      alt=""
                    />
                  </motion.div>

                  <div className="flex justify-between">
                    <div>
                      <div className="text-[13px] text-secondary uppercase">
                        {testimonial.type}
                      </div>
                      <h3 className="text-lg uppercase font-bold">
                        {testimonial.title}
                      </h3>
                      {/* <p className="mb-10 font-normal uppercase">
                        {testimonial.description}
                      </p> */}
                      <div className="text-[13px] text-secondary uppercase py-6 flex items-center gap-x-[190px] ">
                        {testimonial.date}
                        <div className="flex items-center gap-x-[10px]">
                          <h3 className="flex flex-col gap-y-4 font-semibold">
                            <ul>
                              <li>
                                <a href="#">more</a>
                              </li>
                            </ul>
                          </h3>
                          <AiFillCaretRight />
                        </div>
                      </div>
                    </div>
                    {/* stars */}
                    {/* <div className="flex gap-x-2 text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div> */}
                  </div>
                  {/* testimonial info */}
                  {/* <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {testimonial.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div> */}
                  {/* <button className="btn btn-accent btn-lg">Подробнее</button> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
}
