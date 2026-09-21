import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 md:p-8">
      {/* Backdrop dengan Blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-darker/95 backdrop-blur-md"
      />
      
      <motion.div 
        layoutId={`card-${project.id}`}
        // max-h ditingkatkan agar konten muat banyak, rounded dikecilkan sedikit di mobile
        className="w-full max-w-5xl bg-dark-card rounded-2xl md:rounded-3xl overflow-hidden relative z-10 shadow-2xl border border-white/10 max-h-[95vh] md:max-h-[90vh] flex flex-col"
      >
        {/* Tombol Close yang lebih besar di mobile */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-5 md:right-5 z-30 p-2.5 bg-black/60 rounded-full text-white hover:bg-primary transition-colors border border-white/10"
        >
          <X size={22} />
        </button>

        {/* Image Slider Section */}
        <motion.div 
          layoutId={`image-container-${project.id}`}
          // h-30vh di mobile agar tidak memakan seluruh layar saat pertama buka
          className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] bg-darker flex-shrink-0"
        >
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentImage}
              src={project.images[currentImage]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {project.images.length > 1 && (
            <>
              {/* Tombol Navigasi Slider (Disembunyikan di layar sangat kecil, pakai dot saja) */}
              <button 
                onClick={prevImage}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-primary transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-primary transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {project.images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-primary w-4' : 'bg-white/40'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Content Section (Scrollable) */}
        <div className="p-5 md:p-8 overflow-y-auto no-scrollbar">
          <motion.p 
            layoutId={`category-${project.id}`}
            className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase mb-1 md:mb-2"
          >
            {project.category}
          </motion.p>
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between mb-6 md:mb-8">
            <motion.h2 
              layoutId={`title-${project.id}`}
              className="text-2xl md:text-4xl font-bold text-white leading-tight"
            >
              {project.title}
            </motion.h2>
            
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-100 border-l-4 border-primary pl-3">Project Overview</h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-lg font-bold mb-4 text-gray-100">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags && project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-darker border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;