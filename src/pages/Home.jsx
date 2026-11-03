import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";

// 1. PREFIJO BASE DE IMAGEKIT
const IMAGEKIT_BASE = "https://ik.imagekit.io/f10c3to17/home%20photos/Fotos%20para%20Usar%20p%C3%A1gina%20principal";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Referencias para el observador de scroll en cada sección
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const photoRef = useRef(null);
  const aboutRef = useRef(null);

  // Referencia para controlar el carrusel horizontal de videos
  const sliderRef = useRef(null);

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

  // IntersectionObserver: activa la animación con desenfoque al hacer scroll
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
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  // Cerrar lightbox con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 1. VIDEOS DESTACADOS
  const featuredVideos = [
    {
      id: 18,
      title: "5 Mitos Sobre la Ciática Que Escucho Cada Semana",
      category: "educational - Long Form video",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/Alex Dunlop - YOUTUBE GIF.gif",
      link: "https://youtu.be/e6bZwc5qtlk",
    },
    {
      id: 2,
      title: "Castro Carazo",
      category: "educational - Long Form video",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/Castro Carazo.gif",
      link: "https://youtu.be/7Thwdtxv0b0",
    },
    {
      id: 20,
      title: "Dr.Alex Dunlop - Reels",
      category: "reel",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/ES Sciatica wk55 gif.gif",
      link: "https://www.instagram.com/dralexdunlop.es/",
    },
    {
      id: 3,
      title: "BYL - Break Your Limits",
      category: "Short-Form & Comercial",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/break your limits.gif",
      link: "https://youtu.be/mw6cvqMss9U",
    },
    {
      id: 4,
      title: "Challenge",
      category: "Short-Form & Comercial",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/Challenge GIF 2.gif",
      link: "https://youtu.be/yzVMgoir7tU",
    },
    {
      id: 5,
      title: "Digital Training Hub",
      category: "Long Form & Comercial",
      tools: "DaVinci Resolve - After Effects",
      thumbnail: "/videos/DTH.gif",
      link: "https://youtu.be/Y-OpbMl-DyQ",
    },
    {
      id: 6,
      title: "Little Things",
      category: "Short-Form & Cinematography",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/Gif - Little Things.gif",
      link: "https://youtu.be/OsGkYNW8dHc",
    },
    {
      id: 7,
      title: "JYCH",
      category: "Commercial & Short-Form",
      tools: "DaVinci Resolve - After Effects",
      thumbnail: "/videos/JYCH.gif",
      link: "https://youtu.be/l2FblPLEGB0",
    },
    {
      id: 8,
      title: "Kajiri",
      category: "Short-Form - Reel ",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/Kajiri.gif",
      link: "https://youtu.be/Yn1EKm9CG9k",
    },
    {
      id: 9,
      title: "Koi +",
      category: "IA - Short-Form",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/KOI +.gif",
      link: "https://youtu.be/ah9t8jODlsY",
    },
    {
      id: 10,
      title: "Lions Club",
      category: "Short-Form & Commercial",
      tools: "DaVinci Resolve - After Effects",
      thumbnail: "/videos/Lions Club.gif",
      link: "https://youtu.be/hA8TLKag1hw",
    },
    {
      id: 11,
      title: "La Casa de las Sillas",
      category: "Short-Form & Commercial",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/LA CASA DE LAS SILLAS.gif",
      link: "https://youtu.be/ihJWXDvcl4o",
    },
    {
      id: 12,
      title: "Metanoia",
      category: "Cinematography - Short Film",
      tools: "DaVinci Resolve - Premiere Pro",
      thumbnail: "/videos/Metanoia Gif.gif",
      link: "https://youtu.be/UHYV2J1aJ7c",
    },
    {
      id: 13,
      title: "Posh",
      category: "Short-Form & Commercial",
      tools: "DaVinci Resolve - After Effects",
      thumbnail: "/videos/Posh.gif",
      link: "https://youtu.be/YPx42HvE8oA",
    },
    {
      id: 14,
      title: "Palacio del Blumer",
      category: "Short-Form & Commercial",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/Rians Palacio del Blumer.gif",
      link: "https://youtu.be/W6sKTBekthQ",
    },
    {
      id: 15,
      title: "Style Evolves",
      category: "Short-Form & SFX",
      tools: "DaVinci Resolve - After Effects",
      thumbnail: "/videos/Style Evolves.gif",
      link: "https://youtu.be/zovxASpZiDo",
    },
    {
      id: 16,
      title: "TEC",
      category: "Short-Form - Reel",
      tools: "DaVinci Resolve",
      thumbnail: "/videos/TEC.gif",
      link: "https://youtu.be/acYCs7E2328",
    },
    {
      id: 17,
      title: "Villa Edit",
      category: "Short-Form & Coursework",
      tools: "DaVinci Resolve - After Effects",
      thumbnail: "/videos/VILLA GIF.gif",
      link: "https://youtu.be/gcLXkLwXDHo",
    },
    {
      id: 1,
      title: "Cinematography Reel",
      category: "Cinematography",
      tools: "DaVinci Resolve • Premiere Pro",
      thumbnail: "/videos/Cinematography reel.gif",
      link: "https://youtu.be/60rsebZLSEk",
    },
  ];

  // 2. TUS 25 FOTOS DE IMAGEKIT
  const photos = [
    { id: 1, title: "Virino - Malvie Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/04_This_is_VIRINO_image3_MALVIE_Magazine-140.jpg` },
    { id: 2, title: "Dulces Caprichosos", category: "commercial", image: `${IMAGEKIT_BASE}/_MG_1117.jpg` },
    { id: 3, title: "Virino - Malvie Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/04_This_is_VIRINO_image7_MALVIE_Magazine-142.jpg` },
    { id: 4, title: "Mafer", category: "portrait", image: `${IMAGEKIT_BASE}/_MG_5872.jpg` },
    { id: 5, title: "Glerifer", category: "portrait", image: `${IMAGEKIT_BASE}/_MG_6446.jpg` },
    { id: 6, title: "Aless", category: "portrait", image: `${IMAGEKIT_BASE}/IMG_0462.jpg` },
    { id: 7, title: "Aless", category: "portrait", image: `${IMAGEKIT_BASE}/IMG_0378.jpg` },
    { id: 8, title: "Dulces Caprichosos", category: "commercial", image: `${IMAGEKIT_BASE}/_MG_1104.jpg` },
    { id: 9, title: "Victor - Ana", category: "portrait", image: `${IMAGEKIT_BASE}/_MG_2402.jpg` },
    { id: 10, title: "Marcos", category: "portrait", image: `${IMAGEKIT_BASE}/IMG_9661.jpg` },
    { id: 11, title: "Ana", category: "commercial", image: `${IMAGEKIT_BASE}/_MG_0232.jpg` },
    { id: 12, title: "Dary", category: "portrait", image: `${IMAGEKIT_BASE}/_MG_2615.jpg` },
    { id: 13, title: "Glerifer", category: "portrait", image: `${IMAGEKIT_BASE}/_MG_2592%203.jpg` },
    { id: 14, title: "Metro - Goji Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/Goji%2082V1_15.jpg` },
    { id: 15, title: "Mafer", category: "portrait", image: `${IMAGEKIT_BASE}/_MG_0793.jpg` },
    { id: 16, title: "Sun Model - Laura", category: "portrait", image: `${IMAGEKIT_BASE}/portada.jpg` },
    { id: 17, title: "Cascanueces", category: "commercial", image: `${IMAGEKIT_BASE}/_MG_5480.jpg` },
    { id: 18, title: "Ana", category: "commercial", image: `${IMAGEKIT_BASE}/_MG_0243.jpg` },
    { id: 19, title: "Study - Looker Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/AUGUST__LOOKER_Glamour_Issue31.jpg` },
    { id: 20, title: "Sun Model - Laura", category: "portrait", image: `${IMAGEKIT_BASE}/_MG_0687.jpg` },
    { id: 21, title: "Bons", category: "commercial", image: `${IMAGEKIT_BASE}/IMG_6651.jpg` },
    { id: 22, title: "Mid 2000s - Artells Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/2041-12%20copy.jpg` },
    { id: 23, title: "Neon Demons - Quadro Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/238-29%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg` },
    { id: 24, title: "Neon Demons - Quadro Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/238-26%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg` },
    { id: 25, title: "Mafer - LeDésir Magazine", category: "commercial", image: `${IMAGEKIT_BASE}/05_Mafer.jpg` },
  ];

  const filteredPhotos = filter === "all" 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#eacdc2] antialiased selection:bg-[#eacdc2] selection:text-[#1e1e1e] overflow-x-hidden">
      {/* ESTILOS DE TRANSICIÓN SUAVE EN SCROLL */}
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
      `}</style>

      {/* NAVEGACIÓN SUPERIOR FIJA (ESCALABLE EN 4K) */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#1e1e1e]/90 border-b border-[#eacdc2]/15">
        <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1700px] mx-auto px-4 sm:px-6 2xl:px-10 h-16 sm:h-20 2xl:h-24 flex items-center justify-between gap-3">
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-7 sm:h-9 2xl:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="text-base sm:text-xl 2xl:text-2xl font-bold tracking-tight text-[#eacdc2] uppercase">Juan Macia</span>
          </a>

          <nav className="flex items-center gap-3 sm:gap-6 2xl:gap-10 text-xs sm:text-sm 2xl:text-base font-medium text-[#eacdc2]/70">
            <a href="#work" className="hover:text-[#eacdc2] transition">Videos</a>
            <a href="#photography" className="hover:text-[#eacdc2] transition">Fotos</a>
            <a href="#about" className="hover:text-[#eacdc2] transition">Sobre Mí</a>
            <a 
              href="#about" 
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 2xl:px-6 2xl:py-2.5 rounded-full bg-[#eacdc2] text-[#1e1e1e] text-[11px] sm:text-xs 2xl:text-sm font-bold hover:bg-white transition shrink-0"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1700px] mx-auto px-4 sm:px-6 2xl:px-10 pt-8 sm:pt-12 2xl:pt-20 pb-20 sm:pb-24 2xl:pb-36 space-y-20 sm:space-y-28 2xl:space-y-36">
        {/* HERO RESPONSIVO & 4K */}
        <section 
          id="hero" 
          ref={heroRef}
          className="scroll-section scroll-mt-24 2xl:scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 2xl:gap-16 items-center pt-2 sm:pt-4 2xl:pt-8"
        >
          {/* Texto principal */}
          <div className="order-2 md:order-1 md:col-span-8 space-y-4 sm:space-y-6 2xl:space-y-8 text-left">
            <p className="text-[11px] sm:text-xs 2xl:text-sm uppercase tracking-widest text-[#eacdc2]/60 font-mono">
              Portafolio Audiovisual
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold text-[#eacdc2] tracking-tight leading-[1.12]">
              Edición con ritmo narrativo, color cinematográfico y fotografía fija.
            </h1>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-[#eacdc2]/80 max-w-2xl 2xl:max-w-4xl font-light leading-relaxed">
              Enfoque en montaje de alto impacto, corrección de color y dirección visual para marcas, creadores y proyectos independientes.
            </p>
            <div className="flex flex-wrap items-center gap-3 2xl:gap-5 pt-2">
              <a 
                href="#work" 
                className="w-full sm:w-auto text-center px-5 py-2.5 2xl:px-8 2xl:py-3.5 rounded-lg bg-[#eacdc2] text-[#1e1e1e] font-bold text-sm 2xl:text-base hover:bg-white transition"
              >
                Ver Videos
              </a>
              <a 
                href="#photography" 
                className="w-full sm:w-auto text-center px-5 py-2.5 2xl:px-8 2xl:py-3.5 rounded-lg border border-[#eacdc2]/30 bg-[#eacdc2]/5 text-[#eacdc2] font-semibold text-sm 2xl:text-base hover:border-[#eacdc2] transition"
              >
                Ver Fotografías ({photos.length})
              </a>
            </div>
          </div>

          {/* Imagen de perfil adaptada */}
          <div className="order-1 md:order-2 md:col-span-4 flex justify-center md:justify-end">
            <div className="relative p-2 sm:p-3 2xl:p-4 rounded-2xl border border-[#eacdc2]/20 bg-[#eacdc2]/5 backdrop-blur-sm w-36 sm:w-56 md:w-full max-w-[240px] 2xl:max-w-[340px]">
              <img 
                src="/Juan profile.jpg" 
                alt="Juan Macia" 
                className="w-full h-auto aspect-square md:aspect-auto object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* 1. SECCIÓN VIDEOS (SLIDER HORIZONTAL 4K) */}
        <section 
          id="work" 
          ref={workRef}
          className="scroll-section space-y-5 sm:space-y-6 2xl:space-y-8 scroll-mt-24 2xl:scroll-mt-32"
        >
          <div className="flex items-end justify-between border-b border-[#eacdc2]/15 pb-4 2xl:pb-6 gap-3">
            <div>
              <p className="text-[11px] sm:text-xs 2xl:text-sm font-mono uppercase text-[#eacdc2]/60 tracking-wider">Commercial & Narrative</p>
              <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-bold text-[#eacdc2]">Edición de Video</h2>
            </div>
            
            <div className="flex items-center gap-2 2xl:gap-3 shrink-0">
              <button
                onClick={() => scrollVideos("left")}
                aria-label="Anterior video"
                className="p-2 2xl:p-3 rounded-full border border-[#eacdc2]/20 bg-[#eacdc2]/5 hover:bg-[#eacdc2]/15 text-[#eacdc2] transition active:scale-95"
              >
                <svg className="w-4 h-4 2xl:w-5 2xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollVideos("right")}
                aria-label="Siguiente video"
                className="p-2 2xl:p-3 rounded-full border border-[#eacdc2]/20 bg-[#eacdc2]/5 hover:bg-[#eacdc2]/15 text-[#eacdc2] transition active:scale-95"
              >
                <svg className="w-4 h-4 2xl:w-5 2xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-3 sm:gap-4 2xl:gap-6 overflow-x-auto pb-4 2xl:pb-6 pt-1 snap-x snap-mandatory scroll-smooth select-none -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredVideos.map((video) => (
              <a 
                key={video.id} 
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[82vw] sm:w-[300px] md:w-[320px] 2xl:w-[380px] 3xl:w-[440px] snap-center sm:snap-start group relative flex flex-col rounded-xl 2xl:rounded-2xl overflow-hidden border border-[#eacdc2]/20 bg-[#eacdc2]/5 backdrop-blur-sm hover:border-[#eacdc2]/60 transition flex-shrink-0"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 2xl:top-3.5 2xl:left-3.5 bg-[#1e1e1e]/85 backdrop-blur-md px-2 py-0.5 2xl:px-3 2xl:py-1 rounded text-[9px] sm:text-[10px] 2xl:text-xs font-mono text-[#eacdc2] uppercase tracking-wider border border-[#eacdc2]/20 line-clamp-1 max-w-[70%]">
                    {video.category}
                  </div>
                  <div className="absolute top-2.5 right-2.5 2xl:top-3.5 2xl:right-3.5 bg-[#1e1e1e]/85 backdrop-blur-md p-1.5 2xl:p-2 rounded-full text-[#eacdc2]/70 group-hover:text-[#eacdc2] transition border border-[#eacdc2]/20">
                    <svg className="w-3 h-3 2xl:w-4 2xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 2xl:p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-sm 2xl:text-lg font-semibold text-[#eacdc2] group-hover:text-white transition line-clamp-1">
                    {video.title}
                  </h3>
                  <div className="mt-2.5 2xl:mt-4 pt-2 2xl:pt-3 border-t border-[#eacdc2]/15 text-[10px] 2xl:text-xs font-mono text-[#eacdc2]/60 line-clamp-1">
                    {video.tools}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 2. SECCIÓN FOTOGRAFÍA (ESCALA A 5 Y 6 COLUMNAS EN 4K) */}
        <section 
          id="photography" 
          ref={photoRef}
          className="scroll-section space-y-6 sm:space-y-8 2xl:space-y-10 scroll-mt-24 2xl:scroll-mt-32"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#eacdc2]/15 pb-5 2xl:pb-6">
            <div>
              <p className="text-[11px] sm:text-xs 2xl:text-sm font-mono uppercase text-[#eacdc2]/60 tracking-wider">Frames & Stills</p>
              <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-bold text-[#eacdc2]">Fotografía Seleccionada</h2>
            </div>

            {/* Filtros */}
            <div className="flex items-center gap-1.5 sm:gap-2 2xl:gap-3 bg-[#eacdc2]/5 p-1 2xl:p-1.5 rounded-lg border border-[#eacdc2]/20 text-[11px] sm:text-xs 2xl:text-sm font-medium self-start sm:self-auto">
              <button
                onClick={() => setFilter("all")}
                className={`px-2.5 sm:px-3 2xl:px-4 py-1.5 rounded-md transition ${filter === "all" ? "bg-[#eacdc2] text-[#1e1e1e] font-bold" : "text-[#eacdc2]/70 hover:text-[#eacdc2]"}`}
              >
                Todas ({photos.length})
              </button>
              <button
                onClick={() => setFilter("commercial")}
                className={`px-2.5 sm:px-3 2xl:px-4 py-1.5 rounded-md transition ${filter === "commercial" ? "bg-[#eacdc2] text-[#1e1e1e] font-bold" : "text-[#eacdc2]/70 hover:text-[#eacdc2]"}`}
              >
                Comercial
              </button>
              <button
                onClick={() => setFilter("portrait")}
                className={`px-2.5 sm:px-3 2xl:px-4 py-1.5 rounded-md transition ${filter === "portrait" ? "bg-[#eacdc2] text-[#1e1e1e] font-bold" : "text-[#eacdc2]/70 hover:text-[#eacdc2]"}`}
              >
                Retrato
              </button>
            </div>
          </div>

          {/* Grilla escalable: 2 en móvil, 3 en tablet, 4 en desktop, 5 en 2K, 6 en 4K */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 sm:gap-4 2xl:gap-5">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl 2xl:rounded-2xl bg-[#eacdc2]/5 border border-[#eacdc2]/20 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1e1e1e]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 2xl:p-5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-semibold text-[#eacdc2] line-clamp-2">{photo.title}</span>
                  <span className="text-[9px] sm:text-[10px] 2xl:text-xs text-[#eacdc2]/70 uppercase font-mono tracking-wider mt-0.5">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SECCIÓN SOBRE MÍ (ADAPTADA A 4K) */}
        <section 
          id="about" 
          ref={aboutRef}
          className="scroll-section border-t border-[#eacdc2]/15 pt-12 sm:pt-16 2xl:pt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 2xl:gap-16 scroll-mt-24 2xl:scroll-mt-32"
        >
          <div className="md:col-span-4 space-y-2 2xl:space-y-4">
            <p className="text-[11px] sm:text-xs 2xl:text-sm font-mono uppercase text-[#eacdc2]/60 tracking-wider">Perfil Profesional</p>
            <h2 className="text-2xl sm:text-3xl 2xl:text-5xl font-bold text-[#eacdc2] tracking-tight">Sobre Mí</h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full bg-[#eacdc2]/10 border border-[#eacdc2]/20 text-[11px] 2xl:text-xs font-mono text-[#eacdc2]">
              <span className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponible para proyectos
            </div>
          </div>

          <div className="md:col-span-8 space-y-5 sm:space-y-6 2xl:space-y-8 text-[#eacdc2]/90 leading-relaxed font-light text-sm sm:text-base 2xl:text-xl">
            <p>
              Editor de video y fotógrafo enfocado en narrativa cinematográfica y formatos digitales de alto impacto. Integro técnicas de corte rítmico, diseño sonoro inmersivo y corrección de color avanzada para dotar a cada proyecto de peso, identidad y ritmo visual.
            </p>
            <p>
              Actualmente colaboro con agencias y marcas internacionales como <strong className="font-semibold text-[#eacdc2]">LOUD Digitals</strong> y <strong className="font-semibold text-[#eacdc2]">GGG Marketing</strong>, desarrollando piezas audiovisuales orientadas a audiencias en <strong className="font-semibold text-[#eacdc2]">Costa Rica</strong> y <strong className="font-semibold text-[#eacdc2]">Estados Unidos</strong>, optimizadas para retención sostenida y conversión.
            </p>

            {/* TARJETAS CON MICRO-ANIMACIONES */}
            <div className="pt-4 sm:pt-6 2xl:pt-8 border-t border-[#eacdc2]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 2xl:gap-6">
              {/* Tarjeta 1 */}
              <div className="group p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl border border-[#eacdc2]/15 bg-[#eacdc2]/[0.03] hover:bg-[#eacdc2]/[0.08] hover:border-[#eacdc2]/40 hover:-translate-y-1 transition-all duration-300">
                <span className="text-[10px] 2xl:text-xs font-mono uppercase tracking-widest text-[#eacdc2]/50 block group-hover:text-[#eacdc2]/80 transition-colors">
                  Especialidad
                </span>
                <span className="text-sm 2xl:text-lg font-semibold text-[#eacdc2] mt-1 2xl:mt-2 block">
                  Montaje de Retención & Color
                </span>
              </div>

              {/* Tarjeta 2 */}
              <div className="group p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl border border-[#eacdc2]/15 bg-[#eacdc2]/[0.03] hover:bg-[#eacdc2]/[0.08] hover:border-[#eacdc2]/40 hover:-translate-y-1 transition-all duration-300">
                <span className="text-[10px] 2xl:text-xs font-mono uppercase tracking-widest text-[#eacdc2]/50 block group-hover:text-[#eacdc2]/80 transition-colors">
                  Herramientas
                </span>
                <div className="flex flex-wrap gap-1.5 2xl:gap-2 mt-2 2xl:mt-3">
                  <span className="px-2 py-0.5 2xl:px-3 2xl:py-1 rounded-md bg-[#1e1e1e] border border-[#eacdc2]/20 text-[10px] sm:text-[11px] 2xl:text-xs font-mono text-[#eacdc2]">
                    DaVinci Resolve
                  </span>
                  <span className="px-2 py-0.5 2xl:px-3 2xl:py-1 rounded-md bg-[#1e1e1e] border border-[#eacdc2]/20 text-[10px] sm:text-[11px] 2xl:text-xs font-mono text-[#eacdc2]">
                    Premiere Pro
                  </span>
                  <span className="px-2 py-0.5 2xl:px-3 2xl:py-1 rounded-md bg-[#1e1e1e] border border-[#eacdc2]/20 text-[10px] sm:text-[11px] 2xl:text-xs font-mono text-[#eacdc2]">
                    After Effects
                  </span>
                  <span className="px-2 py-0.5 2xl:px-3 2xl:py-1 rounded-md bg-[#1e1e1e] border border-[#eacdc2]/20 text-[10px] sm:text-[11px] 2xl:text-xs font-mono text-[#eacdc2]">
                    Photoshop
                  </span>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="group p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl border border-[#eacdc2]/15 bg-[#eacdc2]/[0.03] hover:bg-[#eacdc2]/[0.08] hover:border-[#eacdc2]/40 hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] 2xl:text-xs font-mono uppercase tracking-widest text-[#eacdc2]/50 block group-hover:text-[#eacdc2]/80 transition-colors">
                  Alcance
                </span>
                <span className="text-sm 2xl:text-lg font-semibold text-[#eacdc2] mt-1 2xl:mt-2 block">
                  Remoto (CR • USA • Global)
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL RESPONSIVO Y 4K */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-[#1e1e1e]/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 2xl:p-12 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-4xl 2xl:max-w-6xl max-h-[92vh] flex flex-col items-center"
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[72vh] sm:max-h-[80vh] 2xl:max-h-[85vh] w-auto max-w-full rounded-lg 2xl:rounded-2xl object-contain border border-[#eacdc2]/25 shadow-2xl"
            />
            <div className="mt-3 sm:mt-4 2xl:mt-6 flex items-center justify-between w-full max-w-full px-1 text-xs 2xl:text-sm font-mono text-[#eacdc2]">
              <span className="font-semibold line-clamp-1 pr-2">{selectedPhoto.title}</span>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="hover:bg-[#eacdc2] hover:text-[#1e1e1e] px-3 py-1 2xl:px-5 2xl:py-1.5 bg-[#eacdc2]/10 border border-[#eacdc2]/30 rounded 2xl:rounded-lg text-[#eacdc2] transition font-bold shrink-0"
              >
                Cerrar (Esc)
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}