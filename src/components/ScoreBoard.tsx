import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreBoard = ({ score, totalQuestions }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.scoreText}>Score: {score}</Text>
            <Text style={styles.totalText}>Total Questions: {totalQuestions}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    scoreText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: 18,
        color: '#6c757d',
    },
});

export default ScoreBoard;