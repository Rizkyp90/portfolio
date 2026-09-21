import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Bulatan gradient dikecilkan sedikit di mobile agar tidak terlalu dominan */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/20 rounded-full blur-[80px] md:blur-[100px] opacity-50 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-wide mb-3 text-sm md:text-base" // Mengecilkan font & margin mobile
        >
          HELLO, I AM
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          // Penyesuaian ukuran teks: 3xl di mobile, 7xl di desktop
          className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500 leading-tight"
        >
          RIZKY KUSUMA PUTRA<br className="hidden sm:block" />
          <span className="text-primary"> Fullstack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          // Teks deskripsi dikecilkan menjadi text-base di mobile
          className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 md:px-0"
        >
          A frontend developer passionate about creating interactive, modern, and user-centric web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#projects"
            // Padding tombol disesuaikan agar tidak terlalu besar di mobile
            className="inline-block bg-white text-black font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            View Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce text-gray-500 w-5 h-5 md:w-6 md:h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;