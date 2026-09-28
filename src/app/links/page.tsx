"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import {
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  Users,
  ShoppingBag,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon, FacebookIcon } from "@/components/SocialIcons";

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "WhatsApp Oficial",
      subtitle: "Atendimento imediato e agendamento de consultas",
      href: OFFICE_INFO.whatsappUrl,
      icon: WhatsAppIcon,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Institucional",
      subtitle: "Conheça nossas especialidades e sede física no Ahú",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "trabalhista",
      title: "Direito do Trabalho & Rescisões",
      subtitle: "Cálculo de verbas, horas extras e reversão de justa causa",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Olá! Gostaria de consultoria jurídica sobre Direito do Trabalho e verbas rescisórias com o advogado."
      )}`,
      icon: Briefcase,
      highlight: false,
    },
    {
      id: "rh",
      title: "Consultoria Preventiva de RH",
      subtitle: "Auditoria trabalhista, redução de passivo e contratos",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Olá! Gostaria de consultoria preventiva de RH e contratos com o advogado."
      )}`,
      icon: Users,
      highlight: false,
    },
    {
      id: "consumidor",
      title: "Direito do Consumidor & Cível",
      subtitle: "Negativação indevida, planos de saúde e litígios contratuais",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Olá! Gostaria de consultoria sobre Direito do Consumidor e causas cíveis com o advogado."
      )}`,
      icon: ShoppingBag,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Oficial",
      subtitle: "@davidmeloto.adv • Informações jurídicas e atualizações",
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "linkedin",
      title: "LinkedIn Profissional",
      subtitle: "Perfil profissional e publicações do advogado titular",
      href: OFFICE_INFO.linkedinUrl,
      icon: LinkedinIcon,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito do Trabalho",
    "Consultoria de RH",
    "Direito do Consumidor",
    "Direito Civil & Contratos",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#141F36]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo DOBRADA e Identidade Visual */}
        <div className="relative bg-[#141F36] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#C5A059]/25">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C5A059" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#EAD29C" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#1C2945]/80 backdrop-blur-md text-xs font-heading tracking-wider text-[#EAD29C]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Advocacia desde 2021 • OAB/PR 111.537</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#C5A059]">
              Curitiba/PR • Todo o Brasil
            </span>
          </div>

          {/* Logo Dobrada no Lado Esquerdo (Clique volta para a Home com dimensões explícitas) */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <Link
              href="/"
              className="relative block w-full max-w-[560px] xl:max-w-[650px] h-60 xl:h-72 mx-auto cursor-pointer group focus:outline-none mb-4"
              aria-label="Ir para a página inicial"
            >
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-md"
                  sizes="(min-width: 1280px) 650px, 560px"
                />
              </div>
            </Link>

            <div className="h-0.5 w-16 bg-[#C5A059]/50 mb-4" />

            <h1 className="font-heading text-xl xl:text-2xl font-semibold max-w-md leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-slate-300 max-w-sm mt-3 leading-relaxed">
              Atuação especializada em Direito do Trabalho, Consultoria Preventiva de RH e demandas estratégicas no contencioso e consultivo.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 font-body pt-3 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#C5A059]">Provimento nº 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Logo + Canais de Atendimento */}
        <div className="bg-[#FDFCF7] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-3 xl:space-y-3.5 py-4">
            
            {/* Header com Logo no Lado Direito com dimensões explícitas */}
            <div className="flex flex-col items-center text-center w-full">
              <Link
                href="/"
                className="relative block w-full max-w-[440px] xl:max-w-[500px] h-36 xl:h-44 mx-auto cursor-pointer group focus:outline-none mb-2"
                aria-label="Ir para a página inicial"
              >
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo_sem_fundo_usarnomodoclaro.png"
                    alt={OFFICE_INFO.name}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-xs"
                    sizes="(min-width: 1280px) 500px, 440px"
                  />
                </div>
              </Link>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#C5A059] block mb-0.5 font-bold">
                Acesso Imediato
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#141F36]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-slate-500 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com o advogado titular.
              </p>
            </div>

            {/* Lista de Links */}
            <div className="space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3 xl:p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#C5A059] text-[#141F36] border-2 border-[#EAD29C]/70 hover:bg-[#B38F48] shadow-sm hover:shadow-md font-bold"
                    : "bg-[#FFFFFF] text-[#141F36] border-[#C28175]/30 hover:border-[#C5A059] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-[#141F36] text-[#C5A059]" : "bg-[#F4F1EA] text-[#C5A059]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm font-bold block leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block ${
                            item.highlight ? "text-[#141F36]/80 font-medium" : "text-slate-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-[#141F36]" : "text-slate-500 group-hover:text-[#C5A059]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Caixa de Especialidades */}
            <div className="p-3.5 rounded-xl border border-[#C5A059]/30 bg-[#FFFFFF]">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#141F36] font-bold mb-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-[#FDFCF7] text-[#141F36] border border-[#C28175]/35 font-semibold"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-slate-500 pt-2 border-t border-slate-200">
            {OFFICE_INFO.address} • © {new Date().getFullYear()} {OFFICE_INFO.name}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Logo Dobrada Centralizada) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-3 sm:py-4 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FDFCF7] to-[#F5F2EB]">
        {/* Linhas Geométricas Sutis de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="goldGeomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#141F36" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#C28175" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="goldGeomGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#141F36" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C5A059" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Linhas Diagonais */}
            <line x1="-15%" y1="12%" x2="115%" y2="38%" stroke="url(#goldGeomGrad1)" strokeWidth="1.25" />
            <line x1="-15%" y1="42%" x2="115%" y2="18%" stroke="url(#goldGeomGrad2)" strokeWidth="1" />
            <line x1="-15%" y1="78%" x2="115%" y2="58%" stroke="url(#goldGeomGrad1)" strokeWidth="1.25" />
            <line x1="-15%" y1="92%" x2="115%" y2="72%" stroke="url(#goldGeomGrad2)" strokeWidth="0.75" />

            {/* Linhas Tracejadas */}
            <line x1="18%" y1="-10%" x2="82%" y2="110%" stroke="url(#goldGeomGrad1)" strokeWidth="0.75" strokeDasharray="5 5" />
            <line x1="88%" y1="-10%" x2="12%" y2="110%" stroke="url(#goldGeomGrad2)" strokeWidth="0.75" strokeDasharray="6 4" />

            {/* Círculos Concêntricos */}
            <circle cx="88%" cy="16%" r="80" fill="none" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.25" />
            <circle cx="88%" cy="16%" r="130" fill="none" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.12" strokeDasharray="4 4" />
            <circle cx="12%" cy="84%" r="90" fill="none" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.25" />
          </svg>
        </div>

        {/* Topo Mobile - Logo Dobrada Centralizada (Clique volta para a Home) + Linha Pequena de Áreas de Atuação */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-1 pb-1">
          <Link
            href="/"
            className="w-[92vw] max-w-[360px] block mx-auto cursor-pointer group focus:outline-none mb-1.5"
            aria-label="Ir para a página inicial"
          >
            <div className="relative w-full h-32 sm:h-36 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo_sem_fundo_usarnomodoclaro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-center drop-shadow-xs"
                sizes="(max-width: 768px) 360px, 300px"
              />
            </div>
          </Link>

          {/* Áreas de Atuação em uma Linha Pequena Compacta */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 max-w-sm mx-auto px-1">
            {specialties.map((spec, i) => (
              <span
                key={i}
                className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[#FFFFFF] text-[#141F36] font-body border border-[#C5A059]/40 font-semibold shadow-2xs"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Links Mobile - Distribuídos harmoniosamente ocupando o espaço */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between py-2 max-w-md mx-auto">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                  item.highlight
                    ? "bg-[#C5A059] text-[#141F36] border-2 border-[#EAD29C]/70 shadow-[0_4px_14px_rgba(197,160,89,0.35)] font-bold"
                    : "bg-white/95 backdrop-blur-xs hover:bg-white border-[#C28175]/30 text-[#141F36] shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-[#141F36] text-[#C5A059]" : "bg-[#F4F1EA] border border-[#C5A059]/30 text-[#C5A059]"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight truncate">{item.title}</h2>
                    <p
                      className={`text-[0.6875rem] font-body truncate mt-0.5 ${
                        item.highlight ? "text-[#141F36]/80" : "text-slate-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-current flex-shrink-0 ml-2" />
              </a>
            );
          })}
        </div>

        {/* Rodapé Mobile Compacto */}
        <div className="relative z-10 text-center text-[0.625rem] sm:text-[0.6875rem] text-slate-500 font-body pt-1 pb-1">
          <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
        </div>
      </div>
    </main>
  );
}