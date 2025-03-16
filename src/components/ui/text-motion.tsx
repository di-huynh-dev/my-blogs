"use client";
import React from "react";
import { motion } from "framer-motion";

const TextMotion = ({ text }: { text: string }) => {
  return (
    <div>
      {text.split("").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1 + index * 0.1,
          }}
          className="inline-block text-2xl font-bold text-blue-500"
          style={{
            fontSize: "24px",
            marginRight: "4px",
            backgroundImage: "linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextMotion;
