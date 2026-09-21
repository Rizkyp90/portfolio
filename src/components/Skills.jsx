import React from 'react';
import { motion } from 'framer-motion';
import InteractiveBubbles from './InteractiveBubbles';

// Impor Ikon
import {
  SiReact, SiFlutter, SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer,
  SiPostgresql, SiSvelte, SiLaravel, SiExpress,
  SiHtml5, SiJavascript, SiPhp, SiGo, SiKotlin,
  SiCodeigniter, SiOdoo, SiMysql, SiSqlite, SiFigma, SiCanva, SiWordpress,
} from 'react-icons/si';
import { FaNodeJs, FaGithub, FaCss3Alt } from 'react-icons/fa';

const skillsData = [
  // Bahasa Pemrograman
  { name: 'HTML5', level: 'Medium', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', level: 'Medium', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', level: 'Medium', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'PHP', level: 'Medium', icon: SiPhp, color: 'text-indigo-400' },
  { name: 'Golang', level: 'Medium', icon: SiGo, color: 'text-cyan-400' },
  { name: 'Flutter', level: 'Medium', icon: SiFlutter, color: 'text-blue-400' },
  { name: 'Kotlin', level: 'Medium', icon: SiKotlin, color: 'text-purple-400' },
  // Framework
  { name: 'CodeIgniter', level: 'Medium', icon: SiCodeigniter, color: 'text-red-500' },
  { name: 'Svelte', level: 'Medium', icon: SiSvelte, color: 'text-orange-500' },
  { name: 'React', level: 'Basic', icon: SiReact, color: 'text-blue-400' },
  { name: 'Laravel', level: 'Basic', icon: SiLaravel, color: 'text-red-500' },
  { name: 'Node.js', level: 'Medium', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express', level: 'Medium', icon: SiExpress, color: 'text-gray-500' },
  { name: 'Tailwind CSS', level: 'Medium', icon: SiTailwindcss, color: 'text-cyan-400' },
  // Platform / ERP
  { name: 'Odoo', level: 'Basic', icon: SiOdoo, color: 'text-purple-500' },
  // Database
  { name: 'MySQL', level: 'Medium', icon: SiMysql, color: 'text-sky-500' },
  { name: 'SQLite', level: 'Medium', icon: SiSqlite, color: 'text-blue-300' },
  { name: 'PostgreSQL', level: 'Medium', icon: SiPostgresql, color: 'text-sky-600' },
  // Desain Web
  { name: 'Figma', level: 'Medium', icon: SiFigma, color: 'text-pink-400' },
  { name: 'Canva', level: 'Medium', icon: SiCanva, color: 'text-teal-400' },
  // CMS
  { name: 'WordPress', level: 'Basic', icon: SiWordpress, color: 'text-blue-600' },
  // Tools
  { name: 'Git/GitHub', level: 'Medium', icon: FaGithub, color: 'text-gray-400' },
];

const levelBadgeStyles = {
  Expert: 'bg-primary/20 text-primary',
  Advanced: 'bg-indigo-500/20 text-indigo-300',
  Medium: 'bg-yellow-500/20 text-yellow-300',
  Basic: 'bg-gray-500/20 text-gray-300',
};

const SkillCard = ({ skill, index }) => {
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // Penyesuaian padding: p-4 di mobile, p-6 di desktop
      className="p-4 md:p-6 bg-dark-card border border-primary/20 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 relative"
    >
      <div className="flex justify-between items-start mb-2 md:mb-4">
        {/* Ukuran ikon disesuaikan: text-3xl di mobile, text-4xl di desktop */}
        <div className={`text-3xl md:text-4xl ${skill.color}`}>
          {IconComponent && <IconComponent />}
        </div>
        
        {/* Tag level lebih kecil di mobile */}
        <span className={`text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full whitespace-nowrap ${
          levelBadgeStyles[skill.level] || levelBadgeStyles.Medium
        }`}>
          {skill.level}
        </span>
      </div>
      
      {/* Font size judul dikecilkan di mobile */}
      <h3 className="text-base md:text-xl font-bold text-white mt-2 md:mt-4 mb-1">{skill.name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-white relative overflow-hidden">
      <InteractiveBubbles />

      {/* Judul Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-16 relative z-10" 
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
          <span className="text-primary">02.</span> My Skills
        </h2>
        <div className="h-1 w-16 md:w-20 bg-primary" />
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl">
          Teknologi dan alat yang saya kuasai dan gunakan setiap hari.
        </p>
      </motion.div>

      {/* Grid Keahlian: Gap dikecilkan di mobile agar lebih rapat */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;