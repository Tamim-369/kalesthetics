import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-backgroundUpper text-white py-8">
        <div className="container flex justify-between items-center mx-auto px-4">
          {/* Copyright */}
          <div className=" text-center text-gray-500">
            <p>© 2024 Kalesthetics. All rights reserved.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-400">Email: support@kalesthetics.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
