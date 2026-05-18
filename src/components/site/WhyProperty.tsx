// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { SectionLabel } from "./SectionLabel";
// import { Reveal } from "./Reveal";

// const stats = [
//   { value: "105M", label: "Annual visitors", note: "More than Times Square or the Eiffel Tower" },
//   { value: "200+", label: "Nationalities", note: "Every continent passes through" },
//   { value: "#1", label: "Most-visited destination", note: "Globally, three years running" },
//   { value: "$25B", label: "Annual sales generated", note: "Across categories and partners" },
// ];

// export function WhyProperty() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

//   return (
//     <section id="why" ref={ref} className="relative overflow-hidden bg-background py-32 lg:py-48">
//       <motion.div
//         style={{ x }}
//         className="pointer-events-none absolute -top-32 left-0 whitespace-nowrap font-display text-[18rem] leading-none text-white/[0.03]"
//       >
//         Destination · Destination ·
//       </motion.div>

//       <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
//         <SectionLabel index="01" label="Why This Property" />

//         <div className="mt-12 grid gap-16 lg:grid-cols-12">
//           <Reveal as="h2" y={60} duration={1.2} className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1] lg:col-span-7">
//             A stage built for the world's most ambitious brands.
//           </Reveal>
//           <Reveal as="p" delay={0.2} y={40} className="text-lg font-light leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9 lg:pt-6">
//             Anchored beside the Burj Khalifa, The Dubai Mall is the cultural and commercial
//             centre of gravity for the Middle East. A footprint without rival. An audience
//             without ceiling.
//           </Reveal>
//         </div>

//         <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
//           {stats.map((s, i) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: i * 0.1 }}
//               className="group relative overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-white/[0.02] lg:p-12"
//             >
//               <div
//                 aria-hidden
//                 className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 opacity-0 blur-3xl transition-all duration-700 group-hover:bg-gold/20 group-hover:opacity-100"
//               />
//               <div className="relative font-display text-6xl text-gold transition-transform duration-500 group-hover:-translate-y-1 lg:text-7xl">
//                 {s.value}
//               </div>
//               <div className="relative mt-4 text-xs uppercase tracking-[0.25em] text-foreground">{s.label}</div>
//               <div className="relative mt-2 text-sm font-light text-muted-foreground">{s.note}</div>
//               <span
//                 aria-hidden
//                 className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold/60 transition-transform duration-700 ease-out group-hover:scale-x-100"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import propertyImg from "../../assets/property.jpg";

const stats = [
  { value: "105M", label: "Annual visitors", note: "More than Times Square or the Eiffel Tower" },
  { value: "200+", label: "Nationalities", note: "Every continent passes through" },
  { value: "#1", label: "Most-visited destination", note: "Globally, three years running" },
  { value: "$25B", label: "Annual sales generated", note: "Across categories and partners" },
];

export function WhyProperty() {
  return (
    <section id="why" className="relative overflow-hidden bg-background py-24 lg:py-36">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-16">
        <SectionLabel index="01" label="Why This Property" />

        <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal
              as="h2"
              y={60}
              duration={1.2}
              className="font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.95] text-foreground"
            >
              A stage built for the world's most ambitious brands.
            </Reveal>

            <Reveal
              as="p"
              delay={0.2}
              y={40}
              className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground"
            >
              Anchored beside the Burj Khalifa, The Dubai Mall is the cultural and
              commercial centre of gravity for the Middle East. A footprint without rival.
              An audience without ceiling.
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <img
              src={propertyImg}
              alt="Dubai Mall property overview"
              className="h-full min-h-[520px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">
                Global Destination
              </p>
              <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-white md:text-5xl">
                Built for culture, commerce and spectacle.
              </h3>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-white/[0.02] lg:p-12"
            >
              <div className="relative font-display text-6xl text-gold transition-transform duration-500 group-hover:-translate-y-1 lg:text-7xl">
                {s.value}
              </div>

              <div className="relative mt-4 text-xs uppercase tracking-[0.25em] text-foreground">
                {s.label}
              </div>

              <div className="relative mt-2 text-sm font-light text-muted-foreground">
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}






// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { SectionLabel } from "./SectionLabel";
// import { Reveal } from "./Reveal";

// const stats = [
//   { value: "105M", label: "Annual visitors", note: "More than Times Square or the Eiffel Tower" },
//   { value: "200+", label: "Nationalities", note: "Every continent passes through" },
//   { value: "#1", label: "Most-visited destination", note: "Globally, three years running" },
//   { value: "$25B", label: "Annual sales generated", note: "Across categories and partners" },
// ];

// export function WhyProperty() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

//   return (
//     <section id="why" ref={ref} className="relative bg-background py-24 lg:py-36">
//       <div className="section-container relative z-10">
//         <SectionLabel index="01" label="Why This Property" />

//         <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
//           <div>
//             <Reveal
//               as="h2"
//               y={40}
//               duration={1}
//               className="safe-heading font-display text-[clamp(2.6rem,6vw,6.5rem)] leading-[0.92] tracking-tight text-white"
//             >
//               A stage built for the world&apos;s most ambitious brands.
//             </Reveal>

//             <Reveal
//               as="p"
//               delay={0.2}
//               y={30}
//               className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground"
//             >
//               Anchored beside the Burj Khalifa, The Dubai Mall is the cultural and
//               commercial centre of gravity for the Middle East. A footprint without rival.
//               An audience without ceiling.
//             </Reveal>
//           </div>

//           <motion.div style={{ y }} className="media-card relative">
//             <img
//               src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop"
//               alt="Dubai skyline luxury destination"
//               className="h-full min-h-[420px] w-full object-cover opacity-80"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
//             <div className="absolute bottom-8 left-8 right-8">
//               <p className="text-xs uppercase tracking-[0.35em] text-gold">
//                 Global Destination
//               </p>
//               <h3 className="mt-3 font-display text-3xl text-white">
//                 Built for culture, commerce and spectacle.
//               </h3>
//             </div>
//           </motion.div>
//         </div>

//         <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
//           {stats.map((s, i) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: i * 0.08 }}
//               className="group relative overflow-hidden bg-background p-7 hover:bg-white/[0.03] lg:p-10"
//             >
//               <div className="font-display text-5xl text-gold lg:text-6xl">
//                 {s.value}
//               </div>
//               <div className="mt-4 text-xs uppercase tracking-[0.25em] text-white">
//                 {s.label}
//               </div>
//               <div className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
//                 {s.note}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }