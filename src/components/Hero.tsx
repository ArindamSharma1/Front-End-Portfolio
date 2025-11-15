import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { link } from 'framer-motion/client';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const StatCard = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      className="text-center"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-accent">
        {count}
        {label === 'Hours Worked' && 'K+'}
        {label === 'Completed Projects' && '+'}
        {label === 'Years of Experience' && '+'}
      </div>
      <p className="text-slate-600 text-sm md:text-base mt-2">{label}</p>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      data-section="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center"
    >
      <div className="section-max-width w-full section-padding">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.div
              className="inline-block px-4 py-2 bg-accent/10 rounded-full"
              variants={itemVariants}
            >
              <span className="text-accent text-sm font-semibold">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-gradient"
              variants={itemVariants}
            >
              FRONTEND<br />DEVELOPER
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Hi! My name is Arindam Sharma and I'm a creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions. Specializing in modern React, Next.js, and interactive user experiences.
            </motion.p>

            <motion.a
              className="button-primary flex items-center gap-2 group w-fit"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              href="https://api.whatsapp.com/send?phone=918580705992&text=Hey%20Welcome!%0AThis%20is%20an%20automated%20response%20please%20wait%20a%20while.%20Thankyou"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hire me on WhatsApp"
            >
              Hire Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
            variants={containerVariants}
          >
            <StatCard end={3} label="Years of Experience" />
            <StatCard end={7} label="Completed Projects" />
            <StatCard end={10} label="Hours Worked" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
