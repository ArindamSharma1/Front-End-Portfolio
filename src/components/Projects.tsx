import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
	{
		title: 'Learn Vista-Moodle LMS',
		image: './src/images/learn-vista.png',
		tech: ['React', 'JavaScript', 'CSS', 'API Integration'],
		description:
			'A Moodle LMS student portal with integrated with multiple languages support.',
		demo: 'https://example.com/learn-vista',
		repo: 'https://github.com/ArindamSharma1/learn-vista',
	},
	{
		title: 'Quantum QR',
		image: './src/images/Quantum-QR.png',
		tech: [
			'React',
			'JavaScript',
			'Vite',
			'Framer Motion',
			'CSS',
			'API Integration',
		],
		description:
			'Free QR code generator with customizable designs and real-time preview.',
		demo: 'https://quantum-qr-gold.vercel.app/',
		repo: 'https://github.com/ArindamSharma1/Quantum-QR',
	},
	{
		title: 'Cleanfolio-Portfolio Website',
		image: './src/images/portfolio-website.png',
		tech: ['React', 'Vite', 'GSAP', 'JavaScript', 'Responsive Design', 'CSS'],
		description:
			'Very Simple but effective & Modern, responsive portfolio website with smooth animations and scroll effects.',
		demo: 'https://frontend-portfolio-bice-alpha.vercel.app/',
		repo: 'https://github.com/ArindamSharma1/cleanfolio',
	},
	{
		title: 'JYC-JUIT Youth Club Website',
		image: './src/images/jyc-juit.png',
		tech: ['React', 'Chart.js', 'API Integration', 'Tailwind CSS', 'REST APIs'],
		description:
			'Helped creating official website for JUIT Youth Club featuring event management, member profiles, and activity tracking.',
		demo: 'https://jyc.co.in/',
		// repo: 'https://github.com/yourusername/jyc-juit',
	},
	{
		title: 'Helped Maintain University Website',
		image: './src/images/juit.png',
		tech: [
			'React',
			'API',
			'Geolocation',
			'Tailwind CSS',
			'PWA',
			'Service Workers',
			'IndexedDB',
		],
		description:
			'Helped maintain the university website by updating content and improving user experience.',
		demo: 'https://www.juit.ac.in/',
		// repo: 'https://github.com/yourusername/university-site',
	},
	{
		title: 'Framer Portfolio',
		image: './src/images/framer-portfolio.png',
		tech: ['Framer', 'Framer Motion', 'Spline', 'Responsive Design', 'Animations'],
		description:
			'A portfolio website built with Framer, showcasing projects with dynamic content and smooth animations.',
		demo: 'https://arindam-sharma.framer.website/',
		// repo: 'https://github.com/yourusername/framer-portfolio',
	},
];

const ProjectCard = ({
	project,
	index,
}: {
	project: (typeof projects)[0];
	index: number;
}) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: index * 0.1,
			},
		},
	};

	return (
		<motion.div
			className="group"
			variants={containerVariants}
			whileHover={{ y: -8 }}
		>
			<div className="relative rounded-xl overflow-hidden bg-slate-200 aspect-video shadow-lg">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
				/>

				<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
					<h3 className="text-xl md:text-2xl font-bold text-white mb-2">
						{project.title}
					</h3>
					<p className="text-slate-200 text-sm mb-4 line-clamp-2">
						{project.description}
					</p>
					<div className="flex items-center justify-between">
						<div className="flex flex-wrap gap-2">
							{project.tech.slice(0, 3).map((tech) => (
								<span
									key={tech}
									className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur"
								>
									{tech}
								</span>
							))}
						</div>
						<div className="flex items-center gap-2">
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-accent hover:bg-accent-dark transition-colors"
								aria-label={`Open ${project.title} demo`}
							>
								<ExternalLink size={16} className="text-white" />
							</a>
							<a
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
								aria-label={`Open ${project.title} repository`}
							>
								<Github size={16} className="text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4 space-y-2">
				<h3 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">
					{project.title}
				</h3>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export const Projects = () => {
	const { ref, inView } = useInView({
		threshold: 0.15,
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

	const headerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section
			id="projects"
			data-section="projects"
			className="section-padding bg-gradient-to-b from-white to-slate-50"
			ref={ref}
		>
			<div className="section-max-width">
				<motion.div
					className="space-y-12"
					variants={containerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					<motion.div variants={headerVariants}>
						<h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
							Featured Projects
						</h2>
						<div className="w-24 h-1 bg-accent rounded-full"></div>
					</motion.div>

					<motion.div
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={containerVariants}
					>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
