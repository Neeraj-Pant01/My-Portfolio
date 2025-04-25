import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profilePic from '../assets/me.jpg';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center text-white mb-6">
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              {/* <SpotlightCard className="h-64 md:h-80 overflow-hidden" spotlightColor="rgba(0, 229, 255, 0.2)">
                <img src={profilePic} alt="Your Name" className="w-full h-full object-cover" />
              </SpotlightCard> */}
              <TiltedCard
                imageSrc={profilePic}
                altText="Neeraj Pant - DEV"
                captionText="Neeraj Pant - DEV"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Neeraj Pant - DEV
                  </p>
                }
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SpotlightCard className="p-8 h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate web developer with a knack for crafting interactive and engaging user experiences.
                  With expertise in React, TypeScript, Tailwind CSS, and Vite, I build modern, performant web applications
                  that delight users and drive results. I love bringing ideas to life with code and continuously learning
                  new technologies to stay at the forefront of web development.
                </p>
              </SpotlightCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 