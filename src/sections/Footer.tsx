import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { fadeUp } from '../lib/motion';

// Lazy load heavy 3D component
const Dither = lazy(() => import('../components/Dither/Dither'));

// Lightweight placeholder
const DitherPlaceholder = () => (
  <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black" />
);

const Footer = () => {
  return (
    <footer className="relative min-h-[280px] flex items-center justify-center overflow-hidden">
      {/* Subtle Dither Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Suspense fallback={<DitherPlaceholder />}>
          <Dither
            waveColor={[0.3, 0.3, 0.3]}
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0}
            colorNum={3}
            waveAmplitude={0.15}
            waveFrequency={3}
            waveSpeed={0.02}
          />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12 md:py-14">
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {/* Company Name */}
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Mogil Ventures
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/company/mogil-ventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              href="https://github.com/mogilventures"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              href="mailto:contact@mogilventures.com"
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-white/20" />

          {/* Copyright */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Mogil Ventures. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
