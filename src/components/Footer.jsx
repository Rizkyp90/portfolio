import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  // Ambil tahun saat ini
  const currentYear = new Date().getFullYear();

  // Tautan Sosial Cepat (gunakan data yang sama dengan di Contact)
  const socialLinks = [
    { icon: 'LinkedIn', href: 'https://www.linkedin.com/in/rizkyputra19/' },
    { icon: 'GitHub', href: 'https://github.com/Rizkyp90' },
    { icon: 'Instagram', href: 'https://instagram.com/Rizkyp_0' },
  ];
  
  // Fungsi untuk mendapatkan ikon (karena kita tidak bisa mengimpor semua di sini)
  const getIcon = (name) => {
    switch (name) {
      case 'LinkedIn': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
      case 'GitHub': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-1 4-2.8 4-5.8 0-1.5-.5-3-1.5-4a4.2 4.2 0 0 0-.1-3.2s-1.5-.4-4.8 1.5c-1.4-.4-3-1-4.7-1-.6 0-1.2 0-1.8.2-1.7 0-3.3.6-4.7 1-3.3-1.9-4.8-1.5-4.8-1.5-.2.5-.3 1-.3 1.5 0 .5.1 1.2.5 1.8A7.7 7.7 0 0 0 4.5 9c0 3 1.2 4.7 4 5.8-1 1-1.5 2-1.5 3.5V22"/></svg>;
      case 'Instagram': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M17.5 6.5h.01"/></svg>;
      default: return null;
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="bg-darker border-t border-white/10 py-10 px-6 mt-16 text-gray-400"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Kolom 1: Hak Cipta & Build Info */}
        <p className="text-sm flex items-center space-x-1 text-center md:text-left">
          &copy; {currentYear} RKP. All Rights Reserved
        </p>
        
        {/* Kolom 3: Tautan Cepat Sosial Media */}
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.icon}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;