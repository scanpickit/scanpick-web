"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import services from "../../public/data/Services";

const AnimatedIcon = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-full flex items-center justify-center text-white text-lg font-semibold"
    >
      {title}
    </motion.div>
  );
};

type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
  active?: String;
  image?: string;
  animated?: boolean;
};

// const services: Service[] = [
//   {
//     id: 1,
//     title: 'Smart Vending That Works 24/7',
//     description:
//       'ScanPick’s smart vending machines deliver contactless, automated food access for campuses, offices, and public spaces - all powered by our in-house tech.',
//     features: ['Touch-Free Access', 'Campus-Tested & Scalable'],
//     image: '/vending.png',
//   },
//   {
//     id: 2,
//     title: 'Automated Email Sender',
//     description:
//       'Easily schedule, personalize, and send emails with our robust automation system.',
//     features: ['SMTP Integration', 'Schedule & Track'],
//     animated: true,
//   },
//   {
//     id: 3,
//     title: 'AI Customer Support Bot',
//     description:
//       'Deploy conversational AI support agents that help users 24/7 with real-time queries.',
//     features: ['LLM-based', 'Multi-language'],
//     animated: true,
//   },
//   {
//     id: 4,
//     title: 'Instant Notifications Engine',
//     description:
//       'Trigger SMS, WhatsApp, or push alerts on defined events in your product.',
//     features: ['Twilio & Firebase Ready', 'Event-Driven'],
//     animated: true,
//   },
//   {
//     id: 5,
//     title: 'Workflow Automation Made Simple',
//     description:
//       'Automate repetitive tasks, increase productivity, and focus on growth. Our custom backend systems integrate with your tools seamlessly.',
//     features: ['No-Code Integration', 'Enterprise Ready'],
//     image: '/automation.png',
//   },
// ];

export default function Home() {
  return (
    <div className="bg-black text-white px-4 md:px-20 py-20 space-y-20">
      <div className="text-center">
        <p className="text-[10px] border border-neutral-700 px-3 py-1 rounded-md inline-block mb-4">
          Our Services
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
          Tech Solutions That Take Your Business to the Next Level
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          We build vending machines, automate workflows, ship clean code, and
          design the hardware to back it all.
        </p>
      </div>

      <div className="flex flex-col items-center gap-16">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  service: Service;
  reverse?: boolean;
};

function ServiceCard({ service, reverse }: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(6px)" }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: "easeOut" },
            }
          : {}
      }
      className={clsx(
        "flex flex-col items-center gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:gap-12 lg:px-10 lg:py-12 max-w-6xl w-full rounded-2xl shadow-md",
        reverse
          ? "lg:flex-row-reverse lg:items-center"
          : "lg:flex-row lg:items-center"
      )}

      // bg-neutral-950
    >
      {/* Left: Image or Animation */}
      <div className="relative w-full max-w-[90%] sm:max-w-[400px] md:max-w-[320px] aspect-[4/3] bg-scanpick-black rounded-xl overflow-hidden shadow-md mx-auto md:mx-0">
        {service.animated ? (
          <AnimatedIcon title={service.title} />
        ) : (
          <Image
            src={service.image || ""}
            alt={service.title}
            fill
            className={`w-full h-full transition-transform duration-300 ${
              service.id !== 1
                ? "scale-[1.1] object-cover"
                : "scale-[1.4] object-contain"
            }`}
          />
        )}
      </div>

      {/* Right: Text */}
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <p className="text-[10px] px-3 py-1 rounded-md border border-neutral-700 w-fit text-gray-400">
          Our Services
        </p>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug text-white">
          {service.title}
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          {service.description}
        </p>
        <p className="text-gray-400 text-sm md:text-base">{service.active}</p>
        <div className="flex flex-wrap gap-2 pt-3">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="border border-neutral-700 rounded-md px-3 py-1 text-xs text-gray-300"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
