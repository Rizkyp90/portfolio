import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project)}
      // Penyesuaian tinggi: 300px di mobile, 400px di desktop
      className="group relative h-[300px] md:h-[400px] w-full cursor-pointer rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-colors shadow-xl"
      whileHover={{ y: -5 }}
    >
      <motion.div 
        layoutId={`image-container-${project.id}`}
        className="h-full w-full"
      >
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
      </motion.div>
      
      {/* Overlay Gradient yang lebih halus di mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      
      {/* Padding disesuaikan: p-5 di mobile, p-8 di desktop */}
      <div className="absolute bottom-0 left-0 w-full p-5 md:p-8">
        <motion.p 
          layoutId={`category-${project.id}`}
          // Ukuran teks kategori lebih kecil di mobile
          className="text-primary text-[10px] md:text-sm font-bold tracking-wider uppercase mb-1 md:mb-2"
        >
          {project.category}
        </motion.p>
        
        <motion.h3 
          layoutId={`title-${project.id}`}
          // Ukuran judul: xl di mobile, 2xl di desktop
          className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight"
        >
          {project.title}
        </motion.h3>
        
        {/* Indikator Garis Bawah */}
        <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;