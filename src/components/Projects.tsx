import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpotlightCard from './SpotlightCard';
import GradientText from './GradientText';

const projects = [
  {
    title: 'EkisanDarshan',
    description: 'eKisan Darshan is a digital platform for farmers.It provides real-time farming insights and expert guidance.Farmers can access market rates and government schemes.Empowering agriculture through technology and knowledge.',
    technologies: ['NextJs', 'Node.js', 'Firebase'],
    image: 'p1.png',
    link: 'https://ekisandarshan.in/',
  },
  {
    title: 'Favouser',
    description: "Favouser is an e-commerce platform for stylish t-shirts and accessories.It offers a smooth shopping experience with modern UI.Features include product browsing, filtering, and secure checkout.",
    technologies: ['TypeScript', 'Express', 'Mongodb', 'ReactJs'],
    image: 'p2.png',
    link: 'https://favouserauthentic.netlify.app/',
  },
  {
    title: 'Teachercool',
    description: 'Teachercool is an all-in-one online learning platform for students.Students can buy courses, attend classes, and track progress.Features include attendance, assignments, and performance insights for seamless digital education.',
    technologies: ['ReactJs', 'Tailwind CSS', 'Python', 'RazorPay Payment Integration'],
    image: 'p3.png',
    link: 'https://teachercool.com/',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <SpotlightCard
                  className="h-full"
                  spotlightColor={`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`}
                >
                  <div className="flex flex-col h-full">
                    <div className="h-48 bg-gray-700 rounded-lg overflow-hidden mb-4">
                      {/* Replace with actual project image */}
                      <img src={project?.image} className="w-full h-full bg-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      target='_blank'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
                    >
                      View Project
                    </motion.a>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class mt-3"
          >
          <a href='https://github.com/Neeraj-Pant01' target='blank' className='float-right underline'>{"<<"} More {">>"}</a>
          </GradientText>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 