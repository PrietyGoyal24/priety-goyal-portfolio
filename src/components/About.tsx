
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Briefcase, Calendar } from 'lucide-react';

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
      description: 'Comprehensive MERN stack development program with hands-on projects',
      icon: <Code className="w-6 h-6" />,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      year: '2019-2023',
      title: 'Bachelor of Commerce (B.Com)',
      institution: 'Delhi University',
      description: 'Foundation in business and analytical thinking with strong academic performance',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
  ];

  const highlights = [
    { label: 'Projects Completed', value: '15+', icon: <Briefcase className="w-5 h-5" /> },
    { label: 'Years of Learning', value: '1+', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Technologies', value: '12+', icon: <Code className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Code className="w-4 h-4" />
            About Me
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Crafting Digital{' '}
            <span className="text-gradient-primary">Experiences</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient-primary">
                Full Stack MERN Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a passionate Full Stack Developer with expertise in the MERN stack,
                  dedicated to creating exceptional web experiences that blend functionality
                  with beautiful design.
                </p>
                
                <p className="text-lg">
                  My journey combines a strong business foundation from my B.Com degree
                  with cutting-edge technical skills acquired through intensive web
                  development training. I believe in writing clean, efficient code that
                  solves real-world problems.
                </p>
                
                <p className="text-lg">
                  I specialize in building responsive, user-friendly applications using
                  React, Node.js, Express, and MongoDB. My approach focuses on performance
                  optimization, scalable architecture, and seamless user experiences.
                </p>
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Frontend', tech: 'React, Redux, Tailwind CSS', gradient: 'from-primary to-secondary' },
                { title: 'Backend', tech: 'Node.js, Express, MongoDB', gradient: 'from-secondary to-accent' },
                { title: 'Tools', tech: 'Git, Postman, Firebase', gradient: 'from-accent to-primary' },
                { title: 'Skills', tech: 'DSA, Problem Solving', gradient: 'from-primary to-accent' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl hover:glow-primary transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.tech}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 bg-gradient-card p-4 rounded-xl border border-border/50"
                >
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Education & <span className="text-gradient-accent">Journey</span>
              </h3>
              <p className="text-muted-foreground">Building knowledge, one step at a time</p>
            </div>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="glass-effect p-8 rounded-2xl hover:glow-secondary transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                  
                  <div className="relative flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-muted-foreground font-medium">
                        {item.institution}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
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
