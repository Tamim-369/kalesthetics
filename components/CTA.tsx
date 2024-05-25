import React from "react";

const CTA = () => {
  return (
    <>
      <section
        id="call-to-action"
        className="py-16 bg-backgroundUpper text-white text-center"
      >
        <div className="container mx-auto px-4 w-10/12">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Fitness Journey Today!
          </h2>
          <p className="text-xl mb-8">
            Don't wait any longer. Join Kalesthetics now and transform your
            fitness with our AI-powered home workouts and calisthenics. Achieve
            your goals with personalized plans, real-time feedback, and progress
            tracking.
          </p>
          <a
            href="#get-started"
            className="bg-gradient-to-tr from-emerald-600 via-emerald-400 to-emerald-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-800"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </>
  );
};

export default CTA;
