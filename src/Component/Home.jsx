import React from "react";
import { ArrowRight } from "lucide-react";
import WhatWeDo from "./WhatWeDo"
import Blob from "./Blob"
import Price from "./Price"
import Audit from "./Audit";


const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
{/*       
      <section className="w-full bg-[#edf2f3]">
  <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16">

    
    <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-tino font-light leading-tight text-[#1f4591]">
      Digital experiences that <br />
      inspire{" "}
      <span className="text-[#68a4f1] font-normal">trust</span>,{" "}
      drive{" "}
      <span className="text-[#68a4f1] font-normal">results</span> <br />
      &{" "}
      <span className="text-[#061e47] font-normal">
        accelerate growth
      </span>
    </h1>

    <p className="mt-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
      We partner with forward-thinking businesses to design and build
      high-impact websites, brands, and digital strategies that turn ideas
      into measurable success.
    </p>

    
    <div className="mt-12">
      <button className="group inline-flex items-center gap-3 bg-[#4682B4] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3b73a1] transition">
        Start your project
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:translate-x-1 transition">
          <ArrowRight size={16} />
        </span>
      </button>
    </div>

  </div>
</section> */}

<section className="relative overflow-hidden bg-[#f4f9fc]">

  {/* INLINE ANIMATIONS */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
    }
    @keyframes underlineDraw {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    @keyframes gridDrift {
      from { background-position: 0 0; }
      to { background-position: 96px 96px; }
    }
  `}</style>

  {/* 🌊 SEA WAVES BACKGROUND */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 600"
    preserveAspectRatio="none"
  >
    {/* Back wave */}
    <path
      fill="#68bbe3"
      fillOpacity="0.22"
      d="M0,300 C240,260 480,340 720,320 960,300 1200,260 1440,280 L1440,600 L0,600 Z"
    >
      <animate
        attributeName="d"
        dur="22s"
        repeatCount="indefinite"
        values="
          M0,300 C240,260 480,340 720,320 960,300 1200,260 1440,280 L1440,600 L0,600 Z;
          M0,320 C240,300 480,260 720,300 960,340 1200,320 1440,300 L1440,600 L0,600 Z;
          M0,300 C240,260 480,340 720,320 960,300 1200,260 1440,280 L1440,600 L0,600 Z
        "
      />
    </path>

    {/* Mid wave */}
    <path
      fill="#0e86d4"
      fillOpacity="0.18"
      d="M0,340 C240,360 480,300 720,330 960,360 1200,320 1440,340 L1440,600 L0,600 Z"
    >
      <animate
        attributeName="d"
        dur="16s"
        repeatCount="indefinite"
        values="
          M0,340 C240,360 480,300 720,330 960,360 1200,320 1440,340 L1440,600 L0,600 Z;
          M0,320 C240,300 480,360 720,350 960,320 1200,360 1440,330 L1440,600 L0,600 Z;
          M0,340 C240,360 480,300 720,330 960,360 1200,320 1440,340 L1440,600 L0,600 Z
        "
      />
    </path>

    {/* Front wave */}
    <path
      fill="#055c9d"
      fillOpacity="0.15"
      d="M0,380 C240,400 480,360 720,380 960,400 1200,360 1440,380 L1440,600 L0,600 Z"
    >
      <animate
        attributeName="d"
        dur="12s"
        repeatCount="indefinite"
        values="
          M0,380 C240,400 480,360 720,380 960,400 1200,360 1440,380 L1440,600 L0,600 Z;
          M0,360 C240,340 480,400 720,390 960,360 1200,400 1440,370 L1440,600 L0,600 Z;
          M0,380 C240,400 480,360 720,380 960,400 1200,360 1440,380 L1440,600 L0,600 Z
        "
      />
    </path>
  </svg>

  {/* Floating luxury blobs (still valid) */}
  <div
    className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[140px]"
    style={{
      backgroundColor: "#68bbe3",
      opacity: 0.35,
      animation: "floatSlow 14s ease-in-out infinite",
    }}
  />
  <div
    className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full blur-[140px]"
    style={{
      backgroundColor: "#0e86d4",
      opacity: 0.28,
      animation: "floatSlow 18s ease-in-out infinite",
    }}
  />

  {/* Animated grid */}
  <div
    className="absolute inset-0 opacity-[0.22]"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0,48,96,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,48,96,0.06) 1px, transparent 1px)
      `,
      backgroundSize: "96px 96px",
      animation: "gridDrift 80s linear infinite",
    }}
  />

  {/* Editorial rail */}


  <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-24 pt-40 pb-28">




    {/* Headline */}
    <h1
      className="max-w-4xl text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.04] font-medium text-[#003060]"
      style={{ animation: "fadeUp 0.8s ease-out forwards", animationDelay: "0.15s" }}
    >
      We craft digital
      <br />
      <span className="relative inline-block font-normal text-[#0e86d4]">
        experiences
        <span
          className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full origin-left"
          style={{
            backgroundColor: "#0e86d4",
            opacity: 0.3,
            animation: "underlineDraw 0.9s ease-out forwards",
          }}
        />
      </span>{" "}
      that feel
      <br />
      calm, human & beautifully
      <span className="font-normal text-[#055c9d]"> effective</span>
    </h1>

    {/* Description */}
    <p
      className="mt-10 max-w-xl text-[1.05rem] text-[#055c9d] leading-relaxed"
      style={{ animation: "fadeUp 0.8s ease-out forwards", animationDelay: "0.35s" }}
    >
      We help thoughtful brands design and build websites that feel
      effortless to use — blending strategy, aesthetics, and
      performance into one seamless experience.
    </p>

  </div>
</section>




      {/* WHAT WE DO SECTION */}
      <WhatWeDo />
      <Blob />
      <Price></Price>
      <Audit></Audit>

    </>
  );
};

export default Hero;











