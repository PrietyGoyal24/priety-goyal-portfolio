
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-500' },
        { name: 'React', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'Redux', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-blue-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
        { name: 'Express.js', level: 75, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 78, color: 'from-green-600 to-green-800' },
        { name: 'Firebase', level: 70, color: 'from-yellow-500 to-orange-600' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 85, color: 'from-gray-700 to-black' },
        { name: 'Postman', level: 80, color: 'from-orange-500 to-red-500' },
        { name: 'DSA', level: 70, color: 'from-purple-600 to-blue-600' },
        { name: 'Responsive Design', level: 90, color: 'from-pink-500 to-purple-500' },
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
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
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
