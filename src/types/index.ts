export interface Flag {
    country: string;
    imagePath: string;
}

export interface QuizQuestion {
    flag: Flag;
    options: string[];
    correctAnswer: string;
}

export interface Score {
    playerName: string;
    points: number;
}

export interface GameState {
    currentQuestionIndex: number;
    score: number;
    questions: QuizQuestion[];
    isGameOver: boolean;
}