
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'StudyGenie – AI-Powered Study Companion',
      description: 'Designed an intelligent study assistant where students can input syllabus topics and deadlines to get per-sonalized plans',
      image: 'https://tse1.mm.bing.net/th/id/OIP.841O6KJV3qkkeGbJbqPgdAHaEL?pid=Api&P=0&h=220',
      tech: ['React', 'Tailwind', 'TypeScript', 'React Router Dom'],
      github: 'https://github.com/PrietyGoyal24/StudyGenie-AI-Project.git',
      live: 'https://study-genie-ai-project.vercel.app/',
      features: ['AI-powered personalized study plans', 'Custom quiz generation based on topics', 'Responsive Design', 'Mobile-first responsive design'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Twitter Clone',
      description: 'A dynamic social media platform with real-time updates, interactive feed, and modern UI components built with MERN stack technologies.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Dayapal/Twitter-clone.git',
      live: 'https://fantastic-marigold-1240c3.netlify.app/',
      features: ['Real-time Updates', 'Social Feed', 'User Interactions', 'Responsive UI'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Subscribly',
      description: 'Modern subscription management platform with intuitive dashboard, backend integration, and comprehensive analytics for subscription tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/PrietyGoyal24/subscribly-project-subscription-hub-.git',
      live: 'https://subscribly-project-subscription-hub.vercel.app/',
      features: ['Subscription UI', 'Backend Integration', 'Analytics Dashboard', 'User Management'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Voting App',
      description: 'Secure democratic voting platform with real-time vote counting, user authentication, and comprehensive result visualization with responsive design.',
      image: 'https://media.istockphoto.com/id/1226950630/photo/concept-for-electronic-or-internet-voting-concept.jpg?s=612x612&w=0&k=20&c=TQOa7Oh7Ox6s_WU53CzdR5RKlutwpyXS5C0_21N8_k4=',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/PrietyGoyal24/Voting-App.git',
      live: 'https://voting-website-right-now.vercel.app/',
      features: ['Real-time Counting', 'Secure Voting', 'Result Analytics', 'Mobile Responsive'],
      gradient: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="projects" className="section-spacing bg-gradient-to-b from-card/30 via-background to-card/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            Featured Work
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My Latest{' '}
            <span className="text-gradient-accent">Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical capabilities and creative problem-solving through real-world applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-effect rounded-3xl overflow-hidden hover:glow-primary transition-all duration-500 border border-border/50 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating action buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-secondary hover:text-white hover:bg-secondary transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8 space-y-6">
                  {/* Title and Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gradient-primary group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gradient-card text-foreground px-3 py-1 rounded-full border border-border/50 hover:border-secondary/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 rounded-xl font-semibold"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-2 border-secondary/30 text-secondary hover:bg-secondary/10 hover:scale-105 transition-all duration-300 rounded-xl font-semibold"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="glass-effect max-w-2xl mx-auto p-8 rounded-3xl border border-accent/20">
            <h3 className="text-2xl font-bold text-gradient-accent mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm constantly working on new projects and experimenting with cutting-edge technologies. 
              Check back regularly for updates!
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-accent to-secondary text-white hover:scale-105 transition-all duration-300 rounded-xl px-8 py-3"
            >
              <a
                href="https://github.com/PrietyGoyal24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View All Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
