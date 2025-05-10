import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import FlagCard from '../components/FlagCard';
import ScoreBoard from '../components/ScoreBoard';
import QuizOption from '../components/QuizOption';
import useGame from '../hooks/useGame';
import flagsData from '../data/flags';

const GameScreen = () => {
    const { currentQuestion, score, nextQuestion, checkAnswer } = useGame(flagsData);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (currentQuestion) {
            setOptions(generateOptions(currentQuestion));
        }
    }, [currentQuestion]);

    const generateOptions = (correctFlag) => {
        const shuffledFlags = [...flagsData].sort(() => 0.5 - Math.random());
        const options = shuffledFlags.slice(0, 3).concat(correctFlag);
        return options.sort(() => 0.5 - Math.random());
    };

    return (
        <View style={styles.container}>
            <ScoreBoard score={score} />
            {currentQuestion && (
                <>
                    <FlagCard flag={currentQuestion.flag} />
                    <Text style={styles.questionText}>Which country does this flag belong to?</Text>
                    {options.map((option, index) => (
                        <QuizOption
                            key={index}
                            option={option}
                            onPress={() => checkAnswer(option)}
                        />
                    ))}
                    <Button title="Next" onPress={nextQuestion} />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    questionText: {
        fontSize: 18,
        marginVertical: 20,
    },
});

export default GameScreen;