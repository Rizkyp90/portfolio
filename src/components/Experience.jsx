import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    type: 'experience',
    icon: <Briefcase size={18} />,
    title: 'Fullstack Developer',
    company: 'PT Kuliner Kreasindo Inovasi',
    date: 'Okt 2025 - Sep 2026',
    description: [
      'Membantu dan membangun sistem untuk mendukung kebutuhan divisi Sales, Aftersales, Marketing, dan Media.',
      'Membuat dan memperbarui modul Odoo sesuai kebutuhan operasional masing-masing divisi.',
      'Mengembangkan sistem pemesanan online yang terintegrasi langsung dengan Odoo.',
      'Merancang dan membangun dashboard divisi untuk mendukung monitoring dan pengambilan keputusan.',
      'Mengembangkan admin panel sebagai management system internal perusahaan.',
      'Membuat landing page produk untuk mendukung kebutuhan pemasaran.',
    ],
  },
  {
    id: 2,
    type: 'experience',
    icon: <Briefcase size={18} />,
    title: 'Social Media Specialist & Graphic Design',
    company: 'PT Gamal Hikmah Pusaka',
    date: 'Des 2025 - Apr 2026',
    description: [
      'Merancang dan memproduksi konten kreatif berupa feed dan reels Instagram, TikTok, dan Facebook untuk meningkatkan brand awareness dan engagement.',
      'Mengelola strategi social media marketing secara komprehensif pada platform Instagram dan Facebook.',
      'Melakukan riset tren dan analisis audiens untuk memastikan relevansi konten dengan target market.',
    ],
  },
  {
    id: 3,
    type: 'experience',
    icon: <Briefcase size={18} />,
    title: 'Praktik Kerja Industri - Website Development',
    company: 'PT Terra Daya Sejahtera',
    date: 'Jun 2025 - Agu 2025',
    description: [
      'Menganalisis dan mengevaluasi website lama untuk mengidentifikasi area yang perlu ditingkatkan.',
      'Mengembangkan website dari nol menggunakan HTML, CSS, dan JavaScript.',
      'Mengimplementasikan fungsi formulir kontak dinamis menggunakan PHP.',
    ],
  },
  {
    id: 4,
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'S1 Rekayasa Perangkat Lunak',
    company: 'Universitas Bina Sarana Informatika',
    date: '2022 - Sekarang',
    description: [
      'Mahasiswa tingkat akhir (semester 8) dengan IPK 3.72/4.00.',
      'Fokus utama pada algoritma, struktur data, dan rekayasa perangkat lunak.',
      'Proyek akhir: pengembangan website toko kue dan pengembangan aplikasi pembayaran listrik berbasis web.',
    ],
  },
  {
    id: 5,
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Rekayasa Perangkat Lunak',
    company: 'SMK Negeri 1 Gunungputri',
    date: '2019 - 2022',
    description: [
      'Konsentrasi Rekayasa Perangkat Lunak dengan nilai akhir 7.9/10.',
    ],
  },
];

const TimelineItem = ({ data, index }) => {
  return (
    <motion.div
      // Di mobile kita hilangkan efek x: -50/50 agar tidak "balapan" dengan layar sempit
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex mb-10 last:mb-0 relative"
    >
      {/* Circle Icon */}
      <div className="flex flex-col items-center mr-3 md:mr-6 z-10">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/50 shadow-[0_0_10px_rgba(100,255,218,0.2)]">
          {data.icon}
        </div>
        {/* Garis Vertikal */}
        {index < timelineData.length - 1 && (
          <div className="h-full w-[1px] bg-gradient-to-b from-primary/50 to-transparent absolute top-8 md:top-10" />
        )}
      </div>

      {/* Konten Detail */}
      <div className="flex-1 p-4 md:p-6 bg-dark-card/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
          <h3 className="text-base md:text-xl font-bold text-white leading-tight">
            {data.title}
          </h3>
          <span className="text-[10px] md:text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit">
            {data.date}
          </span>
        </div>

        <p className="text-sm md:text-md font-medium text-gray-400 mb-3 italic">
          {data.company}
        </p>

        <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
          {data.description.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-white">
      {/* Judul Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-3 text-white">
          <span className="text-primary">03.</span> Experience
        </h2>
        <div className="h-1 w-16 bg-primary" />
      </motion.div>

      {/* Container Timeline */}
      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.id} data={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;