"use client";

import React, { useState } from "react";

//headless ui
import { Menu } from "@headlessui/react";

//icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

//react date
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

//react date range css
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function HourSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/*btn*/}
        <Menu.Button className="w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
        <form className="flex gap-x-2 h-14">
          <input
            type="text"
            placeholder="Telefon raqamingiz"
            className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
          />
        </form>
        </Menu.Button>
      </div>
    </Menu>
  );
}
