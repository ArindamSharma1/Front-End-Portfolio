import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const features = [
  'User-Centered Design',
  'Responsive Development',
  'Performance Optimization',
  'Accessibility First',
  'Clean Code Architecture',
  'UI/UX Design',
];

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      data-section="about"
      className="section-padding"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              About Me.
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.p
                className="text-lg text-slate-600 leading-relaxed"
                variants={itemVariants}
              >
                I'm passionate about creating beautiful, functional, and user-friendly web experiences. My approach combines technical excellence with creative problem-solving to deliver solutions that exceed expectations.
              </motion.p>

              <motion.p
                className="text-lg text-slate-600 leading-relaxed"
                variants={itemVariants}
              >
                Whether it's building responsive interfaces, optimizing performance, or implementing accessibility standards, I bring meticulous attention to detail to every project. I believe in writing clean, maintainable code that serves as a foundation for future development.
              </motion.p>

              <motion.p
                className="text-lg text-slate-600 leading-relaxed"
                variants={itemVariants}
              >
                With a strong foundation in modern web technologies and a commitment to continuous learning, I stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-accent/5 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
