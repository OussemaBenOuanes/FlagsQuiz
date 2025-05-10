export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const getRandomFlags = (flags, count) => {
    const shuffledFlags = shuffleArray([...flags]);
    return shuffledFlags.slice(0, count);
};

export const calculateScore = (correctAnswers, totalQuestions) => {
    return (correctAnswers / totalQuestions) * 100;
};