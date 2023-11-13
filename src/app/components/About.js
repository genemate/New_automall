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

const About = () => {
  return (
    <section className="section flex items-center" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
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
          {/* text & stats */}.
          <div className="flex-l flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Покупка автомобиля упрощена
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Отсортируйте, выбирайте и приобретайте с легкостью. Наше удобное
                расположение и разнообразные типы автомобилей гарантируют
                надежное качества и безмерное удовольствие от приобретенного
                продукта.
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <BsFillCarFrontFill className="text-5xl text-accent" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    типов <br /> автомобилей
                  </div>
                </div>
                {/* rental outlets */}
                <div className="flex flex-col w-[100px]">
                  <ImHappy className="text-5xl text-accent" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    довольных <br /> клиентов
                  </div>
                </div>
                {/* repair points */}

                <div className="flex flex-col w-[100px]">
                  <FaHandshake className="text-5xl text-accent" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    проданных <br /> автомобилей
                  </div>
                </div>
              </motion.div>
              {/* btn */}
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                Все машины
                {/* Станьте одним из счастливых клиентов AUTOMALL */}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
