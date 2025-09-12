import { Brain, CreditCard, Trophy, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Smart study plans generated based on your learning style and goals',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: CreditCard,
      title: 'Interactive Flashcards',
      description: 'Spaced repetition system for better retention and memory',
      gradient: 'from-secondary to-primary',
    },
    {
      icon: Trophy,
      title: 'Gamified Quizzes',  
      description: 'Fun quizzes and challenges to test your knowledge',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Track your progress and identify areas for improvement',
      gradient: 'from-secondary to-primary',
    },
  ];

  return (
    <section id="features" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for Indian students to master their subjects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;