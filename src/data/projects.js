// Import gambar lokal dari folder assets.
// PENTING: pastikan file "compro-kki.png" benar-benar ada di src/assets/images/
// Kalau nama filenya beda, sesuaikan juga baris import di bawah ini.
import comproKki from '../assets/images/compro-kki.png';
import comproKki2 from '../assets/images/compro-kki-2.png';
import cms from '../assets/images/cms.png';
import cms2 from '../assets/images/cms-2.png';
import waleads from '../assets/images/waleads.png';
import finsync from '../assets/images/finsync.png';
import brand from '../assets/images/product.png';
import poshier from '../assets/images/poshier.png';
import reorderly from '../assets/images/reorderly.png';


export const projects = [
  {
    id: 1,
    title: "Company Profile KKI",
    category: "Company Profile",
    images: [
      comproKki,
      comproKki2,
    ],
    description: "Website company profile resmi PT Kuliner Kreasindo Inovasi yang menampilkan profil perusahaan, produk-produk yang dijual, testimoni pelanggan, artikel, hingga halaman karier (career).",
    tags: ["Svelte", "Tailwind"],
    link: "https://kulinerkreasindoinovasi.com/"
  },
  {
    id: 2,
    title: "CMS Landing Page",
    category: "Admin Panel",
    images: [
      cms,
      cms2
    ],
    description: "Content Management System (CMS) internal untuk mengelola seluruh project perusahaan, mulai dari landing page, e-commerce, hingga POS. Memungkinkan pengaturan konten per section, terutama pada landing page tiap brand maupun company profile perusahaan.",
    tags: ["Svelte", "Tailwind", "Go", "Postgresql"],
    link: "https://admin.kulinerkreasindoinovasi.com/"
  },
  {
    id: 3,
    title: "Waleads Chat Management",
    category: "Web Application",
    images: [
      waleads,
    ],
    description: "Platform manajemen chat untuk kebutuhan tim sales dalam memantau percakapan dengan prospek, dilengkapi fitur scraping chat serta pembuatan laporan otomatis dari seluruh isi chat sales.",
    tags: ["Svelte", "Tailwind", "Go", "Postgresql"],
    link: "https://waleads.kulinerkreasindoinovasi.com"
  },
  {
    id: 4,
    title: "Product Landing Page",
    category: "Landing Page",
    images: [
      brand,
    ],
    description: "Landing page untuk menampilkan profil dan informasi produk dari setiap brand perusahaan.",
    tags: ["Svelte", "Tailwind"],
    link: "https://potachick.com"
  },
  {
    id: 5,
    title: "Finsync Financial Synchronization",
    category: "Web Application ",
    images: [
      finsync,
    ],
    description: "Platform pencatatan keuangan pribadi maupun bersama pasangan (partner) secara real-time, lengkap dengan dashboard interaktif dan integrasi pencatatan transaksi langsung melalui WhatsApp.",
    tags: ["Next.js", "Tailwind", "Mysql", "Express.js"],
    link: "https://finsync.wewonderdigital.com/"
  },
  {
    id: 6,
    title: "Poshier",
    category: "Mobile Application",
    images: [
      poshier,
    ],
    description: "Aplikasi Point of Sale (POS) untuk mitra perusahaan yang sudah dilengkapi menu dari brand mitra masing-masing, sehingga mitra tinggal langsung menggunakannya tanpa perlu setup manual dari awal.",
    tags: ["Flutter", "Go", "Postgresql"],
    link: "https://poshier.kulinerkreasindoinovasi.com"
  },
  {
    id: 7,
    title: "Reorderly",
    category: "Web Application",
    images: [
      reorderly,
    ],
    description: "Platform pemesanan ulang (reorder) bahan baku dari mitra ke perusahaan, yang secara otomatis membuat sale order langsung ke Odoo setelah pesanan dikonfirmasi.",
    tags: ["svelte", "Tailwind"],
    link: "https://reorderly.kulinerkreasindoinovasi.com/"
  }
];