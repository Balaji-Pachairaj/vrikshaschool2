import React from "react";
import { motion } from "framer-motion";

import why1 from "../assets/whyus/2.png";
import why2 from "../assets/whyus/3.png";
import why3 from "../assets/whyus/4.png";
import why4 from "../assets/whyus/5.png";
import why5 from "../assets/whyus/6.png";
import why6 from "../assets/whyus/7.png";
import why7 from "../assets/whyus/8.png";
import why8 from "../assets/whyus/9.png";

const EventsMobile = () => {
  const events = [
    {
          image: why1
        },
        {
          image: why2
        },
        {
          image: why3
        },
        {
          image: why4
        },
        {
          image: why5
        },
        {
          image: why6
        },
        {
          image: why7
        },
        {
          image: why8
        }
  ];

  return (
    <section className="py-8">
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
          Why Us?
        </span>
      </h2>
      <div className="px-4 space-y-4">
        {events.map((item) => (
          <motion.div
            className="w-full h-[400px] bg-white rounded-lg shadow-md overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.image}
              alt={`Event ${item?.title}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsMobile;
