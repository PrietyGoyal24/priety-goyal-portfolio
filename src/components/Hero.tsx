
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    // Open resume in new tab
    window.open('/Resume.pdf', '_blank');
    
    // Also trigger download
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Priety_Goyal_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Priety Goyal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-300 mb-4"
            >
              Full Stack MERN Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              "Turning Ideas into Interactive Code" - Passionate about creating
              seamless web experiences with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold animate-glow transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/PrietyGoyal24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:glow-blue rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/prietygoyal05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:glow-blue rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:priety2023@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:glow-blue rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-xl"
                style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
              />
              <motion.img
                src="/lovable-uploads/be5098ac-de04-498a-8f53-e4c535ef3422.png"
                alt="Priety Goyal"
                className="w-80 h-80 rounded-full object-cover border-4 border-primary/30 shadow-2xl relative z-10"
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 10, 0, -10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 15,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                style={{ width: '130%', height: '130%', left: '-15%', top: '-15%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView()}
        >
          <ArrowDown className="text-primary h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
