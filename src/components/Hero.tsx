
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
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
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Welcome to my digital space</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient-primary animate-gradient-shift bg-300% whitespace-nowrap">
                  Priety Goyal
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary">
                Full Stack MERN Developer
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                "Turning Ideas into Interactive Code" - Passionate about creating
                seamless web experiences with modern technologies and elegant design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 glow-primary shadow-2xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start pt-4"
            >
              {[
                { href: "https://github.com/PrietyGoyal24", icon: Github, color: "hover:text-primary" },
                { href: "https://linkedin.com/in/prietygoyal05", icon: Linkedin, color: "hover:text-secondary" },
                { href: "mailto:priety2023@gmail.com", icon: Mail, color: "hover:text-accent" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 glass-effect rounded-xl flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 group-hover:animate-pulse" />
                </motion.a>
              ))}
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
              {/* Animated background rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                style={{ width: '130%', height: '130%', left: '-15%', top: '-15%' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-secondary/20"
                style={{ width: '140%', height: '140%', left: '-20%', top: '-20%' }}
              />
              
              {/* Glowing orb */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl"
                style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
              />
              
              {/* Main image */}
              <motion.div
                className="relative z-10 glass-effect rounded-3xl p-2 glow-primary"
                animate={{ 
                  y: [0, -15, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/lovable-uploads/be5098ac-de04-498a-8f53-e4c535ef3422.png"
                  alt="Priety Goyal"
                  className="w-80 h-80 xl:w-96 xl:h-96 rounded-2xl object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-primary hover:glow-primary transition-all duration-300 group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
