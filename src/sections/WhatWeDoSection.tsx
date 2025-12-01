import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverCard } from "@/lib/motion";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import FuzzyText from "@/components/FuzzyText";

export default function WhatWeDoSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "intro" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section
      className="
        relative w-full bg-black text-white
        px-4 py-16 sm:py-20 md:py-24
        overflow-hidden
      "
    >
      {/* Subtle animated gradient/backdrop accent for premium feel */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07)_0%,rgba(0,0,0,0)_70%)]
          opacity-40 blur-2xl
        "
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col gap-16">
        {/* 1. Header / intro */}
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // only animate first time in view, ~20% visible
        >
          <div className="mb-4 -ml-[56px]">
            <FuzzyText
              baseIntensity={0}
              hoverIntensity={0.05}
              enableHover={true}
              fontSize="clamp(2rem, 4vw, 3.5rem)"
              fontWeight={900}
              color="#fff"
              className="!mx-0"
            >
              What We Do
            </FuzzyText>
          </div>

          <motion.h2
            variants={fadeUp}
            className="
              text-2xl sm:text-3xl md:text-4xl font-bold
              leading-[1.15] text-white
            "
          >
            Turning technical uncertainty into working prototypes.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mt-4 text-base sm:text-lg text-white/70 leading-relaxed
              max-w-2xl
            "
          >
            Early-stage founders and growing companies face tough technical decisions
            that can cost months of time and significant capital. We help you de-risk
            these choices through <span className="text-white font-medium">2-4 week rapid prototyping engagements</span> that deliver
            working code, technical documentation, cost-benefit analysis, and a clear implementation roadmap.
          </motion.p>
        </motion.div>

        {/* 2. Key Questions List */}
        <motion.ul
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Should we build or buy?",
              desc: "Make informed technical investment decisions through rapid prototyping and cost-benefit analysis before committing resources.",
            },
            {
              title: "How do we integrate AI?",
              desc: "Validate AI use cases with practical prototypes that demonstrate real value before full-scale implementation.",
            },
            {
              title: "Which tech stack should we use?",
              desc: "Get architecture guidance tailored to your growth stage, team capabilities, and technical constraints.",
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="group flex flex-col gap-2"
            >
              <div className="flex items-center gap-4 w-full">
                <span className="text-xl sm:text-2xl font-semibold text-white whitespace-nowrap">
                  {item.title}
                </span>
                
                <div className="grow min-w-[20px] border-b border-dashed border-neutral-800 group-hover:border-neutral-600 transition-colors duration-200 h-[1px] translate-y-[1px]" />
                
                <svg
                  className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              
              <p className="text-white/70 leading-relaxed max-w-2xl pl-0 sm:pl-0">
                {item.desc}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* 4. CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            relative rounded-2xl border border-white/10
            bg-white/[0.03] backdrop-blur-md
            p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4
            shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          "
        >
          {/* glow accent behind CTA */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-2xl
              bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14)_0%,rgba(0,0,0,0)_70%)]
              opacity-60 blur-xl
            "
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-xl">
            <motion.h3
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold text-white"
            >
              Ready to Build Something?
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-white/70 text-sm sm:text-base leading-relaxed"
            >
              Let's explore your technical challenge, discuss our approach, and see
              how rapid prototyping can help you move forward with confidence.
            </motion.p>
          </div>

          <motion.button
            variants={fadeUp}
            {...hoverCard}
            className="
              relative z-10
              min-h-[44px] min-w-[44px]
              px-5 py-3 rounded-full
              border border-white/20 bg-black/60 backdrop-blur-md
              text-white text-sm sm:text-base font-medium
              hover:bg-white/10 hover:border-white/40
              focus:outline-none focus:ring-2 focus:ring-white/40
              transition-all duration-300 touch-manipulation
              whitespace-nowrap shrink-0
            "
            data-cal-namespace="intro"
            data-cal-link="mogil-ventures/intro"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a discovery call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
