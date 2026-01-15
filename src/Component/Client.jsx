import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ClientHero() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      Array.from(contentRef.current.children),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen bg-[#f4f9fc] flex items-center overflow-hidden">

      {/* Ghost word */}
      <div className="pointer-events-none absolute right-[8%] top-[12%] text-[220px] font-semibold text-[#003060]/5 select-none">
        Clients
      </div>

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f4f9fc]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-24 py-24 w-full">
        <div ref={contentRef} className="max-w-4xl">

          <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-10">
            Our Clients
          </p>

          <h1 className="text-[clamp(3.2rem,6vw,5.4rem)] leading-[1.02] font-medium text-[#003060]">
            Built with teams
            <br />
            who value clarity,
            <br />
            trust & longevity
          </h1>

          <div className="mt-6 h-[120px] w-[420px] rounded-full bg-[#0e86d4]/20 blur-[90px]" />

          <p className="mt-10 text-[1.25rem] leading-relaxed text-[#055c9d] max-w-2xl">
            We partner with founders, startups and growing businesses who see
            digital products as long-term systems — not short-term deliverables.
          </p>

        </div>
      </div>
    </section>
  );
}
