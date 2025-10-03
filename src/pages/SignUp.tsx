import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-light via-background to-purple-light/50 p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-left p-8">
          <div className="inline-block px-4 py-2 bg-green/10 rounded-full text-green text-sm font-medium">
            ● 10,000+ Students Already Studying
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Smart Study <span className="text-primary">Planner</span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Transform your learning journey with <span className="text-primary font-semibold">AI-powered</span> study planning, focus tracking, and personalized insights that boost your success by <span className="text-success font-bold">300%</span>
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-card p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-info">98%</div>
              <div className="text-sm text-muted-foreground mt-2">Success Rate</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-success">5M+</div>
              <div className="text-sm text-muted-foreground mt-2">Study Hours</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground mt-2">User Rating</div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <div className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
              AI-Powered Scheduling
            </div>
            <div className="px-4 py-2 bg-info/10 text-info rounded-full text-sm font-medium">
              Deep Focus Mode
            </div>
            <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Achievement System
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-3xl shadow-2xl max-w-md w-full mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Join the Revolution</h2>
          <p className="text-center text-muted-foreground mb-6">Start your success story today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Enter your full name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Enter your email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Create password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm your password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <Button type="submit" className="w-full h-12 rounded-xl text-base font-semibold">
              Create My Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
