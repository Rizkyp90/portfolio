import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Import Components
import Navbar from './Navbar';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Footer from './Footer';
import InteractiveBubbles from './InteractiveBubbles';
import ScrollProgress from './ScrollProgress';

// Import Data
import { projects } from '../data/projects';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  // Mendapatkan daftar kategori unik secara dinamis
  const categories = useMemo(() => {
    return ['All', ...new Set(projects.map((p) => p.category))];
  }, []);

  // Logika Filter Proyek
  const filteredProjects = useMemo(() => {
    return activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div className="relative bg-darker transition-colors duration-500">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        
        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-5xl font-bold mb-3 text-white">
              <span className="text-primary">04.</span> Portfolio
            </h2>
            <div className="h-1 w-16 md:w-20 bg-primary mb-8 md:mb-12" />

            {/* --- Sistem Tab Category (Susun ke bawah / Wrap) --- */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-10 relative z-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-5 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                    activeTab === cat
                      ? 'border-primary text-black'
                      : 'border-white/10 text-gray-400 hover:text-primary hover:border-primary/50'
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {activeTab === cat && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* --- Grid Projects --- */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard 
                    project={project} 
                    onClick={setSelectedProject} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <Contact />
      </main>

      <Footer />
      
      {/* Background Interactive Bubbles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <InteractiveBubbles />
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;