import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResultScreen = ({ route }) => {
    const navigation = useNavigation();
    const { score, totalQuestions } = route.params;

    const handlePlayAgain = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quiz Results</Text>
            <Text style={styles.score}>Score: {score} / {totalQuestions}</Text>
            <Button title="Play Again" onPress={handlePlayAgain} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    score: {
        fontSize: 18,
        marginBottom: 24,
    },
});

export default ResultScreen;