import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      description: 'Perfect for trying out StudyGenie',
      features: [
        'Basic study plans',
        '50 flashcards',
        '5 quizzes per month',
        'Basic analytics',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Pro',
      price: '₹199',
      period: '/month',
      description: 'Best for serious students',
      features: [
        'AI-powered study plans',
        'Unlimited flashcards',
        'Unlimited quizzes',
        'AI chat tutor',
        'Advanced analytics',
        'Priority support',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'default' as const,
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹399',
      period: '/month',
      description: 'For maximum learning potential',
      features: [
        'Everything in Pro',
        '1-on-1 tutoring sessions',
        'Custom study materials',
        'Exam preparation',
        'Progress reports for parents',
        'Priority support',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-spacing">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-3 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className={`w-full ${plan.popular ? 'bg-gradient-primary hover:opacity-90 text-white' : ''}`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;