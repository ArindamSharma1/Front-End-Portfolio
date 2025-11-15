import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  Server,
  Wrench,
  Zap,
  Layers,
  Package,
  Settings,
} from 'lucide-react';

const techCategories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'JavaScript', icon: Code2 },
      { name: 'TypeScript', icon: Code2 },
      { name: 'React', icon: Zap },
      { name: 'Next.js', icon: Layers },
      { name: 'Tailwind CSS', icon: Wrench },
      { name: 'GSAP', icon: Package },
      { name: 'Framer Motion', icon: Zap },
      { name: 'Redux', icon: Database },
      {name:'SASS', icon: Wrench},
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', icon: Server },
      // { name: 'NestJS', icon: Layers },
      // { name: 'Express.js', icon: Server },
      // { name: 'REST APIs', icon: Code2 },
      // { name: 'WebSockets', icon: Zap },
      { name: 'Authentication', icon: Settings },
      // { name: 'Middleware', icon: Wrench },
      // { name: 'Async/Await', icon: Code2 },
    ],
  },
  {
    name: 'Database',
    techs: [
      { name: 'SQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      // { name: 'Prisma', icon: Layers },
      { name: 'Firebase', icon: Zap },
      // { name: 'Supabase', icon: Database },
      // { name: 'Redis', icon: Zap },
      // { name: 'GraphQL', icon: Code2 },
    ],
  },
  {
    name: 'Tools',
    techs: [
      { name: 'Git', icon: Wrench },
      { name: 'Docker', icon: Package },
      { name: 'AWS', icon: Layers },
      { name: 'Vite', icon: Zap },
      { name: 'Webpack', icon: Settings },
      // { name: 'CI/CD', icon: Code2 },
      { name: 'Figma', icon: Wrench },
      { name: 'VS Code', icon: Code2 },
    ],
  },
];

const TechItem = ({ tech, index }: { tech: any; index: number }) => {
  const Icon = tech.icon;
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      className="tech-icon cursor-pointer group"
      variants={containerVariants}
      whileHover={{
        scale: 1.15,
        boxShadow: '0 12px 24px rgba(56, 189, 248, 0.2)',
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <Icon size={32} className="text-accent group-hover:text-accent-dark transition-colors" />
        <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 text-center transition-colors">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="section-padding bg-gradient-to-b from-slate-50 to-white"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={categoryVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="space-y-6"
                variants={categoryVariants}
              >
                <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.techs.map((tech, index) => (
                    <TechItem
                      key={tech.name}
                      tech={tech}
                      index={categoryIndex * category.techs.length + index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
