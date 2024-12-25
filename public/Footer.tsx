import React from "react";
import { AiFillTwitterCircle, AiFillEnvironment } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImFilm } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-black text-gray-100 py-6">
      {/* Table Section */}
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li>Order Status</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Nike</h3>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
              <li>News</li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4 text-2xl">
              <AiFillTwitterCircle />
              <FaFacebook />
              <TfiYoutube />
              <ImFilm />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 px-4">
        <h1 className="flex justify-center items-center space-x-2 text-sm">
          <AiFillEnvironment />
          <span>© 2023 Nike, Inc. All Rights Reserved</span>
        </h1>
        <div className="mt-4 text-sm">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
