"use client";

//next image
import Image from "next/image";

//icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

//components
import Copyright from "./Copyright";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

//link / react scroll
import { Link } from "react-scroll";

//icons
import { FaInstagram, FaTelegramPlane, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-20 bg-[#b2b7c2]/10" id="testimonial">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo.png"} width={150} height={100} alt="" />
            </Link>
            {/* text */}
            <div className="flex h-full items-center">
              <a href="/">
                <FaTelegramPlane />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaFacebook />
              </a>
            </div>
            {/* phone & mail */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(55) 405 77 70</div>
              </div>
              {/* mail */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@automall.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="#">Avtomobillar</a>
                </li>
                <li>
                  <a href="#">Maxsus takliflar</a>
                </li>
                <li>
                  <a href="#">Muddatli to’lov</a>
                </li>
                <li>
                  <a href="#">Biz haqimizda</a>
                </li>
                <li>
                  <a href="#">Yangiliklar</a>
                </li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Ish vaqti</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Dam olish kunisiz:</div>
                <div className="font-semibold">08:00 - 20:00</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Manzil:</div>
                <div className="font-semibold">
                  Qarshi sh, Jayxun ko‘chasi, 33
                </div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary"> Mo'ljal:</div>
                <div className="font-semibold">
                  "Nasaf" avtomobil bozori (sobiq "Osiyo" bozori)
                </div>
              </div>
            </div>
          </div>
          {/* newsletter */}
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
