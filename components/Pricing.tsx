"use client";
import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
const Pricing = () => {
  const ref = useRef(null);
  return (
    <>
      <section
        ref={ref}
        id="pricing"
        className="py-16 bg-background text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center flex mb-16 flex-col justify-center items-center"
          >
            <h2 className="text-3xl font-bold  text-center">
              Choose Your Plan
            </h2>
            <p className="text-gray-200 font-roboto font-medium">
              Please choose a plan to begin your journey.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 font-roboto md:grid-cols-2 w-full min-[430px]:w-8/12 md:w-10/12 lg:w-7/12 mx-auto gap-8">
            {/* Basic Plan */}
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1.05, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pricing-plan  z-0 border-2 border-emerald-600 bg-backgroundUpper p-6 rounded-lg text-left"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold ">Basic</h3>
                <p className="text-sm font-medium text-gray-200 font-roboto">
                  Perfect for users who are more serious about achiving thier
                  fitness goals
                </p>
              </div>
              <p className="text-3xl font-bold mb-4">
                $9.99<span className="text-lg font-normal">/month</span>
              </p>
              <ul className="mb-8">
                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Personalized workout plans</span>
                </li>

                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Full access to exercises</span>
                </li>
                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Real-time feedback</span>
                </li>
                <li className="flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Progress tracking</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-emerald-600 text-white py-2 px-6 rounded-lg font-medium"
              >
                Get Started
              </a>
            </motion.div>

            {/* Pro Plan */}

            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pricing-plan bg-backgroundUpper p-6 rounded-lg text-left"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold ">Pro</h3>
                <p className="text-sm font-medium text-gray-200 font-roboto">
                  Perfect for users who want to take thier body to the next
                  level
                </p>
              </div>
              <p className="text-3xl font-bold mb-4">
                $19.99<span className="text-lg font-normal">/month</span>
              </p>
              <ul className="mb-8">
                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Personalized workout plans</span>
                </li>

                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Personalized meal plans</span>
                </li>
                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Full access to exercises</span>
                </li>

                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Progress tracking</span>
                </li>
                <li className="mb-2 flex justify-start my-4 items-center gap-1">
                  <FaCheck /> <span>Chat support feedback</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-emerald-600 text-white py-2 px-6 rounded-lg font-medium"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
