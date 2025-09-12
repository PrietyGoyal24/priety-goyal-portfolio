import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* CTA Section */}
      <div className="container-custom py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of students who are already achieving better results with StudyGenie
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-border">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-primary">StudyGenie</span>
            </div>

            {/* Copyright */}
            <div className="text-center text-muted-foreground">
              <p>&copy; 2024 StudyGenie. All rights reserved.</p>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;