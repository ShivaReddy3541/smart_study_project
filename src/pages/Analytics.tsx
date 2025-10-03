import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Clock, Target, Award, Flame } from "lucide-react";

const Analytics = () => {
  const weeklyData = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.2 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 4.1 },
    { day: "Fri", hours: 2.9 },
    { day: "Sat", hours: 3.5 },
    { day: "Sun", hours: 2.0 },
  ];

  const subjectPerformance = [
    { subject: "Mathematics", completed: 12, total: 15, color: "cyan", hours: 24 },
    { subject: "Physics", completed: 8, total: 12, color: "blue", hours: 16 },
    { subject: "Chemistry", completed: 10, total: 10, color: "green", hours: 18 },
    { subject: "English", completed: 5, total: 8, color: "orange", hours: 12 },
  ];

  const weeklyStats = {
    totalHours: 20.0,
    avgPerDay: 2.86,
    longestStreak: 5,
    tasksCompleted: 35,
    focusSessions: 12,
  };

  const maxHours = Math.max(...weeklyData.map(d => d.hours));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
            <BarChart3 className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Study <span className="text-primary">Analytics</span>
            </h1>
            <p className="text-muted-foreground">Track your progress and insights</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Weekly Hours</div>
              <Clock className="w-5 h-5 text-blue" />
            </div>
            <div className="text-3xl font-bold text-blue">{weeklyStats.totalHours}h</div>
            <div className="text-xs text-muted-foreground mt-1">
              Avg {weeklyStats.avgPerDay}h/day
            </div>
            <div className="flex items-center gap-1 mt-2 text-success text-sm">
              <TrendingUp className="w-4 h-4" />
              +15% from last week
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Tasks Completed</div>
              <Target className="w-5 h-5 text-green" />
            </div>
            <div className="text-3xl font-bold text-green">{weeklyStats.tasksCompleted}</div>
            <div className="text-xs text-muted-foreground mt-1">
              This week
            </div>
            <div className="flex items-center gap-1 mt-2 text-success text-sm">
              <TrendingUp className="w-4 h-4" />
              +8 from last week
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Focus Sessions</div>
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary">{weeklyStats.focusSessions}</div>
            <div className="text-xs text-muted-foreground mt-1">
              Deep focus time
            </div>
            <div className="flex items-center gap-1 mt-2 text-success text-sm">
              <TrendingUp className="w-4 h-4" />
              Great focus!
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">Current Streak</div>
              <Flame className="w-5 h-5 text-orange" />
            </div>
            <div className="text-3xl font-bold text-orange">{weeklyStats.longestStreak}</div>
            <div className="text-xs text-muted-foreground mt-1">
              Days in a row
            </div>
            <div className="flex items-center gap-1 mt-2 text-success text-sm">
              <TrendingUp className="w-4 h-4" />
              Keep it up!
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-6">Weekly Study Hours</h3>
            <div className="space-y-4">
              {weeklyData.map((data, index) => (
                <div key={data.day} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{data.day}</span>
                    <span className="text-muted-foreground">{data.hours}h</span>
                  </div>
                  <div className="relative h-8 bg-muted/30 rounded-lg overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-lg transition-all ${
                        index % 2 === 0 ? "bg-gradient-to-r from-primary to-primary/60" : "bg-gradient-to-r from-blue to-blue/60"
                      }`}
                      style={{ width: `${(data.hours / maxHours) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-6">Productivity Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-success/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Peak Performance</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your best study day is Thursday with 4.1 hours!
                </p>
              </div>

              <div className="p-4 bg-info/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-info" />
                  <span className="font-semibold text-info">Consistency</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  You've studied every day this week. Great habit!
                </p>
              </div>

              <div className="p-4 bg-warning/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-warning" />
                  <span className="font-semibold text-warning">Goal Progress</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  80% toward your 25h weekly goal
                </p>
                <Progress value={80} className="h-2 mt-2" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 rounded-2xl shadow-md">
          <h3 className="font-bold text-lg mb-6">Subject Performance</h3>
          <div className="space-y-6">
            {subjectPerformance.map((subject) => {
              const progress = Math.round((subject.completed / subject.total) * 100);
              
              return (
                <div key={subject.subject} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-${subject.color}`} />
                      <span className="font-semibold">{subject.subject}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-muted-foreground">
                        {subject.completed}/{subject.total} tasks
                      </div>
                      <div className="text-muted-foreground">
                        {subject.hours}h total
                      </div>
                      <div className="font-bold text-lg min-w-[3rem] text-right">
                        {progress}%
                      </div>
                    </div>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="mt-6 p-6 rounded-2xl shadow-md bg-gradient-to-br from-primary/10 to-purple-light/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Achievement Unlocked!</h3>
              <p className="text-muted-foreground mb-3">
                You've maintained a 5-day study streak and completed 35 tasks this week. Keep up the amazing work!
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                  🔥 Streak Master
                </div>
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  ⚡ Productivity Pro
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
