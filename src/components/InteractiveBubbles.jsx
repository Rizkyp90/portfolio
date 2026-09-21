// src/components/InteractiveBubbles.js (MODIFIKASI)

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Konfigurasi untuk sejumlah bubble (Tetap sama)
const BUBBLE_COUNT = 15;
const BUBBLE_PROPERTIES = Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
  id: i,
  size: Math.random() * 20 + 30, // Ukuran random 30px - 50px
  x: Math.random() * 100, // Posisi X awal random 0% - 100%
  y: Math.random() * 100, // Posisi Y awal random 0% - 100%
  duration: Math.random() * 15 + 15, // Durasi lebih lama: 15s - 30s
  delay: Math.random() * 5, // Penundaan pergerakan random 0s - 5s
}));

// Fungsi bantuan untuk menghasilkan array nilai acak
const generateRandomPath = (maxOffset) => {
    // Menghasilkan 5 titik acak antara -maxOffset dan maxOffset
    return Array.from({ length: 5 }, () => Math.random() * maxOffset * 2 - maxOffset);
};


const Bubble = ({ bubble, handleTap }) => {
    // Tentukan path acak di luar return agar tidak berubah setiap render
    const randomXPath = generateRandomPath(25); // Pergeseran maksimal 25% dari posisi awal
    const randomYPath = generateRandomPath(25); 

  return (
    <motion.div
      className="absolute rounded-full bg-primary/40 border border-primary/50 cursor-pointer"
      style={{
        width: bubble.size,
        height: bubble.size,
        top: `${bubble.y}%`,
        left: `${bubble.x}%`,
        // Efek visual bubble yang lebih baik
        boxShadow: '0 0 10px rgba(100, 255, 218, 0.4)', 
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)', // Kompatibilitas browser
        // Tambahkan transform agar pergerakan X dan Y menggunakan unit 'px' standar.
        transform: 'translate(-50%, -50%)', 
      }}
      
      // Animasi Pergerakan Acak (Random Motion)
      animate={{
        // Menggunakan path acak yang lebih besar untuk pergerakan X dan Y
        x: randomXPath,
        y: randomYPath,
        
        // Efek nafas/berkedip (dibiarkan kecil)
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{
        duration: bubble.duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut", // Gerakan lebih halus
        delay: bubble.delay,
      }}
      
      // Animasi Interaksi (Tap/Click Effect)
      whileTap={{ 
            scale: 1.5, 
            opacity: 1, 
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            transition: { duration: 0.2 } // Transisi tap cepat
        }}
      onTap={handleTap}
    />
  );
};

// ... Komponen InteractiveBubbles (tetap sama) ...
const InteractiveBubbles = () => {
  // State untuk menangani efek sentuhan global jika diperlukan
  const [tapEffect, setTapEffect] = useState(null);

  const handleBubbleTap = (event) => {
    // Tampilkan efek di lokasi sentuhan
    setTapEffect({ 
      x: event.clientX, 
      y: event.clientY 
    });

    // Hapus efek setelah durasi animasi
    setTimeout(() => setTapEffect(null), 500); 
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {BUBBLE_PROPERTIES.map((bubble) => (
        <Bubble 
          key={bubble.id} 
          bubble={bubble} 
          // Passing handleBubbleTap agar bubble interaktif
          handleTap={(e) => { 
            handleBubbleTap(e);
            e.stopPropagation(); // Mencegah klik menyebar ke elemen lain jika ada
          }} 
        />
      ))}

      {/* Efek Visual Global Saat Bubble Disentuh (Opsional) */}
      {tapEffect && (
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-white/50 blur-xl pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            top: tapEffect.y - 40, // Centering y
            left: tapEffect.x - 40, // Centering x
            zIndex: 9999,
          }}
        />
      )}
    </div>
  );
};

export default InteractiveBubbles;