import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";

const Num = () => {
  const [array, setArray] = React.useState(0);

  const arr = [
    {
      Number: 0,
      Text: "Zero",
    },
    {
      Number: 1,
      Text: "One",
    },
    {
      Number: 2,
      Text: "Two",
    },
    {
      Number: 3,
      Text: "Three",
    },
    {
      Number: 4,
      Text: "Four",
    },
    {
      Number: 5,
      Text: "Five",
    },
    {
      Number: 6,
      Text: "Six",
    },
    {
      Number: 7,
      Text: "Seven",
    },
    {
      Number: 8,
      Text: "Eight",
    },
    {
      Number: 9,
      Text: "Nine",
    },
    {
      Number: 10,
      Text: "Ten",
    },
    {
      Number: 11,
      Text: "Eleven",
    },
    {
      Number: 12,
      Text: "Twelve",
    },
  ];
  const increment = () => {
    if (array < arr.length - 1) setArray(array + 1);

    // console.log(array);
  };
  const decrement = () => {
    if (array > 0) setArray(array - 1);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.heading}>{arr[array].Number}</Text>
          <View style={styles.container}>
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
            <Image source={arr[array].Image} style={styles.iconImage}/>
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
          <Text style={styles.subHeading}>{arr[array].Text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  round: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  heading : {
    fontSize: 150,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  subHeading: {
    fontSize: 60,
    marginTop: 100,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  display: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});

export default Num;
