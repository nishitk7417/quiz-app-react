import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import quizData from '../services/dataServices';
import Button from '../components/Button/Button';

function SummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userAnswers = location.state.userAnswers;

  // Calculate total score
  const totalQuestions = quizData.questions.length;
  const correctAnswers = userAnswers.filter(
    (answer, index) =>
      answer === quizData.questions[index].options.find((opt) => opt.is_correct).description
  ).length;
  const score = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  const handleTryAgain = () => {
    navigate('/'); 
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-[url("/Assets/background.jpg")]'>
      <div className='bg-white/20 p-6 m-5 rounded-lg shadow-lg backdrop-blur-sm max-w-7xl w-full relative'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-gray-800'>Quiz Summary</h1>
            <Button onClick={handleTryAgain} text='Try again'  />
        </div>
        <p className='text-gray-700 mb-6'>
          You scored <strong>{score}%</strong>! ({correctAnswers} out of {totalQuestions} correct)
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {quizData.questions.map((question, index) => (
            <div key={index} className='bg-white/30 p-4 rounded-md'>
              <h3 className='font-semibold text-gray-800'>
                Question {index + 1}: {question.description}
              </h3>
              <p className='mt-2'>
                <strong>Your Answer:</strong>{' '}
                <span
                  className={
                    userAnswers[index] ===
                    quizData.questions[index].options.find((opt) => opt.is_correct).description
                      ? 'text-green-800'
                      : 'text-red-800'
                  }
                >
                  {userAnswers[index] || 'Not answered'}
                </span>
              </p>
              <p className='mt-1'>
                <strong>Correct Answer:</strong>{' '}
                <span className='text-green-800'>
                  {question.options.find((opt) => opt.is_correct).description}
                </span>
              </p>
              <p className='mt-2 text-sm text-gray-600'>
                <strong>Explanation:</strong> {question.detailed_solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;