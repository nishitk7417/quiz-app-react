// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import SummaryPage from './pages/SummaryPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/summary" element={<SummaryPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;