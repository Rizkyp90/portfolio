// src/components/ScrollProgress.js
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  // 1. Mengambil progress scroll (nilai 0 sampai 1)
  const { scrollYProgress } = useScroll();

  // 2. Membuat pergerakan lebih halus dengan spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;