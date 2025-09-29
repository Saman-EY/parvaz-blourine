"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CloudsMoving() {
  return (
    <motion.figure
      className="w-full absolute -bottom-[40px] lg:-bottom-[20%] z-0 pointer-events-none"
      animate={{ y: [0, 0, 0], x: [0, 0, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/assets/images/static/Clouds.png"
        alt="hero"
        width={1920}
        height={180}
        className="w-full h-full max-h-200 object-cover"
      />
    </motion.figure>
  );
}
