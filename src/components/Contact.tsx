
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
    });
    reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'priety2023@gmail.com',
      link: 'mailto:priety2023@gmail.com',
      gradient: 'from-primary to-secondary',
      hoverColor: 'hover:text-primary'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 7701972907',
      link: 'tel:+917701972907',
      gradient: 'from-secondary to-accent',
      hoverColor: 'hover:text-secondary'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Delhi, India',
      link: '#',
      gradient: 'from-accent to-primary',
      hoverColor: 'hover:text-accent'
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/PrietyGoyal24',
      gradient: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:text-primary'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/prietygoyal05',
      gradient: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:text-secondary'
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-card/50 to-background">
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Create Something{' '}
            <span className="text-gradient-primary">Amazing</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 xl:gap-16">
          {/* Contact Info - Takes up 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="xl:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient-accent mb-8">
                Let's Connect
              </h3>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-effect p-6 rounded-2xl hover:glow-primary transition-all duration-300 group border border-border/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <a
                          href={info.link}
                          className={`text-muted-foreground ${info.hoverColor} transition-colors duration-300 hover:underline`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">Follow My Journey</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className={`w-16 h-16 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow-secondary group`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="group-hover:animate-pulse">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-effect p-6 rounded-2xl border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Projects</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently accepting new projects and collaboration opportunities. 
                Let's build something extraordinary together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - Takes up 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="xl:col-span-3"
          >
            <div className="glass-effect p-8 lg:p-10 rounded-3xl border border-border/50">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gradient-primary mb-2">
                  Send Me a Message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input
                      placeholder="Your Name"
                      {...register('name', { required: 'Name is required' })}
                      className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name.message as string}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email.message as string}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject *</label>
                  <Input
                    placeholder="What's this about?"
                    {...register('subject', { required: 'Subject is required' })}
                    className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
                  />
                  {errors.subject && (
                    <p className="text-destructive text-xs mt-1">{errors.subject.message as string}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className="bg-background/50 border-border/50 focus:border-primary rounded-xl text-foreground placeholder:text-muted-foreground resize-none"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message.message as string}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300 glow-primary shadow-2xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
