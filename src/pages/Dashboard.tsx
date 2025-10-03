import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Flame, Clock, BookMarked, ListTodo, Lightbulb, 
  Plus, Calendar, BarChart3, Target
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showFocusTimer, setShowFocusTimer] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, <span className="text-primary">Egunoor Shivashankar Reddy</span>!
            </h1>
            <p className="text-muted-foreground">Ready to dominate your studies today?</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Current Time</div>
            <div className="text-2xl font-bold">00:35</div>
            <div className="text-sm text-muted-foreground">Today's Date</div>
            <div className="font-semibold">25 Sept</div>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 mb-8 rounded-2xl shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Daily Motivation</h3>
              <p className="text-primary-foreground/90">
                Success is the sum of small efforts repeated day in and day out.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Study Streak</div>
                <div className="text-4xl font-bold text-orange">1</div>
                <div className="text-sm text-muted-foreground">days in a row</div>
              </div>
              <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center">
                <Flame className="w-7 h-7 text-orange" />
              </div>
            </div>
            <p className="text-sm text-success font-medium">Keep going!</p>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">This Week</div>
                <div className="text-4xl font-bold text-blue">0h</div>
                <div className="text-sm text-muted-foreground">study time</div>
              </div>
              <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-blue" />
              </div>
            </div>
            <p className="text-sm text-info font-medium">Great pace!</p>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Active Subjects</div>
                <div className="text-4xl font-bold text-green">2</div>
                <div className="text-sm text-muted-foreground">subjects</div>
              </div>
              <div className="w-14 h-14 bg-green/10 rounded-2xl flex items-center justify-center">
                <BookMarked className="w-7 h-7 text-green" />
              </div>
            </div>
            <p className="text-sm text-success font-medium">Well organized</p>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Pending Tasks</div>
                <div className="text-4xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">tasks</div>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <ListTodo className="w-7 h-7 text-primary" />
              </div>
            </div>
            <p className="text-sm text-primary font-medium">Let's focus!</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Today's Focus</h3>
                  <p className="text-sm text-muted-foreground">Your priority tasks for maximum impact</p>
                </div>
              </div>
              <Button onClick={() => navigate("/focus")} className="rounded-xl">
                Start Focus Mode
              </Button>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-12 bg-green rounded-full"></div>
              </div>
              <h4 className="font-bold text-lg mb-2">All Caught Up!</h4>
              <p className="text-muted-foreground mb-4">No tasks scheduled for today. You're ahead of the game!</p>
              <Button variant="outline" className="rounded-xl">Plan Tomorrow</Button>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Upcoming Deadlines</h3>
                <p className="text-sm text-muted-foreground">Stay on track</p>
              </div>
            </div>

            <div className="text-center py-12">
              <p className="text-muted-foreground">No upcoming deadlines</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 rounded-2xl shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
                <BookMarked className="w-6 h-6 text-blue" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Subject Progress</h3>
                <p className="text-sm text-muted-foreground">Track your mastery across all subjects</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
              <div className="w-10 h-10 bg-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-cyan rounded"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold">msdfgh</div>
                    <div className="text-xs text-muted-foreground">0 of 0 tasks completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">0%</div>
                    <div className="text-xs text-muted-foreground">complete</div>
                  </div>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
              <div className="w-10 h-10 bg-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-cyan rounded"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold">fsss</div>
                    <div className="text-xs text-muted-foreground">0 of 0 tasks completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">0%</div>
                    <div className="text-xs text-muted-foreground">complete</div>
                  </div>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="mt-6 p-6 rounded-2xl shadow-md bg-gradient-to-br from-secondary to-muted">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Quick Actions
          </h3>
          <p className="text-sm text-muted-foreground mb-4">Boost productivity</p>
          
          <div className="grid md:grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start h-auto py-3 rounded-xl bg-card" onClick={() => navigate("/subjects")}>
              <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center mr-3">
                <Plus className="w-5 h-5 text-blue" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Add New Subject</div>
                <div className="text-xs text-muted-foreground">Expand your learning</div>
              </div>
            </Button>

            <Button variant="outline" className="justify-start h-auto py-3 rounded-xl bg-card" onClick={() => navigate("/focus")}>
              <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center mr-3">
                <Target className="w-5 h-5 text-green" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Start Focus Session</div>
                <div className="text-xs text-muted-foreground">Deep work mode</div>
              </div>
            </Button>

            <Button variant="outline" className="justify-start h-auto py-3 rounded-xl bg-card" onClick={() => navigate("/calendar")}>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">View Calendar</div>
                <div className="text-xs text-muted-foreground">Plan your week</div>
              </div>
            </Button>

            <Button variant="outline" className="justify-start h-auto py-3 rounded-xl bg-card" onClick={() => navigate("/analytics")}>
              <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="w-5 h-5 text-orange" />
              </div>
              <div className="text-left">
                <div className="font-semibold">View Analytics</div>
                <div className="text-xs text-muted-foreground">Track progress</div>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
