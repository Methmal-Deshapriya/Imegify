import React from "react";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28  max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  "
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2  ">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8 ">Turn your imagination into visuals </p>
      <div>
        <img
          src={assets.sample_img_1}
          alt=" "
          className="w-80 xl:w-96 rounded-lg"
        />
      </div>
      <div className="flex flex-col  items-center  mt-10 p-6 md:px-28 rounded-lg">
        <h2 className="text-3xl text-center font-medium max-w-xl mb-4  ">
          Introducing the AI-Powered Text to Image Generator
        </h2>

        <p className="text-gray-600 mb-4 text-center">
          Easily bring your ideas to life with our free AI image generator.
          Whether you need stunning visuals or uniques imagery, our tool
          transforms your text into eye-catching images with just a few clicks.
          Imagine it, describe it, and watch it come to life instantly.
        </p>

        <p className="text-gray-600 text-center">
          Simply type in a text promt, and our cutting-edge AI will generate
          high-quality images in seconds. from product visuals to character
          designs and portraits, even concepts that do't yet exist can be
          visualistic effortlessly. Powered by advanced AI technology, the
          creative possibilities are limitless.{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default Description;
