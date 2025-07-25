import React from "react";
import { FaUserPlus, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image + Cards */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="https://codewithsadee.github.io/eduweb/assets/images/about-banner.jpg"
            alt="Instructor"
            className="rounded-xl shadow-lg"
          />

          {/* Floating Profile Card */}
          <div className="absolute top-5 right-[-20px] bg-white rounded-xl p-4 shadow-lg w-48 text-center">
            <div className="w-10 h-10 mx-auto mb-2 bg-yellow-200 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 border-4 border-yellow-500 border-t-transparent border-r-transparent rounded-full animate-spin"></div>
            </div>
            <p className="font-semibold">Ray Sanchez</p>
            <p className="text-xs text-gray-500">Minim veniam nostrud exer citation.</p>
          </div>

          {/* Enrolled Learners */}
          <div className="absolute bottom-[-20px] left-0 bg-white rounded-xl p-4 shadow-md flex items-center gap-3 w-56">
            <FaUserPlus className="text-pink-500 text-2xl" />
            <div>
              <p className="text-xl font-bold text-pink-600">20K+</p>
              <p className="text-sm text-gray-500">Enrolled Learners</p>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug mb-4">
            Over 10 Years in{" "}
            <span className="text-pink-500">Distant learning</span> for <br />
            <span className="text-black">Skill Development</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliqua enim ad minim.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span className="text-gray-700">Expert Trainers</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span className="text-gray-700">Online Remote Learning</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span className="text-gray-700">Lifetime Access</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
