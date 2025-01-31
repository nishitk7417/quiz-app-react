import React, { useState, useEffect } from 'react';
import quizData from '../services/dataServices';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.questions.length).fill(null));
  const navigate = useNavigate();
  const question = quizData.questions[currentQuestionIndex];
  const [timeLeft, setTimeLeft] = useState(quizData.duration*60);

  // Timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Automatically submit the quiz when time runs out
      handleQuizCompletion();
    }
  }, [timeLeft]);

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Handle answer selection
  const handleAnswerSelect = (selectedAnswer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);
  };

  // Navigate to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Navigate to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  //quiz completion
  const handleQuizCompletion = () => {
    navigate('/summary', { state: { userAnswers } });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-[url("/Assets/background.jpg")]'>
      <div className='bg-white/20 p-6 m-5 rounded-lg shadow-lg backdrop-blur-sm max-w-md w-full'>
        <div className='flex justify-between items-center mb-2 text-gray-800'>
          <h2 className='text-2xl font-bold text-gray-800'>Question {currentQuestionIndex + 1}</h2>
          <div>
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>
        <p className='text-gray-300 mb-6'>{question.description}</p>
        <div className='space-y-3'>
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-3 text-left rounded-md transition border duration-200 cursor-pointer ${
                userAnswers[currentQuestionIndex] === option.description
                  ? 'bg-fuchsia-400 text-white'
                  : 'bg-fuchsia-900 text-white hover:bg-fuchsia-400' 
              }`}
              onClick={() => handleAnswerSelect(option.description)}
            >
              {option.description}
            </button>
          ))}
        </div>
        <div className='flex justify-between mt-6'>
          <Button text='Previous' onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}/>
          {currentQuestionIndex < quizData.questions.length - 1 ? (
            <Button text='Next' onClick={handleNextQuestion} />
          ) : (
            <button
              onClick={handleQuizCompletion}
              className='bg-fuchsia-500 text-white px-6 py-2 inline-block mt-6 border rounded-md hover:bg-fuchsia-600'
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;