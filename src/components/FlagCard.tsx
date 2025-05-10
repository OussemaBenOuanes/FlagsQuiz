import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface FlagCardProps {
  country: string;
  flagUri: string;
}

const FlagCard: React.FC<FlagCardProps> = ({ country, flagUri }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: flagUri }} style={styles.flagImage} />
      <Text style={styles.countryName}>{country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  flagImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  countryName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlagCard;