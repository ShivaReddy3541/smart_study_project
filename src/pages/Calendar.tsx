import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StudySession {
  id: number;
  date: Date;
  subject: string;
  duration: number;
  completed: boolean;
  color: string;
}

const Calendar = () => {
  const { toast } = useToast();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [sessions, setSessions] = useState<StudySession[]>([
    {
      id: 1,
      date: new Date(2025, 8, 25, 10, 0),
      subject: "Mathematics",
      duration: 60,
      completed: true,
      color: "cyan",
    },
    {
      id: 2,
      date: new Date(2025, 8, 25, 14, 0),
      subject: "Physics",
      duration: 45,
      completed: false,
      color: "blue",
    },
    {
      id: 3,
      date: new Date(2025, 8, 26, 9, 0),
      subject: "Mathematics",
      duration: 90,
      completed: false,
      color: "cyan",
    },
    {
      id: 4,
      date: new Date(2025, 8, 27, 15, 0),
      subject: "Physics",
      duration: 60,
      completed: false,
      color: "blue",
    },
  ]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getSessionsForDate = (date: Date) => {
    return sessions.filter(session => 
      session.date.getDate() === date.getDate() &&
      session.date.getMonth() === date.getMonth() &&
      session.date.getFullYear() === date.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleAddSession = () => {
    toast({
      title: "Add Study Session",
      description: "Study session planning feature - click any date to schedule!",
    });
  };

  const toggleSessionComplete = (id: number) => {
    setSessions(sessions.map(s => 
      s.id === id ? { ...s, completed: !s.completed } : s
    ));
    toast({
      title: "Session Updated",
      description: "Study session marked as complete!",
    });
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);
  const days = [];

  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const today = new Date();
  const isToday = (day: number | null) => {
    if (!day) return false;
    return day === today.getDate() && 
           month === today.getMonth() && 
           year === today.getFullYear();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
            <CalendarIcon className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              Study <span className="text-primary">Calendar</span>
            </h1>
            <p className="text-muted-foreground">Plan your learning schedule</p>
          </div>
          <Button size="lg" className="rounded-xl" onClick={handleAddSession}>
            <Plus className="w-5 h-5 mr-2" />
            Add Study Session
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {monthNames[month]} {year}
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrevMonth}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNextMonth}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="text-center font-semibold text-sm text-muted-foreground p-2">
                  {day}
                </div>
              ))}

              {days.map((day, index) => {
                if (!day) {
                  return <div key={`empty-${index}`} className="aspect-square" />;
                }

                const date = new Date(year, month, day);
                const daySessions = getSessionsForDate(date);
                const hasSession = daySessions.length > 0;

                return (
                  <div
                    key={day}
                    className={`aspect-square p-2 rounded-xl border-2 transition-all cursor-pointer hover:border-primary ${
                      isToday(day)
                        ? "border-primary bg-primary/10"
                        : hasSession
                        ? "border-muted bg-muted/30"
                        : "border-transparent bg-muted/10"
                    }`}
                  >
                    <div className="text-sm font-semibold mb-1">{day}</div>
                    <div className="space-y-1">
                      {daySessions.slice(0, 2).map(session => (
                        <div
                          key={session.id}
                          className={`w-full h-1.5 rounded-full bg-${session.color}`}
                        />
                      ))}
                      {daySessions.length > 2 && (
                        <div className="text-xs text-muted-foreground">+{daySessions.length - 2}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Upcoming Sessions
              </h3>

              <div className="space-y-3">
                {sessions
                  .filter(s => s.date >= new Date() || isToday(s.date.getDate()))
                  .sort((a, b) => a.date.getTime() - b.date.getTime())
                  .slice(0, 5)
                  .map(session => (
                    <div
                      key={session.id}
                      className="p-3 bg-muted/30 rounded-xl cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleSessionComplete(session.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full bg-${session.color} mt-1 flex-shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold ${session.completed ? "line-through text-muted-foreground" : ""}`}>
                            {session.subject}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {session.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at{' '}
                            {session.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {session.duration} minutes
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-4">This Week's Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Sessions</span>
                  <span className="text-2xl font-bold text-primary">
                    {sessions.filter(s => {
                      const weekStart = new Date(today);
                      weekStart.setDate(today.getDate() - today.getDay());
                      const weekEnd = new Date(weekStart);
                      weekEnd.setDate(weekStart.getDate() + 7);
                      return s.date >= weekStart && s.date < weekEnd;
                    }).length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="text-2xl font-bold text-green">
                    {sessions.filter(s => s.completed).length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Study Hours</span>
                  <span className="text-2xl font-bold text-blue">
                    {Math.round(sessions.reduce((acc, s) => acc + s.duration, 0) / 60)}h
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
