import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, BookMarked, Edit, Trash, CheckCircle2 } from "lucide-react";
import { AddSubjectDialog } from "@/components/AddSubjectDialog";
import { AddTaskDialog } from "@/components/AddTaskDialog";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  deadline?: string;
}

interface Subject {
  id: number;
  name: string;
  description?: string;
  color: string;
  created: string;
  tasks: Task[];
}

const Subjects = () => {
  const { toast } = useToast();
  const [addSubjectOpen, setAddSubjectOpen] = useState(false);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [showTasks, setShowTasks] = useState<number | null>(null);
  
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: 1,
      name: "Mathematics",
      description: "Advanced calculus and algebra",
      color: "cyan",
      created: "25/09/2025",
      tasks: [
        { id: 1, title: "Complete Chapter 5", description: "Derivatives and integrals", completed: true },
        { id: 2, title: "Practice problems 1-20", description: "", completed: false },
      ],
    },
    {
      id: 2,
      name: "Physics",
      description: "Quantum mechanics fundamentals",
      color: "blue",
      created: "25/09/2025",
      tasks: [
        { id: 3, title: "Read Chapter 3", description: "Wave functions", completed: false },
      ],
    },
  ]);

  const handleAddSubject = (subjectData: { name: string; description: string; color: string }) => {
    const newSubject: Subject = {
      id: Date.now(),
      name: subjectData.name,
      description: subjectData.description,
      color: subjectData.color,
      created: new Date().toLocaleDateString('en-GB'),
      tasks: [],
    };
    setSubjects([...subjects, newSubject]);
  };

  const handleDeleteSubject = (id: number, name: string) => {
    setSubjects(subjects.filter(s => s.id !== id));
    toast({
      title: "Subject Deleted",
      description: `${name} has been removed`,
    });
  };

  const handleAddTask = (task: { title: string; description: string; deadline: string }) => {
    if (!selectedSubject) return;

    const newTask: Task = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      completed: false,
      deadline: task.deadline,
    };

    setSubjects(subjects.map(s => 
      s.id === selectedSubject.id 
        ? { ...s, tasks: [...s.tasks, newTask] }
        : s
    ));
  };

  const handleToggleTask = (subjectId: number, taskId: number) => {
    setSubjects(subjects.map(s => 
      s.id === subjectId
        ? {
            ...s,
            tasks: s.tasks.map(t =>
              t.id === taskId ? { ...t, completed: !t.completed } : t
            ),
          }
        : s
    ));
  };

  const getSubjectStats = (subject: Subject) => {
    const total = subject.tasks.length;
    const completed = subject.tasks.filter(t => t.completed).length;
    const pending = total - completed;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, pending, progress };
  };

  const totalStats = subjects.reduce(
    (acc, subject) => {
      const stats = getSubjectStats(subject);
      return {
        totalTasks: acc.totalTasks + stats.total,
        completed: acc.completed + stats.completed,
        pending: acc.pending + stats.pending,
      };
    },
    { totalTasks: 0, completed: 0, pending: 0 }
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
            <BookMarked className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              Your Study <span className="text-primary">Subjects</span>
            </h1>
            <p className="text-muted-foreground">Organize and manage your learning journey</p>
          </div>
          <Button size="lg" className="rounded-xl" onClick={() => setAddSubjectOpen(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Add New Subject
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-2xl shadow-md">
            <div className="text-sm text-muted-foreground mb-1">Total Subjects</div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-primary">{subjects.length}</div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-xl"></div>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <div className="text-sm text-muted-foreground mb-1">Total Tasks</div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-blue">{totalStats.totalTasks}</div>
              <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-blue rounded-xl"></div>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <div className="text-sm text-muted-foreground mb-1">Completed</div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-green">{totalStats.completed}</div>
              <div className="w-14 h-14 bg-green/10 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-green rounded-xl"></div>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-md">
            <div className="text-sm text-muted-foreground mb-1">In Progress</div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-orange">{totalStats.pending}</div>
              <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-orange rounded-xl"></div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => {
            const stats = getSubjectStats(subject);
            const isExpanded = showTasks === subject.id;

            return (
              <Card key={subject.id} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${subject.color}/10 rounded-xl flex items-center justify-center`}>
                      <div className={`w-8 h-8 bg-${subject.color} rounded-lg`}></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{subject.name}</h3>
                      <p className="text-xs text-muted-foreground">Created {subject.created}</p>
                    </div>
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-8 w-8 text-destructive"
                    onClick={() => handleDeleteSubject(subject.id, subject.name)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>

                {subject.description && (
                  <p className="text-sm text-muted-foreground mb-4">{subject.description}</p>
                )}

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-2xl font-bold">{stats.progress}%</span>
                  </div>
                  <Progress value={stats.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{stats.total}</div>
                    <div className="text-xs text-muted-foreground">Total Tasks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green">{stats.completed}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange">{stats.pending}</div>
                    <div className="text-xs text-muted-foreground">Pending</div>
                  </div>
                </div>

                {isExpanded && subject.tasks.length > 0 && (
                  <div className="mb-4 space-y-2 max-h-48 overflow-y-auto">
                    {subject.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start gap-2 p-2 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50"
                        onClick={() => handleToggleTask(subject.id, task.id)}
                      >
                        <CheckCircle2
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            task.completed ? "text-green fill-green/20" : "text-muted-foreground"
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                            {task.title}
                          </div>
                          {task.description && (
                            <div className="text-xs text-muted-foreground">{task.description}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    className="rounded-xl"
                    onClick={() => setShowTasks(isExpanded ? null : subject.id)}
                  >
                    {isExpanded ? "Hide" : "View"} Tasks
                  </Button>
                  <Button 
                    className={`rounded-xl bg-${subject.color} hover:bg-${subject.color}/90 text-white`}
                    onClick={() => {
                      setSelectedSubject(subject);
                      setAddTaskOpen(true);
                    }}
                  >
                    Add Task
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {subjects.length === 0 && (
          <Card className="p-12 rounded-2xl shadow-md text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookMarked className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">No Subjects Yet</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Start organizing your learning journey by adding your first subject.
            </p>
            <Button size="lg" onClick={() => setAddSubjectOpen(true)}>
              <Plus className="w-5 h-5 mr-2" />
              Add Your First Subject
            </Button>
          </Card>
        )}
      </div>

      <AddSubjectDialog
        open={addSubjectOpen}
        onOpenChange={setAddSubjectOpen}
        onAddSubject={handleAddSubject}
      />

      {selectedSubject && (
        <AddTaskDialog
          open={addTaskOpen}
          onOpenChange={setAddTaskOpen}
          subjectName={selectedSubject.name}
          onAddTask={handleAddTask}
        />
      )}
    </Layout>
  );
};

export default Subjects;
