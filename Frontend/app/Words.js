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
      Word: "Apple",
      Text: "A sweet, round fruit that grows on trees.",
    },
    {
      Word: "Ball",
      Text: "A round object you can throw, catch, or bounce.",
    },
    {
      Word: "Cat",
      Text: "A furry animal with four legs that purrs.",
    },
    {
      Word: "Dog",
      Text: "A loyal pet with four legs that barks.",
    },
    {
      Word: "Eat",
      Text: "To put food in your mouth and swallow it.",
    },
    {
      Word: "Fish",
      Text: "An animal that lives in water and swims with fins.",
    },
    {
      Word: "Funny",
      Text: "Something that makes you laugh.",
    },
    {
      Word: "Happy",
      Text: "Feeling good and joyful.",
    },
    {
      Word: "Hat",
      Text: "A piece of clothing you wear on your head.",
    },
    {
      Word: "Help",
      Text: "To give someone assistance.",
    },
    {
      Word: "Ice Cream",
      Text: "A cold, sweet treat that comes in many flavors.",
    },
    {
      Word: "Jump",
      Text: "To push yourself up and off the ground.",
    },
    {
      Word: "Kite",
      Text: "A light object that flies in the wind with a long tail.",
    },
    {
      Word: "Look",
      Text: "To use your eyes to see something.",
    },
    {
      Word: "Mom",
      Text: "Your female parent.",
    },
    {
      Word: "Nose",
      Text: "The part of your face you use to smell.",
    },
    {
      Word: "Play",
      Text: "To have fun and enjoy yourself.",
    },
    {
      Word: "Sing",
      Text: "To make musical sounds with your voice.",
    },
    {
      Word: "Toy",
      Text: "An object you play with for fun.",
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
          <Text style={styles.heading}>{arr[array].Word}</Text>
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
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 70,
    color: "grey",
  },
  subHeading: {
    fontSize: 30,
    marginTop: 100,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
    color: "green",
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
