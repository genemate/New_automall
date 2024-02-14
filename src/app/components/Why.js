"use client";

//next image
import Image from "next/image";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";

//icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

import backgroundImage from '/public/images/carSlider/Integrator.png'

export default function Why() {
  return (
    <section className="section flex items-center bg-[#b2b7c2]/10" id="why">
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="container mx-auto"
      >
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Betakror sifat va mijozlar ehtiyojini qondirish
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680 px] text-center mx-auto mb-2"
        >
          Bizning ajoyib xizmatlarni taqdim etishga sodiqligimiz bizni
          raqobatchilarimizdan ajratib turadi. Biz bilan hamkorlik qilishni
          boshlagan paytdan boshlab, biz har bir o'zaro aloqada sizning
          kutganingizdan ortig'ini berishga intilamiz.
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={"/images/why/car.svg"} width={1060} height={420} alt="" />
        </motion.div>
        {/* grid items */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Avtomobillarning keng tanlovi</h3>
            <p className="hidden xl:flex">
              Dunyoning eng rivojlangan davlatlaridan keltirilgan keng
              asortimetdagi sifatli, ishonchli va barcha uchun mo’ljallangan
              avtomobillar.
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Hamyonbop narxlar</h3>
            <p className="hidden xl:flex">
              Bozordagi eng past narxlarni taklif qiluvchi multibrend avtosalon.
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <FaHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Qulay shartlar</h3>
            <p className="hidden xl:flex">
              Mijozlar uchun yaratilgan eng qulay shartlar. Muddatli to’lov,
              nasiya savdo va avtokredit rasmiylashtirish imkoniyati.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
