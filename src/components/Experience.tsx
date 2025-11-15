import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'ApexPlanet Technologies',
    role: 'Frontend Developer Intern',
    duration: 'June 2025 - July 2025',
    description: 'Worked as Frontend development intern, developing high-performance web applications with focus on user experience and performance optimization.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SAP Animate' ],
  },
  {
    company: 'Technical Club JYC-JUIT',
    role: 'Frontend Developer',
    duration: 'Oct 2023 - Nov 2024',
    description: 'Developed responsive web applications for my university\'s technical club. Optimized performance and maintained code quality.',
    skills: ['React', 'JavaScript', 'SCSS', 'Webpack', 'Git'],
  },
  {
    company: 'Freelanced',
    role: 'Web Developer and UI/UX Designer',
    duration: 'June 2022 - Present',
    description: 'Building responsive web applications and designing user experiences. Implemented interactive features using modern JavaScript frameworks.',
    skills: ['React', 'CSS', 'HTML5', 'JavaScript', 'Figma'],
  },
  // {
  //   company: 'Branex IT',
  //   role: 'Web Developer Intern',
  //   duration: 'Jan 2023 - Apr 2023',
  //   description: 'Contributed to various web projects, learning industry best practices and collaborating with experienced developers.',
  //   skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
  // },
];

export const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      data-section="experience"
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
              Experience
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.duration}
                className="group relative"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>

                <motion.div
                  className="p-6 md:p-8 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 hover:border-accent/30 ml-0 md:ml-4"
                  whileHover={{
                    x: 8,
                    boxShadow: '0 12px 24px rgba(74, 222, 128, 0.1)',
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 mt-1">
                        <Briefcase size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-slate-600">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(74, 222, 128, 0.2)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
