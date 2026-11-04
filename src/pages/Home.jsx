import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";

// PREFIJO BASE DE IMAGEKIT
const IMAGEKIT_BASE = "https://ik.imagekit.io/f10c3to17/home%20photos/Fotos%20para%20Usar%20p%C3%A1gina%20principal";

// DICCIONARIO BILINGÜE DE ALTO IMPACTO COMERCIAL (ES / EN)
const COPY = {
  es: {
    navVideos: "Videos",
    navPhotos: "Fotografía",
    navAbout: "Sobre Mí",
    navAboutMobile: "Sobre Mí & Credenciales",
    navContact: "Contacto",
    heroBadge: "Senior Video Editor & Motion Designer • USA & Global (Inglés C2)",
    heroTitle: "Edición de alta retención, Motion Graphics y color cinematográfico.",
    heroSubtitle: "Transformo contenido crudo en activos visuales que retienen la audiencia y escalan marcas. Especializado en YouTube Long-Form, Short-Form dinámico y dirección visual para creadores y agencias.",
    ctaVideos: "Ver Portafolio de Video",
    ctaContact: "Agendar Llamada / Contacto",
    ctaPhotos: "Fotografía",
    credsCollab: "Clientes & Agencias:",
    credsPhoto: "Publicado en:",
    workLabel: "Casos de Estudio & Postproducción",
    workTitle: "Edición de Video & Motion Design",
    photoLabel: "Frames & Stills",
    photoTitle: "Fotografía & Dirección de Color",
    filterAll: "Todas",
    filterEditorial: "Editorial",
    filterCommercial: "Comercial",
    filterPortrait: "Retrato",
    aboutLabel: "Perfil Profesional",
    aboutTitle: "Sobre Mí",
    aboutBadge: "Disponible para retainers mensuales y proyectos",
    aboutP1: "Editor de video, Motion Designer y director de fotografía enfocado en retención de audiencia y narrativa visual de alto impacto. Integro ritmo de montaje estratégico, gráficos animados en After Effects, diseño sonoro inmersivo y gradación de color avanzada en DaVinci Resolve para transformar cada pieza en un motor de atención.",
    aboutP2_1: "Actualmente colaboro de forma remota con agencias y marcas internacionales como ",
    aboutP2_2: " y ",
    aboutP2_3: ", liderando la postproducción de canales de YouTube y campañas de redes sociales para mercados en ",
    aboutP2_4: " y ",
    aboutP2_5: ", optimizadas para maximizar el tiempo de visualización (Watch Time) y la conversión.",
    specTitle: "Especialidad",
    specValue: "Edición de Retención, Motion Graphics & Color",
    toolsTitle: "Stack Técnico",
    reachTitle: "Alcance & Idiomas",
    reachValue: "Remoto (USA • CR • Global)",
    reachLang: "Bilingual: Inglés (C2) & Español",
    closeEsc: "Cerrar (Esc)"
  },
  en: {
    navVideos: "Videos",
    navPhotos: "Photography",
    navAbout: "About",
    navAboutMobile: "About & Credentials",
    navContact: "Book a Call",
    heroBadge: "Senior Video Editor & Motion Designer • US & Global (C2 English)",
    heroTitle: "High-retention video editing, Motion Graphics & cinematic color.",
    heroSubtitle: "I turn raw footage into high-performing visual assets that hold attention and scale brands. Specialized in YouTube Long-Form, dynamic Short-Form, and visual direction for creators and agencies.",
    ctaVideos: "Watch Video Portfolio",
    ctaContact: "Work With Me",
    ctaPhotos: "Photography",
    credsCollab: "Clients & Agencies:",
    credsPhoto: "Featured in:",
    workLabel: "Case Studies & Post-Production",
    workTitle: "Video Editing & Motion Design",
    photoLabel: "Frames & Stills",
    photoTitle: "Selected Photography",
    filterAll: "All",
    filterEditorial: "Editorial",
    filterCommercial: "Commercial",
    filterPortrait: "Portrait",
    aboutLabel: "Professional Profile",
    aboutTitle: "About Me",
    aboutBadge: "Available for monthly retainers & projects",
    aboutP1: "Video Editor, Motion Designer, and Cinematographer focused on audience retention and high-impact visual storytelling. I combine strategic pacing, custom After Effects motion graphics, immersive sound design, and advanced DaVinci Resolve color grading to turn every video into a growth asset.",
    aboutP2_1: "I currently partner remotely with international agencies and brands like ",
    aboutP2_2: " and ",
    aboutP2_3: ", leading post-production for YouTube channels and social media campaigns across ",
    aboutP2_4: " and the ",
    aboutP2_5: ", engineered for sustained watch time and client conversion.",
    specTitle: "Core Focus",
    specValue: "Retention Editing, Motion Graphics & Color",
    toolsTitle: "Tech Stack",
    reachTitle: "Reach & Languages",
    reachValue: "Remote (US • CR • Global)",
    reachLang: "Bilingual: English (C2) & Spanish",
    closeEsc: "Close (Esc)"
  }
};

export default function Home() {
  // Estado para la barra de navegación inteligente
  const [navVisible, setNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Idioma
  const [lang, setLang] = useState("es");
  const t = COPY[lang];

  // Filtros y modales
  const [filter, setFilter] = useState("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Referencias para observador y carrusel
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const photoRef = useRef(null);
  const aboutRef = useRef(null);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);

  // Lógica de scroll para mostrar/ocultar el navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 80 && currentScrollY > lastScrollY.current) {
        setNavVisible(false);
        setMobileMenuOpen(false);
      } else {
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollVideos = (direction) => {
    if (sliderRef.current) {
      let scrollAmount = 380;
      if (window.innerWidth < 640) scrollAmount = 280;
      if (window.innerWidth >= 2000) scrollAmount = 500;

      sliderRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // IntersectionObserver para entradas suaves en scroll
  useEffect(() => {
    const sections = [heroRef.current, workRef.current, photoRef.current, aboutRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // 1. VIDEOS DESTACADOS (CON EL VIDEO DE 11K VISTAS EN EL PRIMER PUESTO)
  const featuredVideos = [
    {
      id: "dunlop-yt-en",
      title: lang === "es" ? "Dr. Alex Dunlop — YouTube Long-Form (Salud)" : "Dr. Alex Dunlop — YouTube Long-Form (Health)",
      category: lang === "es" ? "YouTube & Retención" : "YouTube & Retention",
      tools: "DaVinci Resolve • Motion Graphics • Sound Design",
      badge: "11K+ Views", // Insignia de prueba social
      thumbnail: "/media/videos/EN youtube Video.webp",
      fallbackThumb: "/videos/EN youtube Video.gif", // Corregido: sin prefijo "public"
      videoUrl: "https://www.youtube.com/embed/lLs56mFwN8Y?autoplay=1",
      link: "https://youtu.be/lLs56mFwN8Y",
      vertical: false
    },
    {
      id: 18,
      title: lang === "es" ? "5 Mitos Sobre la Ciática Que Escucho Cada Semana" : "5 Sciatica Myths I Hear Every Week",
      category: lang === "es" ? "YouTube & Retención" : "YouTube & Retention",
      tools: "DaVinci Resolve • Motion Graphics • Sound Design",
      thumbnail: "/media/videos/alex-dunlop.webp",
      fallbackThumb: "/videos/Alex Dunlop - YOUTUBE GIF.gif",
      videoUrl: "https://www.youtube.com/embed/e6bZwc5qtlk?autoplay=1",
      link: "https://youtu.be/e6bZwc5qtlk",
      vertical: false
    },
    {
      id: 2,
      title: lang === "es" ? "Univ. Castro Carazo — Campaña & Motion" : "Castro Carazo Univ. — Dynamic Captions & Motion",
      category: lang === "es" ? "Educativo & Formato Largo" : "Educational & Long-Form",
      tools: "DaVinci Resolve • After Effects • Subtítulos Animados",
      thumbnail: "/media/videos/castro-carazo.webp",
      fallbackThumb: "/videos/Castro Carazo.gif",
      videoUrl: "https://www.youtube.com/embed/7Thwdtxv0b0?autoplay=1",
      link: "https://youtu.be/7Thwdtxv0b0",
      vertical: false
    },
    {
      id: 20,
      title: lang === "es" ? "Dr. Alex Dunlop — Reels de Alta Retención" : "Dr. Alex Dunlop — High-Retention Reels",
      category: "Short-Form Vertical",
      tools: "DaVinci Resolve • Visual Hooks • Ritmo Narrativo",
      thumbnail: "/media/videos/es-sciatica.webp",
      fallbackThumb: "/videos/ES Sciatica wk55 gif.gif",
      videoUrl: null,
      link: "https://www.instagram.com/dralexdunlop.es/",
      vertical: true
    },
    {
      id: 1,
      title: "Cinematography & Color Grading Showreel",
      category: lang === "es" ? "Cinematografía & Color" : "Cinematography & Color",
      tools: "DaVinci Resolve • Premiere Pro • Color Grading",
      thumbnail: "/media/videos/cinematography-reel.webp",
      fallbackThumb: "/videos/Cinematography reel.gif",
      videoUrl: "https://www.youtube.com/embed/60rsebZLSEk?autoplay=1",
      link: "https://youtu.be/60rsebZLSEk",
      vertical: false
    },
    {
      id: 5,
      title: "Digital Training Hub — Brand Video",
      category: lang === "es" ? "Comercial & Long-Form" : "Commercial & Long-Form",
      tools: "DaVinci Resolve • After Effects • Motion Design",
      thumbnail: "/media/videos/dth.webp",
      fallbackThumb: "/videos/DTH.gif",
      videoUrl: "https://www.youtube.com/embed/Y-OpbMl-DyQ?autoplay=1",
      link: "https://youtu.be/Y-OpbMl-DyQ",
      vertical: false
    },
    {
      id: 15,
      title: "Style Evolves — VFX & Motion",
      category: "VFX & Motion Graphics",
      tools: "After Effects • DaVinci Resolve • Sound FX",
      thumbnail: "/media/videos/style-evolves.webp",
      fallbackThumb: "/videos/Style Evolves.gif",
      videoUrl: "https://www.youtube.com/embed/zovxASpZiDo?autoplay=1",
      link: "https://youtu.be/zovxASpZiDo",
      vertical: false
    },
    {
      id: 3,
      title: "BYL — Break Your Limits",
      category: lang === "es" ? "Comercial & Short-Form" : "Commercial & Short-Form",
      tools: "DaVinci Resolve • Sound Design • Color Grading",
      thumbnail: "/media/videos/break-your-limits.webp",
      fallbackThumb: "/videos/break your limits.gif",
      videoUrl: "https://www.youtube.com/embed/mw6cvqMss9U?autoplay=1",
      link: "https://youtu.be/mw6cvqMss9U",
      vertical: false
    },
    {
      id: 4,
      title: "Challenge — High-Paced Edit",
      category: lang === "es" ? "Comercial & Short-Form" : "Commercial & Short-Form",
      tools: "DaVinci Resolve • Corte Rítmico • Sound FX",
      thumbnail: "/media/videos/challenge.webp",
      fallbackThumb: "/videos/Challenge GIF 2.gif",
      videoUrl: "https://www.youtube.com/embed/yzVMgoir7tU?autoplay=1",
      link: "https://youtu.be/yzVMgoir7tU",
      vertical: false
    },
    {
      id: 7,
      title: "JYCH — Dynamic Commercial",
      category: lang === "es" ? "Comercial & Motion" : "Commercial & Motion",
      tools: "DaVinci Resolve • After Effects • Color",
      thumbnail: "/media/videos/jych.webp",
      fallbackThumb: "/videos/JYCH.gif",
      videoUrl: "https://www.youtube.com/embed/l2FblPLEGB0?autoplay=1",
      link: "https://youtu.be/l2FblPLEGB0",
      vertical: false
    },
    {
      id: 10,
      title: "Lions Club — Brand Storytelling",
      category: lang === "es" ? "Comercial & Short-Form" : "Commercial & Short-Form",
      tools: "DaVinci Resolve • After Effects • Storytelling",
      thumbnail: "/media/videos/lions-club.webp",
      fallbackThumb: "/videos/Lions Club.gif",
      videoUrl: "https://www.youtube.com/embed/hA8TLKag1hw?autoplay=1",
      link: "https://youtu.be/hA8TLKag1hw",
      vertical: false
    },
    {
      id: 11,
      title: "La Casa de las Sillas — Dirección & Edición",
      category: lang === "es" ? "Comercial & Producto" : "Commercial & Product",
      tools: "DaVinci Resolve • Dirección Audiovisual • Color",
      thumbnail: "/media/videos/la-casa-de-las-sillas.webp",
      fallbackThumb: "/videos/LA CASA DE LAS SILLAS.gif",
      videoUrl: "https://www.youtube.com/embed/ihJWXDvcl4o?autoplay=1",
      link: "https://youtu.be/ihJWXDvcl4o",
      vertical: false
    },
    {
      id: 13,
      title: "Posh — Fashion & Motion Edit",
      category: lang === "es" ? "Comercial & Short-Form" : "Commercial & Short-Form",
      tools: "DaVinci Resolve • After Effects • Ritmo Visual",
      thumbnail: "/media/videos/posh.webp",
      fallbackThumb: "/videos/Posh.gif",
      videoUrl: "https://www.youtube.com/embed/YPx42HvE8oA?autoplay=1",
      link: "https://youtu.be/YPx42HvE8oA",
      vertical: false
    },
    {
      id: 17,
      title: "Villa Edit — Real Estate & Lifestyle",
      category: lang === "es" ? "Real Estate & Comercial" : "Real Estate & Commercial",
      tools: "DaVinci Resolve • After Effects • Speed Ramping",
      thumbnail: "/media/videos/villa-edit.webp",
      fallbackThumb: "/videos/VILLA GIF.gif",
      videoUrl: "https://www.youtube.com/embed/gcLXkLwXDHo?autoplay=1",
      link: "https://youtu.be/gcLXkLwXDHo",
      vertical: false
    },
    {
      id: 8,
      title: "Kajiri — Social Media Vertical",
      category: "Short-Form Vertical",
      tools: "DaVinci Resolve • Retención • Color",
      thumbnail: "/media/videos/kajiri.webp",
      fallbackThumb: "/videos/Kajiri.gif",
      videoUrl: "https://www.youtube.com/embed/Yn1EKm9CG9k?autoplay=1",
      link: "https://youtu.be/Yn1EKm9CG9k",
      vertical: true
    },
    {
      id: 9,
      title: "Koi + — AI Visuals & Edit",
      category: lang === "es" ? "IA & Formato Corto" : "AI & Short-Form",
      tools: "DaVinci Resolve • AI Workflow • Sound Design",
      thumbnail: "/media/videos/koi.webp",
      fallbackThumb: "/videos/KOI +.gif",
      videoUrl: "https://www.youtube.com/embed/ah9t8jODlsY?autoplay=1",
      link: "https://youtu.be/ah9t8jODlsY",
      vertical: false
    },
    {
      id: 12,
      title: "Metanoia — Narrative Short Film",
      category: lang === "es" ? "Cinematografía & Narrativa" : "Cinematography & Narrative",
      tools: "DaVinci Resolve • Premiere Pro • Color Grading",
      thumbnail: "/media/videos/metanoia.webp",
      fallbackThumb: "/videos/Metanoia Gif.gif",
      videoUrl: "https://www.youtube.com/embed/UHYV2J1aJ7c?autoplay=1",
      link: "https://youtu.be/UHYV2J1aJ7c",
      vertical: false
    },
    {
      id: 6,
      title: "Little Things — Visual Storytelling",
      category: "Cinematografía",
      tools: "DaVinci Resolve • Narrative Pacing • Color",
      thumbnail: "/media/videos/little-things.webp",
      fallbackThumb: "/videos/Gif - Little Things.gif",
      videoUrl: "https://www.youtube.com/embed/OsGkYNW8dHc?autoplay=1",
      link: "https://youtu.be/OsGkYNW8dHc",
      vertical: false
    },
    {
      id: 14,
      title: "Palacio del Blumer — Spot Comercial",
      category: lang === "es" ? "Comercial & Short-Form" : "Commercial & Short-Form",
      tools: "DaVinci Resolve • Edición Comercial",
      thumbnail: "/media/videos/palacio-del-blumer.webp",
      fallbackThumb: "/videos/Rians Palacio del Blumer.gif",
      videoUrl: "https://www.youtube.com/embed/W6sKTBekthQ?autoplay=1",
      link: "https://youtu.be/W6sKTBekthQ",
      vertical: false
    },
    {
      id: 16,
      title: "TEC — Dynamic Cut",
      category: "Formato Corto",
      tools: "DaVinci Resolve • Ritmo & Sonido",
      thumbnail: "/media/videos/tec.webp",
      fallbackThumb: "/videos/TEC.gif",
      videoUrl: "https://www.youtube.com/embed/acYCs7E2328?autoplay=1",
      link: "https://youtu.be/acYCs7E2328",
      vertical: false
    }
  ];

  // 2. FOTOGRAFÍAS
  const rawPhotos = [
    { id: 1, title: "Virino — Malvie Magazine", category: "editorial", file: "04_This_is_VIRINO_image3_MALVIE_Magazine-140.jpg" },
    { id: 2, title: "Dulces Caprichosos", category: "commercial", file: "_MG_1117.jpg" },
    { id: 3, title: "Virino II — Malvie Magazine", category: "editorial", file: "04_This_is_VIRINO_image7_MALVIE_Magazine-142.jpg" },
    { id: 4, title: "Mafer", category: "portrait", file: "_MG_5872.jpg" },
    { id: 5, title: "Glerifer", category: "portrait", file: "_MG_6446.jpg" },
    { id: 6, title: "Aless I", category: "portrait", file: "IMG_0462.jpg" },
    { id: 7, title: "Aless II", category: "portrait", file: "IMG_0378.jpg" },
    { id: 8, title: "Dulces Caprichosos II", category: "commercial", file: "_MG_1104.jpg" },
    { id: 9, title: "Victor & Ana", category: "portrait", file: "_MG_2402.jpg" },
    { id: 10, title: "Marcos", category: "portrait", file: "IMG_9661.jpg" },
    { id: 11, title: "Ana", category: "commercial", file: "_MG_0232.jpg" },
    { id: 12, title: "Dary", category: "portrait", file: "_MG_2615.jpg" },
    { id: 13, title: "Glerifer II", category: "portrait", file: "_MG_2592%203.jpg" },
    { id: 14, title: "Metro — Goji Magazine", category: "editorial", file: "Goji%2082V1_15.jpg" },
    { id: 15, title: "Mafer II", category: "portrait", file: "_MG_0793.jpg" },
    { id: 16, title: "Sun Model — Laura", category: "portrait", file: "portada.jpg" },
    { id: 17, title: "Cascanueces", category: "commercial", file: "_MG_5480.jpg" },
    { id: 18, title: "Ana II", category: "commercial", file: "_MG_0243.jpg" },
    { id: 19, title: "Study — Looker Magazine", category: "editorial", file: "AUGUST__LOOKER_Glamour_Issue31.jpg" },
    { id: 20, title: "Sun Model — Laura II", category: "portrait", file: "_MG_0687.jpg" },
    { id: 21, title: "Bons", category: "commercial", file: "IMG_6651.jpg" },
    { id: 22, title: "Mid 2000s — Artells Magazine", category: "editorial", file: "2041-12%20copy.jpg" },
    { id: 23, title: "Neon Demons — Quadro Magazine", category: "editorial", file: "238-29%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg" },
    { id: 24, title: "Neon Demons II — Quadro Magazine", category: "editorial", file: "238-26%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg" },
    { id: 25, title: "Mafer — LeDésir Magazine", category: "editorial", file: "05_Mafer.jpg" }
  ];

  const photos = rawPhotos.map((p) => ({
    ...p,
    thumbUrl: `${IMAGEKIT_BASE}/${p.file}?tr=w-700,q-75,f-auto`,
    fullUrl: `${IMAGEKIT_BASE}/${p.file}?tr=w-1800,q-80,f-auto`
  }));

  const filteredPhotos = filter === "all" ? photos : photos.filter((p) => p.category === filter);

  const showPrevPhoto = (e) => {
    e?.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const showNextPhoto = (e) => {
    e?.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
        setActiveVideo(null);
      }
      if (selectedPhotoIndex !== null) {
        if (e.key === "ArrowLeft") showPrevPhoto();
        if (e.key === "ArrowRight") showNextPhoto();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <div className="min-h-screen bg-[#141212] text-[#eacdc2] antialiased selection:bg-[#eacdc2] selection:text-[#141212] overflow-x-hidden">
      <style>{`
        .scroll-section {
          opacity: 0;
          transform: translateY(24px);
          filter: blur(6px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform, filter;
        }
        .scroll-section.section-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-section {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* CABECERA DINÁMICA FLOTANTE (SMART NAVBAR) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#141212]/95 backdrop-blur-md border-b border-[#eacdc2]/15 shadow-lg shadow-black/40"
            : "bg-[#141212]/80 backdrop-blur-sm border-b border-[#eacdc2]/10"
        }`}
      >
        <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1700px] mx-auto px-4 sm:px-6 2xl:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-h-[44px]">
            <img 
              src="/logo.png" 
              alt="Logo Juan Macia" 
              className="h-8 sm:h-9 2xl:h-11 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="text-base sm:text-xl 2xl:text-2xl font-bold tracking-tight text-[#eacdc2] uppercase">
              Juan Macia
            </span>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden sm:flex items-center gap-6 2xl:gap-10 text-sm 2xl:text-base font-medium text-[#eacdc2]/70">
            <a href="#work" className="hover:text-[#eacdc2] transition min-h-[44px] flex items-center">{t.navVideos}</a>
            <a href="#photography" className="hover:text-[#eacdc2] transition min-h-[44px] flex items-center">{t.navPhotos}</a>
            <a href="#about" className="hover:text-[#eacdc2] transition min-h-[44px] flex items-center">{t.navAbout}</a>
            
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label="Cambiar idioma / Switch language"
              className="px-3 py-1.5 rounded-full border border-[#eacdc2]/25 bg-[#eacdc2]/5 hover:border-[#eacdc2] text-xs font-mono text-[#eacdc2] transition min-h-[38px] flex items-center gap-1.5"
            >
              <span className={lang === "en" ? "font-bold text-white" : "opacity-50"}>EN</span>
              <span className="opacity-30">/</span>
              <span className={lang === "es" ? "font-bold text-white" : "opacity-50"}>ES</span>
            </button>

            <a 
              href="#contacto" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#eacdc2] text-[#141212] text-xs 2xl:text-sm font-bold hover:bg-white transition min-h-[44px]"
            >
              {t.navContact}
            </a>
          </nav>

          {/* Botón Menú Móvil */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="px-2.5 py-1.5 rounded-full border border-[#eacdc2]/25 bg-[#eacdc2]/5 text-xs font-mono text-[#eacdc2] min-h-[40px]"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a 
              href="#contacto" 
              className="px-3 py-1.5 rounded-full bg-[#eacdc2] text-[#141212] text-xs font-bold min-h-[40px] flex items-center"
            >
              {t.navContact}
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú de navegación"
              className="p-2.5 rounded-lg border border-[#eacdc2]/20 text-[#eacdc2] min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-[#eacdc2]/15 bg-[#141212] px-6 py-4 flex flex-col gap-3 font-mono text-sm">
            <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 border-b border-[#eacdc2]/10 min-h-[44px] flex items-center"
            >
              {t.navVideos} ({featuredVideos.length})
            </a>
            <a 
              href="#photography" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 border-b border-[#eacdc2]/10 min-h-[44px] flex items-center"
            >
              {t.navPhotos} ({photos.length})
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 min-h-[44px] flex items-center"
            >
              {t.navAboutMobile}
            </a>
          </div>
        )}
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1700px] mx-auto px-4 sm:px-6 2xl:px-10 pt-24 sm:pt-32 pb-20 sm:pb-28 space-y-20 sm:space-y-28 2xl:space-y-36">
        {/* HERO */}
        <section 
          id="hero" 
          ref={heroRef}
          className="scroll-section scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pt-2 sm:pt-4"
        >
          <div className="order-2 md:order-1 md:col-span-8 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eacdc2]/10 border border-[#eacdc2]/20 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.heroBadge}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-extrabold text-[#eacdc2] tracking-tight leading-[1.12]">
              {t.heroTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#eacdc2]/80 max-w-2xl font-light leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#work" 
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-[#eacdc2] text-[#141212] font-bold text-sm hover:bg-white transition min-h-[44px] flex items-center justify-center"
              >
                {t.ctaVideos}
              </a>
              <a 
                href="#contacto" 
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border border-[#eacdc2]/35 bg-[#eacdc2]/10 text-[#eacdc2] font-semibold text-sm hover:border-[#eacdc2] hover:bg-[#eacdc2]/20 transition min-h-[44px] flex items-center justify-center"
              >
                {t.ctaContact}
              </a>
              <a 
                href="#photography" 
                className="w-full sm:w-auto text-center px-4 py-3 rounded-lg text-[#eacdc2]/70 font-mono text-xs hover:text-[#eacdc2] transition min-h-[44px] flex items-center justify-center"
              >
                {t.ctaPhotos} ({photos.length}) →
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-4 flex justify-center md:justify-end">
            <div className="relative p-2 sm:p-3 rounded-2xl border border-[#eacdc2]/20 bg-[#eacdc2]/5 backdrop-blur-sm w-40 sm:w-60 md:w-full max-w-[280px]">
              <img 
                src="/media/juan-macia.webp" 
                alt="Juan Macia — Video Editor & Motion Designer" 
                loading="eager"
                onError={(e) => { e.currentTarget.src = "/Juan profile.jpg"; }}
                className="w-full h-auto aspect-square md:aspect-auto object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* CREDENCIALES */}
        <div className="border-y border-[#eacdc2]/15 py-6 font-mono text-xs text-[#eacdc2]/70 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#eacdc2]/40 uppercase tracking-wider">{t.credsCollab}</span>
            <span className="text-[#eacdc2] font-medium">GGG Marketing (US) • LOUD Digitals (CR) • Dr. Alex Dunlop • Univ. Castro Carazo</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#eacdc2]/40 uppercase tracking-wider">{t.credsPhoto}</span>
            <span className="text-[#eacdc2] font-medium">Malvie • Goji • Looker • Artells • Quadro • LeDésir</span>
          </div>
        </div>

        {/* 1. SECCIÓN VIDEOS */}
        <section id="work" ref={workRef} className="scroll-section space-y-6 scroll-mt-28">
          <div className="flex items-end justify-between border-b border-[#eacdc2]/15 pb-4 gap-3">
            <div>
              <p className="text-xs font-mono uppercase text-[#eacdc2]/60 tracking-wider">{t.workLabel}</p>
              <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-bold text-[#eacdc2]">{t.workTitle} ({featuredVideos.length})</h2>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => scrollVideos("left")}
                aria-label="Anterior video"
                className="p-2.5 rounded-full border border-[#eacdc2]/20 bg-[#eacdc2]/5 hover:bg-[#eacdc2]/15 text-[#eacdc2] transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollVideos("right")}
                aria-label="Siguiente video"
                className="p-2.5 rounded-full border border-[#eacdc2]/20 bg-[#eacdc2]/5 hover:bg-[#eacdc2]/15 text-[#eacdc2] transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth select-none -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredVideos.map((video) => (
              <div 
                key={video.id} 
                onClick={() => {
                  if (video.videoUrl) setActiveVideo(video);
                  else window.open(video.link, "_blank", "noopener,noreferrer");
                }}
                className="w-[82vw] sm:w-[340px] 2xl:w-[390px] snap-center sm:snap-start group relative flex flex-col rounded-xl overflow-hidden border border-[#eacdc2]/20 bg-[#eacdc2]/5 backdrop-blur-sm hover:border-[#eacdc2]/60 transition flex-shrink-0 cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    onError={(e) => { e.currentTarget.src = video.fallbackThumb; }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                  
                  {/* Badge de Categoría (Izquierda) */}
                  <div className="absolute top-2.5 left-2.5 bg-[#141212]/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-mono text-[#eacdc2] uppercase tracking-wider border border-[#eacdc2]/25">
                    {video.category}
                  </div>

                  {/* Badge Destacado de Métricas (Derecha, si existe) */}
                  {video.badge && (
                    <div className="absolute top-2.5 right-2.5 bg-emerald-500/20 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-emerald-300 font-bold tracking-wider border border-emerald-400/40 flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {video.badge}
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="p-3 rounded-full bg-[#eacdc2] text-[#141212]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="text-sm 2xl:text-base font-semibold text-[#eacdc2] group-hover:text-white transition line-clamp-1">
                    {video.title}
                  </h3>
                  <div className="mt-3 pt-2 border-t border-[#eacdc2]/15 text-xs font-mono text-[#eacdc2]/70 line-clamp-1">
                    {video.tools}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SECCIÓN FOTOGRAFÍA */}
        <section id="photography" ref={photoRef} className="scroll-section space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#eacdc2]/15 pb-5">
            <div>
              <p className="text-xs font-mono uppercase text-[#eacdc2]/60 tracking-wider">{t.photoLabel}</p>
              <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-bold text-[#eacdc2]">{t.photoTitle}</h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-[#eacdc2]/5 p-1 rounded-lg border border-[#eacdc2]/20 text-xs font-medium">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-2 rounded-md transition min-h-[44px] flex items-center ${filter === "all" ? "bg-[#eacdc2] text-[#141212] font-bold" : "text-[#eacdc2]/70 hover:text-[#eacdc2]"}`}
              >
                {t.filterAll} ({photos.length})
              </button>
              <button
                onClick={() => setFilter("editorial")}
                className={`px-3 py-2 rounded-md transition min-h-[44px] flex items-center ${filter === "editorial" ? "bg-[#eacdc2] text-[#141212] font-bold" : "text-[#eacdc2]/70 hover:text-[#eacdc2]"}`}
              >
                {t.filterEditorial}
              </button>
              <button
                onClick={() => setFilter("commercial")}
                className={`px-3 py-2 rounded-md transition min-h-[44px] flex items-center ${filter === "commercial" ? "bg-[#eacdc2] text-[#141212] font-bold" : "text-[#eacdc2]/70 hover:text-[#eacdc2]"}`}
              >
                {t.filterCommercial}
              </button>
              <button
                onClick={() => setFilter("portrait")}
                className={`px-3 py-2 rounded-md transition min-h-[44px] flex items-center ${filter === "portrait" ? "bg-[#eacdc2] text-[#141212] font-bold" : "text-[#eacdc2]/70 hover:text-[#eacdc2]"}`}
              >
                {t.filterPortrait}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#eacdc2]/5 border border-[#eacdc2]/20 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <img
                  src={photo.thumbUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#141212]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs sm:text-sm font-semibold text-[#eacdc2] line-clamp-2">{photo.title}</span>
                  <span className="text-[10px] text-[#eacdc2]/70 uppercase font-mono tracking-wider mt-1">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SECCIÓN SOBRE MÍ */}
        <section id="about" ref={aboutRef} className="scroll-section border-t border-[#eacdc2]/15 pt-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 scroll-mt-28">
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase text-[#eacdc2]/60 tracking-wider">{t.aboutLabel}</p>
            <h2 className="text-2xl sm:text-3xl 2xl:text-5xl font-bold text-[#eacdc2] tracking-tight">{t.aboutTitle}</h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eacdc2]/10 border border-[#eacdc2]/20 text-xs font-mono text-[#eacdc2]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.aboutBadge}
            </div>
          </div>

          <div className="md:col-span-8 space-y-6 text-[#eacdc2]/90 leading-relaxed font-light text-sm sm:text-base 2xl:text-lg">
            <p>{t.aboutP1}</p>
            <p>
              {t.aboutP2_1}
              <strong className="font-semibold text-[#eacdc2]">LOUD Digitals</strong>
              {t.aboutP2_2}
              <strong className="font-semibold text-[#eacdc2]">GGG Marketing</strong>
              {t.aboutP2_3}
              <strong className="font-semibold text-[#eacdc2]">Costa Rica</strong>
              {t.aboutP2_4}
              <strong className="font-semibold text-[#eacdc2]">{lang === "es" ? "Estados Unidos" : "United States"}</strong>
              {t.aboutP2_5}
            </p>

            <div className="pt-6 border-t border-[#eacdc2]/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-[#eacdc2]/15 bg-[#eacdc2]/[0.03]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#eacdc2]/50 block">{t.specTitle}</span>
                <span className="text-sm font-semibold text-[#eacdc2] mt-1 block">{t.specValue}</span>
              </div>
              <div className="p-4 rounded-xl border border-[#eacdc2]/15 bg-[#eacdc2]/[0.03]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#eacdc2]/50 block">{t.toolsTitle}</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="px-2 py-0.5 rounded bg-[#141212] border border-[#eacdc2]/20 text-xs font-mono">DaVinci Resolve</span>
                  <span className="px-2 py-0.5 rounded bg-[#141212] border border-[#eacdc2]/20 text-xs font-mono">After Effects</span>
                  <span className="px-2 py-0.5 rounded bg-[#141212] border border-[#eacdc2]/20 text-xs font-mono">Premiere Pro</span>
                  <span className="px-2 py-0.5 rounded bg-[#141212] border border-[#eacdc2]/20 text-xs font-mono">Photoshop</span>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-[#eacdc2]/15 bg-[#eacdc2]/[0.03]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#eacdc2]/50 block">{t.reachTitle}</span>
                <span className="text-sm font-semibold text-[#eacdc2] mt-1 block">{t.reachValue}</span>
                <span className="text-xs font-mono text-emerald-400/90 mt-1 block">{t.reachLang}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* VISOR MODAL LIGHTBOX */}
      {selectedPhotoIndex !== null && (
        <div 
          onClick={() => setSelectedPhotoIndex(null)}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (diff > 50) showNextPhoto();
            if (diff < -50) showPrevPhoto();
          }}
          className="fixed inset-0 z-50 bg-[#141212]/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
        >
          <button
            onClick={showPrevPhoto}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141212]/80 border border-[#eacdc2]/30 text-[#eacdc2] hover:bg-[#eacdc2] hover:text-[#141212] transition z-10 min-h-[44px] min-w-[44px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl max-h-[88vh] flex flex-col items-center">
            <img
              src={filteredPhotos[selectedPhotoIndex].fullUrl}
              alt={filteredPhotos[selectedPhotoIndex].title}
              className="max-h-[76vh] w-auto max-w-full rounded-lg object-contain border border-[#eacdc2]/25 shadow-2xl"
            />
            <div className="mt-4 flex items-center justify-between w-full px-2 text-xs font-mono text-[#eacdc2]">
              <span className="font-semibold">
                {filteredPhotos[selectedPhotoIndex].title} ({selectedPhotoIndex + 1}/{filteredPhotos.length})
              </span>
              <button 
                onClick={() => setSelectedPhotoIndex(null)}
                className="px-4 py-2 bg-[#eacdc2]/15 border border-[#eacdc2]/30 rounded text-[#eacdc2] font-bold hover:bg-[#eacdc2] hover:text-[#141212] transition min-h-[44px]"
              >
                {t.closeEsc}
              </button>
            </div>
          </div>

          <button
            onClick={showNextPhoto}
            aria-label="Foto siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141212]/80 border border-[#eacdc2]/30 text-[#eacdc2] hover:bg-[#eacdc2] hover:text-[#141212] transition z-10 min-h-[44px] min-w-[44px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* VISOR MODAL DE VIDEO EMBEBIDO */}
      {activeVideo && (
        <div 
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 bg-[#141212]/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className={`relative w-full ${activeVideo.vertical ? "max-w-sm aspect-[9/16]" : "max-w-4xl aspect-video"} bg-black rounded-xl overflow-hidden border border-[#eacdc2]/25 shadow-2xl`}
          >
            <iframe
              src={activeVideo.videoUrl}
              title={activeVideo.title}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 px-3 py-1.5 rounded-md bg-black/80 text-white font-mono text-xs border border-white/20 hover:bg-white hover:text-black transition min-h-[44px]"
            >
              {t.closeEsc}
            </button>
          </div>
        </div>
      )}

      <Footer lang={lang} />
    </div>
  );
}