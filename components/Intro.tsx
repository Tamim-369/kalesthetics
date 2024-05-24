"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FcFeedback } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
} from "framer-motion";
const Intro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const inView = useInView(ref);
  const mainControlls = useAnimationControls();
  useEffect(() => {
    if (inView) {
      mainControlls.start("visible");
    }
  }, [inView]);
  return (
    <>
      <section className="text-gray-300 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ amount: "all" }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-center mb-20"
            ref={secRef}
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-100 mb-4">
              Unlock Your Potential with Kalesthetics
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Our AI-powered fitness trainer provides personalized workout plans
              and real-time feedback to help you achieve your fitness goals from
              the comfort of your home.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-green-500 inline-flex" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1  w-10/12 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-center items-center sm:w-full  gap-4">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.6, delay: 0 }}
              className="p-4 mx-2  flex flex-col text-center items-center"
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-backgroundUpper text-green-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                  Personalized Plans
                </h2>
                <p className="leading-relaxed text-base">
                  Customized workout plans tailored to your fitness level and
                  goals.
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.6, delay: 0 }}
              className="p-4 mx-2  flex flex-col text-center items-center"
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-backgroundUpper text-green-500 mb-5 flex-shrink-0">
                <div className="text-4xl">
                  <VscFeedback />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                  Real-time Feedback
                </h2>
                <p className="leading-relaxed text-base">
                  Get instant feedback and adjust your form to maximize results.
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.6, delay: 0 }}
              className="p-4 mx-2  flex flex-col text-center items-center"
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-backgroundUpper text-green-500 mb-5 flex-shrink-0">
                <div className="text-4xl">
                  <GiProgression />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                  Progress Tracking
                </h2>
                <p className="leading-relaxed text-base">
                  Track your progress and stay motivated with detailed
                  analytics.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
