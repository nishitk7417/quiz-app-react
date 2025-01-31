import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../services/dataServices";
import Button from "../components/Button/Button";

function HomePage() {
    const [countdown, setCountdown] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCounting && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      
      return () => clearTimeout(timer);
    } else if (isCounting && countdown === 0) {
      navigate("/quiz"); 
    }
  }, [countdown, isCounting, navigate]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/Assets/background.jpg')]">
      <div className="text-center p-8 rounded-2xl shadow-lg bg-opacity-20 backdrop-blur-md w-full max-w-md border border-white/30">
        <h1 className="text-4xl text-white font-extrabold drop-shadow-lg">Quiz Time! 🧠</h1>
        <p className="text-lg text-gray-200 mt-3 mb-6">
          Test your knowledge and challenge yourself!
        </p>
        <div className="bg-white/10 flex flex-col gap-1 p-4 rounded-lg text-white">
          <p className="text-lg font-semibold">{quizData.title}</p>
          <p className="text-sm">Topic: <span className="font-medium">{quizData.topic}</span></p>
          <p className="text-sm">⏳ Duration: <span className="font-medium">{quizData.duration} min</span></p>
          <p className="text-sm text-green-300">✅ Correct Answer Marks: <span className="font-medium">{quizData.correct_answer_marks}</span></p>
          <p className="text-sm text-red-300">❌ Negative Marks: <span className="font-medium">{quizData.negative_marks}</span></p>
        </div>
        {isCounting ? (
          <p className="text-2xl text-yellow-300 font-bold mt-4">Starting in {countdown}...</p>
        ) : (
          <Button text="Start Quiz" onClick={() => setIsCounting(true)}/>
        )}
      </div>
    </div>
  );
}

export default HomePage;
