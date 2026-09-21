import React from 'react';
import { motion } from 'framer-motion';

import profileImage from '../assets/images/p.jpeg';

const About = () => {
  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 }, // Ganti ke scale agar lebih smooth di mobile
    animate: { opacity: 1, scale: 1 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-white relative overflow-hidden">
      
      {/* BACKGROUND BLOB - Dikecilkan ukurannya di mobile agar tidak berat saat render */}
      <div 
        className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-primary/20 blur-3xl opacity-30 transform -translate-x-1/2 top-1/4 left-0 z-0"
        style={{ filter: 'blur(80px)' }}
      />
      
      {/* Judul Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-16 relative z-10"
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
          <span className="text-primary">01.</span> About Me
        </h2>
        <div className="h-1 w-16 md:w-20 bg-primary" />
      </motion.div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-center relative z-10">
        
        {/* 1. Kolom Gambar Profil */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // mx-auto agar gambar tetap di tengah saat mode mobile
          className="lg:col-span-1 relative mx-auto lg:mx-0 w-full max-w-[260px] md:max-w-sm order-first lg:order-last" 
        >
          {/* Border Akses - Disembunyikan di mobile agar lebih clean, muncul di desktop */}
          <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-3 translate-y-3 hidden md:block" />
          
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 md:border-none">
            <img
              src={profileImage} 
              alt="Profil" 
              className="w-full h-auto object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
        
        {/* 2. Kolom Konten Teks */}
        <motion.div
          variants={contentVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // text-base (16px) di mobile agar nyaman dibaca, text-lg di desktop
          className="lg:col-span-2 space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg order-last lg:order-first text-justify md:text-left"
        >
          <p>
            Halo! Saya adalah seorang <span className="text-white font-medium">Fullstack Developer</span> yang bersemangat dalam membangun sistem dan antarmuka pengguna yang menawan dan berkinerja tinggi.
          </p>

          <p>
            Saat ini saya aktif mengembangkan sistem untuk divisi Sales, Aftersales, Marketing, dan Media di PT Kuliner Kreasindo Inovasi, mulai dari kustomisasi modul Odoo, sistem pemesanan online terintegrasi, dashboard divisi, admin panel, hingga landing page produk. Saya percaya bahwa kode yang bersih dan desain yang intuitif adalah kunci untuk menciptakan pengalaman digital yang luar biasa.
          </p>

          <p className="pt-2">
            Untuk daftar lengkap teknologi yang saya gunakan, silakan cek bagian <span className="text-primary font-medium italic underline decoration-primary/30">Keahlian</span> di bawah.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;