"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VendingSection = () => {
  return (
    <section className="relative bg-scanpick-black text-white overflow-hidden py-24 px-6 md:px-12">
      {/* Background Accent */}
      <div className="absolute top-0 -left-20 w-[140%] h-[40%] bg-scanpick-red rotate-[4deg] z-0 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-scanpick-red mb-6 tracking-tight"
        >
          Redefining Vending Through Innovation
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Since{" "}
          <span className="text-scanpick-red font-semibold">
            September 2023
          </span>
          , SCANPICK PRIVATE LIMITED has combined technology and design to
          create hygienic, efficient, and intelligent food automation solutions
          across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mt-16 w-full max-w-4xl mx-auto"
        >
          {/* 🔥 Test flame overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-gradient-to-t from-red-600 via-orange-400 to-transparent blur-2xl opacity-70 animate-flame z-30 pointer-events-none" />

          {/* Image */}
          <Image
            src="/images/scanpick-machine.png"
            alt="Smart Vending Machine"
            width={1200}
            height={600}
            className="relative z-20 rounded-xl shadow-xl object-cover w-full h-auto"
            priority
          />
        </motion.div>

        {/* Informational Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-scanpick-red mb-10">
            Our Story in Focus
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Founded with Purpose",
                desc: "Launched in 2023 as a mission-driven MSME, SCANPICK set out to improve hygiene and reduce crowding in food sections through smart automation.",
              },
              {
                title: "Backed by NIDHI PRAYAS",
                desc: "We received a ₹5 lakh grant that helped us build our first working prototype — a leap into real-world automation.",
              },
              {
                title: "Proven & Scalable",
                desc: "Our vending system is already active at Presidency University, showing measurable impact in campus food delivery.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-scanpick-black border border-gray-700 rounded-xl p-6 text-left hover:shadow-scanpick-red/30 hover:scale-[1.02] transition duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VendingSection;
