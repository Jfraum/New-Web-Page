import React, { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "jfrauditamacia@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="border-t border-[#eacdc2]/15 bg-[#1e1e1e] text-[#eacdc2] pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* BLOQUE CTA PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#eacdc2]/60">
              Contacto & Contratación
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#eacdc2] leading-tight">
              ¿Tienes un proyecto en mente? <br />
              <span className="opacity-90">Construyamos algo visualmente potente.</span>
            </h2>
            <p className="text-sm md:text-base text-[#eacdc2]/80 max-w-xl font-light">
              Disponible para proyectos comerciales, edición remota de alto impacto y dirección fotográfica. Hablemos de tiempos y entregas.
            </p>
          </div>

          {/* BOTONES DE CORREO */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-start md:items-end">
            <a
              href={`mailto:${email}?subject=Propuesta%20de%20Proyecto%20Audiovisual`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#eacdc2] text-[#1e1e1e] font-bold text-sm hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#eacdc2]/10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Escríbeme un correo
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#eacdc2]/25 bg-[#eacdc2]/5 hover:bg-[#eacdc2]/15 text-xs font-mono text-[#eacdc2] transition-colors"
              title="Copiar correo al portapapeles"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? "¡Copiado al portapapeles!" : email}
            </button>
          </div>
        </div>

        {/* LÍNEA INFERIOR: IDENTIDAD Y REDES SOCIALES */}
        <div className="pt-8 border-t border-[#eacdc2]/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#eacdc2]/60 font-mono">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Juan Macia.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#eacdc2]/80">Edición de Video & Fotografía</span>
          </div>

          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/juan-augusto-fraudita-macia-b058612a7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#eacdc2] transition-colors group"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span className="hidden md:inline font-sans font-medium text-[13px]">LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_juanmacia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#eacdc2] transition-colors group"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="hidden md:inline font-sans font-medium text-[13px]">Instagram</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#eacdc2] transition-colors group"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="hidden md:inline font-sans font-medium text-[13px]">YouTube</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 hover:text-[#eacdc2] transition-colors group"
              aria-label="Email directo"
            >
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <span className="hidden md:inline font-sans font-medium text-[13px]">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}