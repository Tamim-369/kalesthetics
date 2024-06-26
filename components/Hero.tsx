"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControlls = useAnimationControls();
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="text-white     flex justify-center items-center bg-gradient-to-t from-[#00000074]  to-[#0e1215ee]  border-b-emerald-600 border-b-2 space-nav min-h-[90dvh]">
      <div className="flex  w-10/12 min-h-[50dvh]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView={"visible"}
          ref={ref}
          transition={{ duration: 0.6, delay: 0 }}
          className="lg:w-7/12 mx-auto text-center flex flex-col  text-pretty"
        >
          <h1 className=" text-3xl sm:text-4xl font-oswald mb-1 font-semibold text-gray-100">
            Welcome to{" "}
            <span className="bg-gradient-to-bl from-emerald-500 via-[#34ed87] to-emerald-700  bg-clip-text text-transparent text-4xl sm:text-5xl  font-extrabold ">
              {" "}
              Kalesthetics
            </span>
          </h1>
          <h1 className="text-2xl sm:text-3xl font-oswald mb-2 font-semibold text-gray-100">
            An AI-powered fitness platform
          </h1>
          <p className="font-roboto bg-gradient-to-tr from-emerald-300 via-gray-100 to-emerald-300 bg-clip-text text-transparent text-base sm:text-[1.36rem]  font-medium  text-gray-200">
            Get ready to unlock your potential. Kalesthetics offers AI-powered
            home workouts and calisthenics for men serious about fitness. Build
            muscle, boost endurance, and reach your peak with our guidance.
          </p>
          <div className="mt-3">
            <button className="cursor-pointer py-2 px-3 sm:py-3 sm:px-4 shadow-md  transition-all ease-linear duration-150   rounded-xl font-roboto font-medium text-[1.2rem] sm:text-[1.3rem]  bg-gradient-to-bl from-emerald-600 via-[#2dc972] to-emerald-600 ">
              <span>Get Started Now</span>
            </button>
          </div>
        </motion.div>
        <div className=" flex flex-col ">
          <Image
            src={"/hero.png"}
            alt="hero"
            fill
            className="rounded-3xl object-cover mb-28 z-[-1]  opacity-25 grayscale "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
