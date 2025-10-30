import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverCard } from "@/lib/motion";

export default function WhatWeDoSection() {
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
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-white/60 tracking-wide uppercase"
          >
            What We Do
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="
              text-3xl sm:text-4xl md:text-5xl font-bold
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

        {/* 2. Key Questions grid */}
        <motion.div
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
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
            <motion.div
              key={i}
              variants={fadeUp}
              {...hoverCard}
              className="
                group relative rounded-2xl border border-white/10
                bg-white/[0.03] backdrop-blur-md
                p-6 flex flex-col gap-3
                shadow-[0_20px_60px_rgba(0,0,0,0.8)]
                transition-colors
                hover:border-white/20
              "
            >
              {/* Subtle animated border glow accent on hover
                 (React Bits vibe: interactive, animated, memorable). :contentReference[oaicite:9]{index=9}
               */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.18)_0%,rgba(0,0,0,0)_70%)]
                "
                aria-hidden="true"
              />
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Process timeline */}
        {/* <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              step: "1. Understand Your Challenge",
              text: "We start by deeply understanding your technical question, business constraints, and what success looks like for your team and timeline.",
            },
            {
              step: "2. Rapid Prototyping (2-3 weeks)",
              text: "We build working prototypes that test your core assumptions, validate feasibility, and demonstrate real value before you commit significant resources. No slide decks—just working code.",
            },
            {
              step: "3. Deliver Working Solutions",
              text: "You receive: a production-ready prototype, comprehensive technical documentation, detailed cost-benefit analysis, and a concrete implementation roadmap. Make confident decisions backed by evidence, not guesswork.",
            },
          ].map((row, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="
                  flex flex-col
                  bg-white/[0.02] border border-white/10 rounded-xl
                  p-4 sm:p-6
                  shadow-[0_20px_60px_rgba(0,0,0,0.8)]
                "
              >
                <div className="text-white font-semibold text-base sm:text-lg">
                  {row.step}
                </div>
                <div className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {row.text}
                </div>
              </motion.div>
            ))}
        </motion.div> */}

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
            "
            onClick={() => {
              // TODO: Update with your Calendly or contact link
              window.open('https://www.mogilventures.com/contact', '_blank');
            }}
          >
            Book a discovery call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
