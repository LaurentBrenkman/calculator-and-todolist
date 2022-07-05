import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyle";

export default function Button({ title, onPress, isBlue, isGray}) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={onPress} style={isBlue ? Styles.btnBlue : isGray ? Styles.btnGray : theme === "light" ? Styles.btnLight : Styles.btnDark}>
      <Text style={isBlue || isGray ? Styles.smallTextLight : theme === "dark" ? Styles.smallTextLight : Styles.smallTextDark}>
          {title}</Text>
    </TouchableOpacity>
  );
}
