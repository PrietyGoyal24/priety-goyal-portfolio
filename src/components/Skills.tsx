
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Creating beautiful and interactive user interfaces',
      skills: [
        { 
          name: 'HTML5', 
          gradient: 'from-orange-500 to-red-500',
          icon: '🏗️',
          description: 'Semantic markup and modern web standards for accessible, well-structured web pages'
        },
        { 
          name: 'CSS3', 
          gradient: 'from-blue-500 to-cyan-400',
          icon: '🎨',
          description: 'Advanced styling, animations, flexbox, grid, and responsive design techniques'
        },
        { 
          name: 'JavaScript', 
          gradient: 'from-yellow-400 to-orange-500',
          icon: '⚡',
          description: 'ES6+ features, DOM manipulation, async/await, and modern JavaScript patterns'
        },
        { 
          name: 'React', 
          gradient: 'from-cyan-400 to-blue-500',
          icon: '⚛️',
          description: 'Component-based architecture, hooks, context API, and state management'
        },
        { 
          name: 'Redux', 
          gradient: 'from-purple-500 to-pink-500',
          icon: '🔄',
          description: 'Predictable state management for complex applications with middleware support'
        },
        { 
          name: 'Tailwind CSS', 
          gradient: 'from-teal-400 to-blue-500',
          icon: '💨',
          description: 'Utility-first CSS framework for rapid UI development and consistent design'
        },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs',
      skills: [
        { 
          name: 'Node.js', 
          gradient: 'from-green-500 to-emerald-500',
          icon: '🟢',
          description: 'Server-side JavaScript runtime for building scalable network applications'
        },
        { 
          name: 'Express.js', 
          gradient: 'from-gray-600 to-gray-800',
          icon: '🚀',
          description: 'Fast, unopinionated web framework for Node.js with middleware support'
        },
        { 
          name: 'MongoDB', 
          gradient: 'from-green-600 to-green-800',
          icon: '🍃',
          description: 'NoSQL database for flexible, document-based data storage and retrieval'
        },
        { 
          name: 'Firebase', 
          gradient: 'from-yellow-500 to-orange-600',
          icon: '🔥',
          description: 'Backend-as-a-Service platform with real-time database and authentication'
        },
      ],
    },
    {
      title: 'Development Tools',
      description: 'Essential tools for efficient development workflow',
      skills: [
        { 
          name: 'Git/GitHub', 
          gradient: 'from-gray-700 to-black',
          icon: '📚',
          description: 'Version control system for tracking changes and collaborative development'
        },
        { 
          name: 'Postman', 
          gradient: 'from-orange-500 to-red-500',
          icon: '📮',
          description: 'API development and testing platform for building and documenting APIs'
        },
        { 
          name: 'Data Structures', 
          gradient: 'from-purple-600 to-blue-600',
          icon: '🧠',
          description: 'Algorithms and data structures for efficient problem-solving approaches'
        },
        { 
          name: 'Responsive Design', 
          gradient: 'from-pink-500 to-purple-500',
          icon: '📱',
          description: 'Mobile-first approach ensuring optimal experience across all devices'
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section-spacing bg-gradient-to-b from-background to-card/30">
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
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Technical Skills
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My Tech{' '}
            <span className="text-gradient-accent">Arsenal</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies for building exceptional web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gradient-primary">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className={`glass-effect p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 group hover:glow-primary border border-border/50`}>
                          <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-2xl group-hover:animate-bounce">
                              {skill.icon}
                            </span>
                          </div>
                          
                          <div className="text-center">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      
                      <HoverCardContent className="w-80 glass-effect border-primary/20 bg-card/95 backdrop-blur-xl">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center`}>
                              <span className="text-xl">{skill.icon}</span>
                            </div>
                            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                              {skill.name}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                ))}
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
          <div className="glass-effect max-w-2xl mx-auto p-8 rounded-3xl border border-primary/20">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I stay current with the latest trends, 
              frameworks, and best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
