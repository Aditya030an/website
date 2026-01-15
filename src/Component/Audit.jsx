



// import React from "react";

// const FreeWebsiteAudit = () => {
//   return (
//     <section className="relative bg-[#f6f6f6] py-28 overflow-hidden">

//       {/* Background word */}
//       <div className="absolute right-6 top-10 text-[160px] font-bold text-slate-200/40 select-none pointer-events-none">
//         AUDIT
//       </div>

//       <div className="relative max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">


//         {/* Header */}
//         <div className="mb-20">
//           <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-4">
//             Free Website Audit
//           </p>

//           <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] font-medium leading-[1.05] text-slate-900 max-w-3xl">
//             A sharp, expert review of your website
//             <span className="block text-slate-500">
//               focused on performance, clarity, and conversion.
//             </span>
//           </h2>
//         </div>

//         {/* Main */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

//           {/* LEFT */}
//           <div className="lg:col-span-7">

//             <p className="text-slate-900 font-medium mb-8">
//               What we review
//             </p>

//             <div className="space-y-6">
//               <AuditRow
//                 title="Design & UX"
//                 desc="Hierarchy, spacing, readability, and user flow."
//               />
//               <AuditRow
//                 title="Performance"
//                 desc="Load speed, responsiveness, and technical efficiency."
//               />
//               <AuditRow
//                 title="SEO foundations"
//                 desc="Structure, metadata, and content clarity."
//               />
//               <AuditRow
//                 title="Conversion clarity"
//                 desc="Messaging, calls-to-action, and trust signals."
//               />
//             </div>

//             {/* Process */}
//             <div className="mt-16">
//               <p className="text-slate-900 font-medium mb-6">
//                 How it works
//               </p>

//               <div className="space-y-3 text-slate-600 text-lg">
//                 <p>Manual page-by-page review</p>
//                 <p>Issues & opportunities identified</p>
//                 <p>Clear, actionable audit summary</p>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT */}
//           <div className="lg:col-span-5">
//             <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]">

//               <p className="text-slate-900 font-medium text-xl mb-2">
//                 Request your free audit
//               </p>

//               <p className="text-slate-600 mb-8">
//                 Share your website. We’ll take it from here.
//               </p>

//               <form className="space-y-6">
//                 <Input label="Your name" />
//                 <Input label="Email address" type="email" />
//                 <Input label="Website URL" />

//                 <button
//                   type="submit"
//                   className="w-full mt-4 py-4 bg-slate-900 text-white rounded-full hover:opacity-90 transition"
//                 >
//                   Request audit
//                 </button>
//               </form>

//               <p className="mt-6 text-sm text-slate-500">
//                 Manual review • Delivered within 48 hours
//               </p>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// /* ---------------- COMPONENTS ---------------- */

// /* 🔥 Dense + kinetic row */
// const AuditRow = ({ title, desc }) => (
//   <div className="group relative cursor-pointer">

//     <div className="flex flex-col gap-1">
//       <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
//         {title}
//       </h3>

//       <p className="text-slate-600 leading-relaxed">
//         {desc}
//       </p>
//     </div>

//     {/* Kinetic underline */}
//     <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-slate-900 group-hover:w-full transition-all duration-500"></span>
//   </div>
// );

// const Input = ({ label, type = "text" }) => (
//   <div>
//     <label className="block text-sm text-slate-500 mb-2">
//       {label}
//     </label>
//     <input
//       type={type}
//       className="w-full border-b border-slate-300 py-2 outline-none focus:border-slate-900 transition"
//     />
//   </div>
// );

// export default FreeWebsiteAudit;






// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";

// /* =========================
//    TEXT ANIMATIONS
// ========================= */

// // Word-by-word slam reveal
// const SlamText = ({ text }) => (
//   <span className="inline-flex flex-wrap">
//     {text.split(" ").map((word, i) => (
//       <motion.span
//         key={i}
//         initial={{ y: 120, rotateX: 90, opacity: 0 }}
//         whileInView={{ y: 0, rotateX: 0, opacity: 1 }}
//         transition={{
//           delay: i * 0.06,
//           duration: 0.9,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         viewport={{ once: true }}
//         className="mr-3 inline-block origin-bottom"
//       >
//         {word}
//       </motion.span>
//     ))}
//   </span>
// );

// // Soft editorial glitch echo
// const GlitchText = ({ text }) => (
//   <span className="relative inline-block">
//     <span className="absolute inset-0 text-purple-400 translate-x-[2px] translate-y-[2px] opacity-40">
//       {text}
//     </span>
//     <span className="absolute inset-0 text-pink-400 -translate-x-[2px] -translate-y-[2px] opacity-30">
//       {text}
//     </span>
//     <span className="relative">{text}</span>
//   </span>
// );

// // Wave hover paragraph
// const WaveText = ({ text }) => (
//   <span className="inline-flex flex-wrap">
//     {text.split("").map((char, i) => (
//       <motion.span
//         key={i}
//         whileHover={{ y: -8 }}
//         transition={{ type: "spring", stiffness: 300 }}
//         className="inline-block"
//       >
//         {char === " " ? "\u00A0" : char}
//       </motion.span>
//     ))}
//   </span>
// );

// /* =========================
//    SECTION-ONLY 3D BLOB
// ========================= */
// function SectionBlob() {
//   const mesh = useRef();

//   useFrame(() => {
//     mesh.current.rotation.x += 0.001;
//     mesh.current.rotation.y += 0.0015;
//   });

//   return (
//     <Float speed={1.2} floatIntensity={1.6}>
//       <Sphere args={[1.4, 128, 128]} ref={mesh} scale={2.4}>
//         <MeshDistortMaterial
//           distort={0.45}
//           speed={1.6}
//           color="#c7d2fe"
//           roughness={0.4}
//         />
//       </Sphere>
//     </Float>
//   );
// }

// /* =========================
//    MAGNETIC BUTTON
// ========================= */
// const Magnetic = ({ children }) => {
//   const ref = useRef();
//   const move = (e) => {
//     const r = ref.current.getBoundingClientRect();
//     ref.current.style.transform = `translate(
//       ${(e.clientX - r.left - r.width / 2) * 0.2}px,
//       ${(e.clientY - r.top - r.height / 2) * 0.2}px
//     )`;
//   };
//   return (
//     <div
//       ref={ref}
//       onMouseMove={move}
//       onMouseLeave={() => (ref.current.style.transform = "translate(0,0)")}
//       className="transition-transform duration-300"
//     >
//       {children}
//     </div>
//   );
// };

// /* =========================
//    AUDIT CARD
// ========================= */
// const AuditCard = ({ title, desc, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.1, duration: 0.6 }}
//     whileHover={{ y: -8, scale: 1.03 }}
//     className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.2rem]
//     shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]"
//   >
//     <h3 className="text-2xl font-semibold text-slate-900">
//       {title}
//     </h3>
//     <p className="text-slate-600 mt-2 text-lg">
//       {desc}
//     </p>
//   </motion.div>
// );

// /* =========================
//    MAIN COMPONENT
// ========================= */
// const FreeWebsiteAudit = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef });

//   // Blob motion
//   const blobY = useTransform(scrollYProgress, [0, 1], [120, -120]);
//   const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.6]);
//   const blobOpacity = useTransform(scrollYProgress, [0, 0.15, 0.9], [0, 1, 0]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#f8fafc] py-32 overflow-hidden"
//     >
//       {/* SECTION-ONLY BLOB */}
//       <motion.div
//         style={{ y: blobY, scale: blobScale, opacity: blobOpacity }}
//         className="absolute inset-0 pointer-events-none"
//       >
//         <Canvas camera={{ position: [0, 0, 6] }}>
//           <ambientLight intensity={0.9} />
//           <directionalLight position={[3, 3, 3]} intensity={1.1} />
//           <SectionBlob />
//         </Canvas>
//       </motion.div>

//       {/* SOFT AURAS */}
//       <motion.div
//         style={{ y: blobY }}
//         className="absolute -top-40 -left-40 w-[500px] h-[500px]
//         bg-purple-200/40 rounded-full blur-[160px]"
//       />
//       <motion.div
//         style={{ y: blobY }}
//         className="absolute bottom-0 -right-40 w-[420px] h-[420px]
//         bg-blue-200/40 rounded-full blur-[160px]"
//       />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1400px] mx-auto px-10">

//         {/* HEADER */}
//         <div className="max-w-4xl mb-24">
//           <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-6">
//             Free Website Audit
//           </p>

//           <h1 className="text-[clamp(2.8rem,4.5vw,4.5rem)] font-semibold leading-[1.05] text-slate-900">
//             <SlamText text="A clear, expert review of your website —" />
//             <br />
//             <span className="text-slate-500">
//               <GlitchText text="focused on what truly matters." />
//             </span>
//           </h1>

//           <motion.p
//             initial={{ letterSpacing: "0.08em", opacity: 0 }}
//             whileInView={{ letterSpacing: "0.02em", opacity: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="mt-8 text-lg text-slate-600 max-w-2xl"
//           >
//             <WaveText text="We manually review your website for clarity, performance, structure, and conversion readiness. No automation. No generic feedback." />
//           </motion.p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

//           {/* LEFT */}
//           <div className="lg:col-span-7 space-y-16">

//             <div>
//               <p className="text-sm font-medium text-slate-700 mb-8">
//                 What we review
//               </p>

//               <div className="space-y-8">
//                 <AuditCard index={0} title="Design & UX" desc="Hierarchy, spacing, readability, and user flow." />
//                 <AuditCard index={1} title="Performance" desc="Load speed, responsiveness, and technical efficiency." />
//                 <AuditCard index={2} title="SEO foundations" desc="Structure, metadata, and content clarity." />
//                 <AuditCard index={3} title="Conversion clarity" desc="Messaging, calls-to-action, and trust signals." />
//               </div>
//             </div>

//             <div className="pt-6">
//               <p className="text-sm font-medium text-slate-700 mb-6">
//                 How it works
//               </p>
//               <ul className="space-y-4 text-lg text-slate-600">
//                 <li>We review your website manually, page by page.</li>
//                 <li>We identify issues, opportunities, and priorities.</li>
//                 <li>You receive a concise, actionable audit summary.</li>
//               </ul>
//             </div>
//           </div>

//           {/* FORM */}
//           <div className="lg:col-span-5 sticky top-28">
//             <motion.div
//               animate={{ y: [0, -12, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//               className="bg-white/70 backdrop-blur-2xl p-14 rounded-[3rem]
//               shadow-[0_60px_140px_-60px_rgba(0,0,0,0.2)]"
//             >
//               <h3 className="text-3xl font-semibold mb-6">
//                 Request your free audit
//               </h3>

//               <form className="space-y-8">
//                 <input placeholder="Your name" className="crazy-input-light" />
//                 <input placeholder="Email address" className="crazy-input-light" />
//                 <input placeholder="Website URL" className="crazy-input-light" />

//                 <Magnetic>
//                   <button className="w-full py-5 bg-slate-900 text-white rounded-full text-lg font-semibold">
//                     Request audit
//                   </button>
//                 </Magnetic>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .crazy-input-light {
//           width: 100%;
//           background: transparent;
//           border-bottom: 2px solid rgba(15,23,42,0.3);
//           padding: 12px 0;
//           outline: none;
//           font-size: 18px;
//           color: #0f172a;
//         }
//         .crazy-input-light::placeholder {
//           color: rgba(15,23,42,0.4);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FreeWebsiteAudit;




import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ============================
   WOW DOT MATRIX (PARTICLES + LINES)
============================ */
function WowDots() {
  const pointsRef = useRef();
  const linesRef = useRef();
  const { mouse } = useThree();

  const COUNT = 1200;
  const MAX_DIST = 0.7;

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = -Math.random() * 6;
    }
    return arr;
  }, []);

  const linePositions = useMemo(
    () => new Float32Array(COUNT * COUNT * 6),
    []
  );

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array;

    // DOT MOTION
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;

      pos[i3 + 1] += Math.sin(time * 0.5 + pos[i3]) * 0.0015;
      pos[i3] += Math.cos(time * 0.4 + pos[i3 + 1]) * 0.001;

      // mouse magnetic field
      pos[i3] += mouse.x * 0.003;
      pos[i3 + 1] += mouse.y * 0.003;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // LINE CONNECTIONS
    let ptr = 0;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const ax = pos[i * 3];
        const ay = pos[i * 3 + 1];
        const az = pos[i * 3 + 2];
        const bx = pos[j * 3];
        const by = pos[j * 3 + 1];
        const bz = pos[j * 3 + 2];

        const dx = ax - bx;
        const dy = ay - by;
        const dz = az - bz;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < MAX_DIST) {
          linePositions[ptr++] = ax;
          linePositions[ptr++] = ay;
          linePositions[ptr++] = az;
          linePositions[ptr++] = bx;
          linePositions[ptr++] = by;
          linePositions[ptr++] = bz;
        }
      }
    }

    linesRef.current.geometry.setDrawRange(0, ptr / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      {/* DOTS */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#64748b"
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </points>

      {/* LINES */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#cbd5f5"
          transparent
          opacity={0.4}
        />
      </lineSegments>
    </>
  );
}

/* ============================
   CARD
============================ */
const AuditCard = ({ title, desc, index }) => (
  <div
    className="bg-white p-8 rounded-[1.8rem]
    shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]
    transition-transform duration-700 hover:-translate-y-1"
  >
    <p className="text-xs tracking-widest text-slate-400 mb-1">
      0{index + 1}
    </p>
    <h3 className="text-xl font-medium text-slate-900">
      {title}
    </h3>
    <p className="text-slate-600 mt-2 leading-relaxed">
      {desc}
    </p>
  </div>
);

/* ============================
   MAIN SECTION (CONTENT SAME)
============================ */
const FreeWebsiteAudit = () => {
  return (
    <section className="relative overflow-hidden bg-[#f9fafb] py-28">
      

      {/* WOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
          <ambientLight intensity={1} />
          <WowDots />
        </Canvas>
      </div>






      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-10">

        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-6">
            A PEGOL Audit
          </p>

          <h1 className="text-[clamp(2.6rem,4vw,4.2rem)] font-medium leading-[1.1] text-slate-900">
            A clear, expert review of your website —
            <br />
            <span className="text-slate-500">
              focused on what truly matters.
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-2xl">
            We manually review your website for clarity, performance,
            structure, and conversion readiness. No automation.
            No generic feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-7 space-y-16">
            <div>
              <p className="text-sm font-medium text-slate-700 mb-8">
                What we review
              </p>
              <div className="space-y-8">
                <AuditCard index={0} title="Design & UX" desc="Hierarchy, spacing, readability, and user flow." />
                <AuditCard index={1} title="Performance" desc="Load speed, responsiveness, and technical efficiency." />
                <AuditCard index={2} title="SEO foundations" desc="Structure, metadata, and content clarity." />
                <AuditCard index={3} title="Conversion clarity" desc="Messaging, calls-to-action, and trust signals." />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-700 mb-6">
                How it works
              </p>
              <ul className="space-y-4 text-lg text-slate-600">
                <li>We review your website manually, page by page.</li>
                <li>We identify issues, opportunities, and priorities.</li>
                <li>You receive a concise, actionable audit summary.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white p-10 rounded-[2.5rem]
              shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
              <p className="text-slate-900 font-medium text-xl mb-2">
                Request your free audit
              </p>
              <p className="text-slate-600 mb-8">
                Share your website. We’ll take it from here.
              </p>

              <form className="space-y-6">
                <input placeholder="Your name" className="input" />
                <input placeholder="Email address" className="input" />
                <input placeholder="Website URL" className="input" />
                <button className="w-full py-4 bg-slate-900 text-white rounded-full">
                  Request audit
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-500">
                Manual review • Delivered within 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-bottom: 1px solid rgba(15,23,42,0.3);
          padding: 10px 0;
          outline: none;
          background: transparent;
          font-size: 16px;
        }
        .input::placeholder {
          color: rgba(15,23,42,0.45);
        }
      `}</style>
    </section>
  );
};

export default FreeWebsiteAudit;
