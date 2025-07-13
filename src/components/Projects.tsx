
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Reebok Clone',
      description: 'E-commerce platform with Firebase authentication, advanced filtering, and responsive design. Features include product catalog, user authentication, and shopping cart functionality.',
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Firebase', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Prachigarg24/BestBuy-Clone.git',
      live: 'https://best-buy-clone-two.vercel.app/',
      features: ['Firebase Login', 'Product Filtering', 'Responsive Design'],
    },
    {
      title: 'Twitter Clone',
      description: 'Social media platform featuring real-time updates, social feed, and interactive user interface. Built with modern web technologies for seamless user experience.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/syedamaan7733/4436.git',
      live: 'https://4436-euiu.vercel.app/index.html',
      features: ['Real-time Updates', 'Social Feed', 'User Interactions'],
    },
    {
      title: 'Subscribly',
      description: 'Subscription management platform with modern UI design and backend integration. Features subscription tracking, user management, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/syedamaan7733/4436.git',
      live: 'https://4436-euiu.vercel.app/index.html',
      features: ['Subscription UI', 'Backend Integration', 'Analytics'],
    },
    {
      title: 'Voting App',
      description: 'Democratic voting platform with real-time vote counting and responsive layout. Secure voting system with user authentication and result visualization.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/syedamaan7733/4436.git',
      live: 'https://4436-euiu.vercel.app/index.html',
      features: ['Real-time Counting', 'Secure Voting', 'Responsive Layout'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden hover:glow-blue transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full flex items-center"
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
