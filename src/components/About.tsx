
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      year: '2025',
      title: 'Full Stack Web Development',
      institution: 'Masai School',
      description: 'Comprehensive MERN stack development program',
      icon: <Code className="w-6 h-6" />,
    },
    {
      year: '2019-2023',
      title: 'Bachelor of Commerce (B.Com)',
      institution: 'Delhi University',
      description: 'Foundation in business and analytical thinking',
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gradient">
              Full Stack MERN Developer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in the MERN stack,
              dedicated to creating exceptional web experiences. My journey combines
              a strong business foundation from my B.Com degree with cutting-edge
              technical skills acquired through intensive web development training.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in building responsive, user-friendly applications using
              React, Node.js, Express, and MongoDB. My approach focuses on clean code,
              optimal performance, and seamless user experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                <p className="text-sm text-gray-400">React, Redux, Tailwind CSS</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Backend</h4>
                <p className="text-sm text-gray-400">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Education & <span className="text-gradient">Journey</span>
            </h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="glass-effect p-6 rounded-lg hover:glow-blue transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold mb-1">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
