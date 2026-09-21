// src/components/Contact.js (Optimasi Mobile & Instagram)

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-white relative overflow-hidden">
      
      {/* Judul Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-primary">05.</span> Get In Touch
        </h2>
        <div className="h-1 w-16 md:w-20 bg-primary mb-6" />
        <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
          Siap berkolaborasi dalam proyek Anda berikutnya? Kirimkan pesan atau temukan saya di platform lain.
        </p>
      </motion.div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        
        {/* Kolom 1: Formulir Kontak */}
        <motion.div
          variants={itemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-dark-card p-6 md:p-10 rounded-2xl shadow-2xl border border-white/5 order-last lg:order-first"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
          
          <form name="contact" method="POST" data-netlify="true" className="space-y-5 md:space-y-6">
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3.5 bg-gray-900 border border-gray-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-white outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3.5 bg-gray-900 border border-gray-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-white outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3.5 bg-gray-900 border border-gray-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-white outline-none transition-all resize-none placeholder:text-gray-600"
              />
            </div>

            <button 
              type="submit" 
              className="w-full px-6 py-4 text-base md:text-lg font-bold rounded-xl text-black bg-primary hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Kolom 2: Detail Kontak & CTA */}
        <motion.div
          variants={itemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:pt-4 space-y-8 md:space-y-12"
        >
          
          {/* CTA Box */}
          <div className="p-6 md:p-8 bg-primary/5 rounded-2xl border border-primary/20 relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail size={80} className="text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Mari Wujudkan Ide Anda!
            </h3>
            <p className="text-primary/80 font-medium text-base md:text-lg leading-relaxed">
              Saya selalu terbuka untuk peluang baru, diskusi teknis, atau sekadar menyapa.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 px-2">
            <h4 className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">Digital Footprint</h4>
            
            <ContactDetail 
              icon={<Mail size={22} />} 
              label="Email" 
              value="kputra479@gmail.com" 
              href="mailto:kputra479@gmail.com"
            />
            <ContactDetail 
              icon={<MapPin size={22} />} 
              label="Location" 
              value="Bogor, Indonesia" 
            />
            
            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/5">
              <SocialLink 
                icon={<Instagram size={24} />} 
                href="https://instagram.com/Rizkyp_0" 
                label="Instagram"
              />
              <SocialLink 
                icon={<Linkedin size={24} />} 
                href="https://www.linkedin.com/in/rizkyputra19/" 
                label="LinkedIn"
              />
              <SocialLink 
                icon={<Github size={24} />} 
                href="https://github.com/Rizkyp90" 
                label="GitHub"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactDetail = ({ icon, label, value, href }) => (
    <div className="flex items-start space-x-4 group">
        <div className="text-primary bg-primary/10 p-2.5 rounded-lg group-hover:bg-primary group-hover:text-black transition-all duration-300">
            {icon}
        </div>
        <div>
            <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
            {href ? (
                <a 
                    href={href} 
                    className="text-white text-base md:text-lg font-semibold hover:text-primary transition-colors inline-block"
                >
                    {value}
                </a>
            ) : (
                <p className="text-white text-base md:text-lg font-semibold">{value}</p>
            )}
        </div>
    </div>
);

const SocialLink = ({ icon, href, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-400 hover:text-primary transition-all duration-300"
    >
        {icon}
    </motion.a>
);

export default Contact;