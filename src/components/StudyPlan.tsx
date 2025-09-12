import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CheckCircle2, Circle, BookOpen } from 'lucide-react';

const StudyPlan = () => {
  const studyTasks = [
    { name: 'Algebra Basics', completed: true },
    { name: 'Quadratic Equations', completed: true },
    { name: 'Practice Quiz', completed: false },
  ];

  return (
    <Card className="study-plan-card border-success/20 max-w-md mx-auto lg:mx-0">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-success" />
          </div>
          <CardTitle className="text-lg font-semibold">Today's Plan</CardTitle>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span className="font-medium text-success">Mathematics</span>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>2 hours</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {studyTasks.map((task, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-success/5 transition-colors">
            {task.completed ? (
              <CheckCircle2 className="w-5 h-5 text-success" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground" />
            )}
            <span className={`flex-1 ${task.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
              {task.name}
            </span>
          </div>
        ))}
        
        <div className="pt-2 border-t border-success/10">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-success">2/3 completed</span>
          </div>
          <div className="mt-2 w-full bg-muted rounded-full h-2">
            <div className="bg-gradient-success h-2 rounded-full" style={{ width: '66%' }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyPlan;