"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";
const DownloadResume = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ width: "fit-content" }}
    >
      <Button>
        Contact me <DownloadIcon />
      </Button>
    </motion.div>
  );
};

export default DownloadResume;
