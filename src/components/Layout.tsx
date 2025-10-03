import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, LayoutDashboard, BookMarked, Calendar, BarChart3, LogOut, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/subjects", label: "Subjects", icon: BookMarked },
    { path: "/calendar", label: "Calendar", icon: Calendar },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary" style={{ fontFamily: 'cursive' }}>
              Smart Study Planner
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={isActive ? "bg-primary/10 text-primary" : ""}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            <Button variant="ghost" className="text-destructive hover:text-destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <Button
        className="fixed bottom-6 right-6 h-14 px-6 rounded-full shadow-2xl hover:shadow-primary/50 transition-all"
        size="lg"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Talk with Us
      </Button>
    </div>
  );
};

export default Layout;
