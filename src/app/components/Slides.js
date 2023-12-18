"use client";

//next image
import Image from "next/image";

//icons
import { ImHappy } from "react-icons/im";
import { FaHandshake } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";

//react count up
import CountUp from "react-countup";

//react intersection observer
import { useInView } from "react-intersection-observer";

//motion
import { inView, motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

const Slides = () => {
  return (
    <section className="section flex items-center" id="slides">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/car01.png"}
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/car01.png"}
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Slides;
