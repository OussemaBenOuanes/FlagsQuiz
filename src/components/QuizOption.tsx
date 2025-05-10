import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface QuizOptionProps {
  option: string;
  onSelect: (selectedOption: string) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, onSelect }) => {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={() => onSelect(option)}>
      <Text style={styles.optionText}>{option}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default QuizOption;