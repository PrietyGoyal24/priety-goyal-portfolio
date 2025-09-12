
import { Users, TrendingUp, HelpCircle, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '50K+',
      label: 'Active Students',
      color: 'text-primary',
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Success Rate',
      color: 'text-success',
    },
    {
      icon: HelpCircle,
      number: '1M+',
      label: 'Questions Solved',
      color: 'text-secondary',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'AI Support',
      color: 'text-primary',
    },
  ];

  const highlights = [
    {
      title: 'Smart Learning',
      description: 'AI adapts to your learning style',
    },
    {
      title: 'Proven Results',
      description: '95% students improve grades',
    },
    {
      title: 'Personalized',
      description: 'Tailored to your pace and goals',
    },
    {
      title: 'Community',
      description: 'Learn with peers nationwide',
    },
  ];

  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                About StudyGenie
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                StudyGenie was born from a simple idea: every student deserves personalized, 
                intelligent tutoring that adapts to their unique learning style and pace.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our AI-powered platform combines the latest in educational technology with 
                proven learning methodologies to help Indian students excel in their studies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From CBSE to ICSE, from class 6 to class 12, we're here to make learning 
                more engaging, effective, and enjoyable.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-background/50 backdrop-blur border border-border/50">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="space-y-1">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
