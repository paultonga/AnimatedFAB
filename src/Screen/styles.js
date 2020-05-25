import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      height: 60,
      width: 60,
      position: "absolute",
      bottom: 40,
      right: 40,
      borderRadius: 30,
      backgroundColor: "rgba(0,0,0,.5),",
    },
    button: {
      height: 60,
      width: 60,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      shadowColor: "#333",
      shadowOpacity: 0.1,
      shadowOffset: { x: 2, y: 0 },
      shadowRadius: 2,
      position: "absolute",
      bottom: 40,
      right: 40,
    },
    pay: {
      backgroundColor: "#f00",
      height: 70,
      width: 70,
      borderRadius: 35,
    },
    payText: {
      color: "#fff",
    },
    other: {
      backgroundColor: "#fff",
    },
    label: {
      color: "#fff",
      position: "absolute",
      fontSize: 18,
      backgroundColor: "transparent",
    },
  });
  