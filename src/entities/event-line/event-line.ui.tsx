import React from "react";
import { motion } from "framer-motion";
import EventLineImage from "./svg/eventLine.svg";
import { events } from "./event-line.data";

export const EventLine: React.FC = () => {
  // Анимация для карточек событий
  const eventVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="flex flex-col mx-auto  r-md:pb-0 r-xl:items-center items-center justify-center">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="flex r-sm:gap-[6px] gap-[8px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            custom={index}
            variants={eventVariants}
          >
            {index % 2 === 0 ? (
              <>
                <img
                  className="r-md:block hidden"
                  src={EventLineImage}
                  alt="Event line decoration"
                />
                <motion.div
                  className=" r-sm:w-80 w-[404px] r-md:h-[206px] h-[228px] rounded-[8px] p-[16px] r-md:text-left text-right"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-normal text-[19px] leading-[23.75px] text-[#2563EB]">
                    {event.startTime} - {event.endTime}
                  </p>
                  <h2 className="font-medium text-[24px] text-[#102552] leading-[30px]">
                    {event.title}
                  </h2>
                  <p className="font-normal text-[#6F7684] text-[20px] leading-[32px] ">
                    {event.description}
                  </p>
                </motion.div>
                <img
                  className="r-md:hidden block"
                  src={EventLineImage}
                  alt="Event line decoration"
                />
                <div className="r-md:hidden block w-[404px] h-[228px] rounded-[8px] p-[16px]" />
              </>
            ) : (
              <>
                <div className="r-md:hidden block w-[404px] h-[228px] rounded-[8px] p-[16px]" />
                <img src={EventLineImage} alt="Event line decoration" />
                <motion.div
                  className=" r-sm:w-80 r-md:h-[206px] w-[404px] h-[228px] rounded-[8px] p-[16px] text-left"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-normal text-[19px] leading-[23.75px] text-[#2563EB]">
                    {event.startTime} - {event.endTime}
                  </p>
                  <h2 className="font-medium text-[24px] text-[#102552] leading-[30px]">
                    {event.title}
                  </h2>
                  <p className="font-normal text-[#6F7684] text-[20px] leading-[32px]">
                    {event.description}
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
