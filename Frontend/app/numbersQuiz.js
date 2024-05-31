import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NumberQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [optionMessageVisible, setOptionMessageVisible] = useState(false);

  const questions = [
    {
      question: "Find 8.",
      options: [
        { option: 8, correct: true },
        { option: 6, correct: false },
        { option: 18, correct: false },
        { option: 80, correct: false },
      ],
    },
    {
      question: "Find 23.",
      options: [
        { option: 33, correct: false },
        { option: 43, correct: false },
        { option: 23, correct: true },
        { option: 28, correct: false },
      ],
    },
    {
      question: "Find 100.",
      options: [
        { option: 10, correct: false },
        { option: 1000, correct: false },
        { option: 100, correct: true },
        { option: 0, correct: false },
      ],
    },
  ];

  const increment = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    setOptionMessageVisible(false);
  };

  const decrement = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }

    setOptionMessageVisible(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option.correct) {
      setShowCorrectAnswer(false);
    } else {
      setShowCorrectAnswer(true);
    }

    setOptionMessageVisible(true)
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <>
            <View style={styles.upperHalf}>
              <Text style={styles.questionText}>
                {questions[currentQuestion].question}
              </Text>
            </View>
            <View style={styles.cover}>
              <Pressable
                onPress={() => {
                  decrement();
                }}
              >
                <Image
                  style={{
                    resizeMode: "center",
                    width: 50,
                    height: 50,
                    flexDirection: "row",
                  }}
                  source={require("../assets/leftArrow.png")}
                />
              </Pressable>
              <Pressable onPress={increment}>
                <Image
                  style={{
                    resizeMode: "center",
                    width: 50,
                    height: 50,
                    flexDirection: "row",
                  }}
                  source={require("../assets/rightArrow.png")}
                />
              </Pressable>
            </View>
            <View style={styles.lowerHalf}>
              {questions[currentQuestion].options.map((option, index) => (
                <Pressable
                  key={index}
                  style={[
                    selectedOption === option && option.correct ? styles.correctOption : null,
                    selectedOption === option && !option.correct ? styles.incorrectOption : null,
                    styles.optionCard
                  ]}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedOption === option
                        ? styles.selectedOptionText
                        : {},
                    ]}
                  >
                    {option.option}
                  </Text>
                </Pressable>
              ))}
            </View>
            {showCorrectAnswer && optionMessageVisible && (
              <View style={styles.bottomBar}>
                <Text style={styles.bottomBarText}>
                  <Text>Choose The Correct option</Text>
                </Text>
              </View>
            )}
            {!showCorrectAnswer && optionMessageVisible && (
              <View style={styles.bottomBar}>
                <Text style={styles.bottomBarText}>Correct Answer</Text>
              </View>
            )}
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 100,
    alignItems: "center",
  },
  upperHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  lowerHalf: {
    // flex: 1,
    marginTop: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 120,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: -180,
  },
  questionText: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 50,
  },
  optionCard: {
    width: 100,
    height: 70,
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 18,
    color: "black",
    textAlign: 'center',
  },
  selectedOptionText: {
    color: "orange",
    fontWeight: "bold",
  },
  correctOption: {
    backgroundColor: "red",
    color: "red",
    fontWeight: "bold",
  },
  incorrectOption: {
    backgroundColor: "red",
  },
  bottomBar: {
    backgroundColor: "gray",
    padding: 10,
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBarText: {
    fontSize: 18,
    color: "white",
  },
});

export default NumberQuizPage;
