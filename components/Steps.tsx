"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaUserCheck, FaUserPlus } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { LiaDumbbellSolid } from "react-icons/lia";
import { RiProgress1Fill, RiSettings2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
const Steps = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="py-16 min-h-[100dvh] flex flex-col justify-center items-center bg-background text-white"
      >
        <div className=" mx-auto px-4">
          <motion.div
            variants={{
              init: {
                opacity: 0,
                y: 100,
                scale: 0,
              },
              final: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            initial={"init"}
            whileInView={"final"}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            className="mb-10 sm:mb-20 flex flex-col justify-center items-center"
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-br from-emerald-600 via-emerald-400 to-emerald-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-300">
              Here are the steps you need to follow to get started.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <motion.div
              variants={{
                init: {
                  opacity: 0,
                  y: 100,
                  scale: 0,
                },
                final: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              initial={"init"}
              whileInView={"final"}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              className="step text-center  p-10 rounded-xl shadow-lg"
            >
              <div className="flex justify-center text-[#2ac96e] items-center">
                <FaUserPlus className="h-20 w-20" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-300">
                Create your free account and fill out your fitness profile.
              </p>
            </motion.div>
            <motion.div
              variants={{
                init: {
                  opacity: 0,
                  y: 100,
                  scale: 0,
                },
                final: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              initial={"init"}
              whileInView={"final"}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              className="step text-center  p-10 rounded-xl shadow-lg"
            >
              <div className="flex justify-center text-[#2ac96e] items-center">
                <RiProgress1Fill className="h-20 w-20" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Setup</h3>
              <p className="text-gray-300">
                Answer a few questions to help us understand your goals and
                preferences.
              </p>
            </motion.div>
            <motion.div
              variants={{
                init: {
                  opacity: 0,
                  y: 100,
                  scale: 0,
                },
                final: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              initial={"init"}
              whileInView={"final"}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              className="step text-center  p-10 rounded-xl shadow-lg"
            >
              <div className="flex justify-center text-[#2ac96e] items-center">
                <LiaDumbbellSolid className="h-20 w-20" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Workout</h3>
              <p className="text-gray-300">
                Follow your personalized workout plan and get real-time
                feedback.
              </p>
            </motion.div>
            <motion.div
              variants={{
                init: {
                  opacity: 0,
                  y: 100,
                  scale: 0,
                },
                final: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              initial={"init"}
              whileInView={"final"}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              className="step text-center  p-10 rounded-xl shadow-lg"
            >
              <div className="flex justify-center text-[#2ac96e] items-center">
                <GiProgression className="h-20 w-20" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-300">
                Monitor your progress and adjust your plan as needed.
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="py-3 px-4  shadow-md shadow-[#0a1f1b]  transition-all ease-linear duration-150   rounded-xl font-roboto font-medium text-[1rem]  bg-gradient-to-bl from-emerald-600 via-[#2dc972] to-emerald-600 ">
              <span>Get Started Now</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
