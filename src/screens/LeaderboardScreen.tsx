import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const LeaderboardScreen = () => {
    const leaderboardData = [
        { id: '1', name: 'Alice', score: 150 },
        { id: '2', name: 'Bob', score: 120 },
        { id: '3', name: 'Charlie', score: 100 },
        // Add more sample data as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
            <FlatList
                data={leaderboardData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontSize: 18,
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LeaderboardScreen;