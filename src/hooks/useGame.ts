import { useState, useEffect } from 'react';
import { flagsData } from '../data/flags';

const useGame = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const shuffledFlags = flagsData.sort(() => Math.random() - 0.5);
        setQuestions(shuffledFlags);
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setGameOver(false);
        const shuffledFlags = flagsData.sort(() => Math.random() - 0.5);
        setQuestions(shuffledFlags);
    };

    return {
        score,
        currentQuestion: questions[currentQuestionIndex],
        gameOver,
        handleAnswer,
        resetGame,
    };
};

export default useGame;