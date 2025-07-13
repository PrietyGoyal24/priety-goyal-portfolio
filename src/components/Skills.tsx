
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { 
          name: 'HTML5', 
          color: 'from-orange-500 to-red-500',
          icon: '🏗️',
          description: 'Semantic markup and modern web standards'
        },
        { 
          name: 'CSS3', 
          color: 'from-blue-500 to-cyan-500',
          icon: '🎨',
          description: 'Advanced styling, animations, and responsive design'
        },
        { 
          name: 'JavaScript', 
          color: 'from-yellow-400 to-orange-500',
          icon: '⚡',
          description: 'ES6+, DOM manipulation, and modern JS features'
        },
        { 
          name: 'React', 
          color: 'from-cyan-400 to-blue-500',
          icon: '⚛️',
          description: 'Component-based UI development and hooks'
        },
        { 
          name: 'Redux', 
          color: 'from-purple-500 to-pink-500',
          icon: '🔄',
          description: 'State management for complex applications'
        },
        { 
          name: 'Tailwind CSS', 
          color: 'from-teal-400 to-blue-500',
          icon: '💨',
          description: 'Utility-first CSS framework for rapid UI development'
        },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { 
          name: 'Node.js', 
          color: 'from-green-500 to-emerald-500',
          icon: '🟢',
          description: 'Server-side JavaScript runtime environment'
        },
        { 
          name: 'Express.js', 
          color: 'from-gray-600 to-gray-800',
          icon: '🚀',
          description: 'Fast, minimalist web framework for Node.js'
        },
        { 
          name: 'MongoDB', 
          color: 'from-green-600 to-green-800',
          icon: '🍃',
          description: 'NoSQL database for modern applications'
        },
        { 
          name: 'Firebase', 
          color: 'from-yellow-500 to-orange-600',
          icon: '🔥',
          description: 'Backend-as-a-Service platform by Google'
        },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { 
          name: 'Git/GitHub', 
          color: 'from-gray-700 to-black',
          icon: '📚',
          description: 'Version control and collaborative development'
        },
        { 
          name: 'Postman', 
          color: 'from-orange-500 to-red-500',
          icon: '📮',
          description: 'API development and testing platform'
        },
        { 
          name: 'DSA', 
          color: 'from-purple-600 to-blue-600',
          icon: '🧠',
          description: 'Data Structures and Algorithms'
        },
        { 
          name: 'Responsive Design', 
          color: 'from-pink-500 to-purple-500',
          icon: '📱',
          description: 'Mobile-first and cross-device compatibility'
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern web development technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-effect p-6 rounded-xl hover:glow-blue transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gradient">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
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
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white text-center cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg group`}>
                          <div className="text-2xl mb-2 group-hover:animate-bounce">
                            {skill.icon}
                          </div>
                          <div className="text-xs font-medium">
                            {skill.name}
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 glass-effect border-primary/20">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <Badge variant="outline" className="text-primary border-primary">
                              {skill.name}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-300">
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
      </div>
    </section>
  );
};

export default Skills;
