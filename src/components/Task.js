import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { API } from "../config/api";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Task({ id, childToParent, text }) {
  const [status, setStatus] = useState(false);

  const deleteTask = async (idTodos) => {
    try {
      const response = await API.delete(`/Todos/` + idTodos);
      console.log(response.data);
      childToParent();
    } catch (error) {
      console.log(error);
    }
  };

  function handleSetStatus() {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  return (
    <TouchableOpacity onPress={handleSetStatus}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={!status ? styles.square : styles.squareSuccess}></View>
          <Text style={!status ? styles.itemText : styles.itemTextDone}>{text}</Text>
        </View>
        <View style={styles.itemRight}>
          <TouchableOpacity onPress={() => deleteTask(id)}>
            <Entypo name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    paddingRight: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "maroon",
    borderRadius: 5,
    margin: 16,
    opacity: 0.8,
  },
  squareSuccess: {
    width: 24,
    height: 24,
    backgroundColor: "black",
    borderRadius: 5,
    margin: 16,
    opacity: 0.8,
  },
  itemText: {
    maxWidth: "80%",
  },
  itemTextDone: {
    maxWidth: "80%",
    opacity: 0.5,
    textDecorationLine: "line-through",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  checkbox: {
    marginEnd: 10,
    width: 25,
    height: 25,
  },
});
