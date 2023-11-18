"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import city1 from "/public/images/test/city1.svg";
import city2 from "/public/images/test/city2.svg";
import city3 from "/public/images/test/city3.svg";
import planet1 from "/public/images/test/planet1.svg";
import planet2 from "/public/images/test/planet2.svg";


const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = [city1, city2, city3, planet1, planet2];

  const cardDescriptions = [
    "Dunyoning eng rivojlangan davlatlaridan keltirilgan keng asortimetdagi sifatli, ishonchli va barcha uchun mo’ljallangan avtomobillar",
    "Bozordagi eng past narxlarni taklif qiluvchi multibrend avtosalon",
    "Mijozlar uchun yaratilgan eng qulay shartlar. Muddatli to’lov, nasiya savdo va avtokredit rasmiylashtirish imkoniyati",
    "Malakali automall hodimlaridan avtomobillar haqida batafsil ma’lumot olish, avtomobil yetkazib berish bo’yicha barcha jarayonlar bo’yicha to’liq va sifatli konsultatsiya olish",
    "This is a description, write whatever you need here, this is just text for a test",
  ];
  return (
    <section className="py-16 pb-[300px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-primary">
          Betakror sifat va mijozlar ehtiyojini qondirish
        </h1>
        <p className="max-w-[680 px] text-center mx-auto mb-2">
          Bizning ajoyib xizmatlarni taqdim etishga sodiqligimiz bizni
          raqobatchilarimizdan ajratib turadi. Biz bilan hamkorlik qilishni
          boshlagan paytdan boshlab, biz har bir o'zaro aloqada sizning
          kutganingizdan ortig'ini berishga intilamiz.
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-primary bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">
                  Automall
                </h2>
                {index === expandedIndex && (
                  <p className="mt-2 text-gray-300 text-center">
                    {cardDescriptions[index]}{" "}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;
