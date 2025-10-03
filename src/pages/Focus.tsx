import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Focus = () => {
  const navigate = useNavigate();
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [selectedFeeling, setSelectedFeeling] = useState("Okay");

  const durations = [15, 25, 45, 60];
  const feelings = ["Tired", "Okay", "Energetic"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-dark via-primary to-purple-dark flex flex-col items-center justify-center p-4 relative">
      <Button
        variant="ghost"
        className="absolute top-6 left-6 text-white hover:bg-white/10"
        onClick={() => navigate("/dashboard")}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Button>

      <div className="max-w-4xl w-full text-center space-y-12">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Deep Focus Mode
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Eliminate distractions and enter a state of deep concentration. Track your progress and build unstoppable focus habits.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">Choose Your Focus Duration</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedDuration === duration
                    ? "bg-warning/20 border-warning text-warning"
                    : "bg-white/5 border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <div className="text-4xl font-bold">{duration}</div>
                <div className="text-sm mt-2 opacity-80">minutes</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">How are you feeling?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {feelings.map((feeling) => (
              <button
                key={feeling}
                onClick={() => setSelectedFeeling(feeling)}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedFeeling === feeling
                    ? "bg-warning/20 border-warning text-warning"
                    : "bg-white/5 border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <div className="text-2xl font-bold">{feeling}</div>
              </button>
            ))}
          </div>
        </div>

        <Button
          size="lg"
          className="h-16 px-12 text-lg font-bold rounded-2xl bg-gradient-to-r from-warning via-orange to-destructive hover:shadow-2xl hover:shadow-warning/50 transition-all text-white border-0"
        >
          Start {selectedDuration} Minute Focus Session
        </Button>
      </div>
    </div>
  );
};

export default Focus;
