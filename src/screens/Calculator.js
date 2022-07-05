import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { Styles } from "../styles/GlobalStyle";

export default function Calculator() {
  const [number, setNumber] = useState("");
  const [displayNumber, setDisplayNumber] = useState(0);

  console.log(number);
  const handleNumberPress = (e) => {
    setNumber(number + e);
  };

  const handleOperationPress = (e) => {
    setNumber(number + e);
  };

  const getResult = () => {
    setNumber(eval("(" + number + ")").toString());
    setDisplayNumber(number);
  };

  const clear = () => {
    setNumber("");
    setDisplayNumber("");
  };

  return (
    <View style={Styles.viewBottom}><Text style={{fontSize: "20px" ,marginBottom: "10px", fontWeight: "bold"}}>DISPLAY</Text>
      <View
        style={{
          height: 180,
          width: 340,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          marginBottom: "25px"
        }}
      >
        <Text style={[Styles.screenFirstNumber, { fontSize: 25 }]}>{displayNumber}</Text>
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>{number ? number : "0"}</Text>
      </View>
      <View style={Styles.row}>
        <Button title={"."} isGray onPress={() => handleNumberPress(".")} />
        <Button title={"⌫"} isGray onPress={() => setNumber(number.slice(0, -1))} />
        <Button title={"C"} isGray onPress={clear} />
        <Button title={"+/-"} isGray onPress={() => setNumber(eval(number * -1))} />
      </View>
      <View style={Styles.row}>
        <Button title={"1"} onPress={() => handleNumberPress("1")} />
        <Button title={"2"} onPress={() => handleNumberPress("2")} />
        <Button title={"-"} isBlue onPress={() => handleOperationPress("-")} />
        <Button title={"+"} isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title={"3"} onPress={() => handleNumberPress("3")} />
        <Button title={"4"} onPress={() => handleNumberPress("4")} />
        <Button title={"÷"} isBlue onPress={() => handleOperationPress("/")} />
        <Button title={"×"} isBlue onPress={() => handleOperationPress("*")} />
        
      </View>
      <View style={Styles.row}>
        <Button title={"5"} onPress={() => handleNumberPress("5")} />
        <Button title={"6"} onPress={() => handleNumberPress("6")} />
        <Button title={"%"} isGray onPress={() => handleOperationPress("%")} />
        <Button title={"="} isBlue onPress={() => getResult()} />
        
      </View>
      <View style={Styles.row}>
        <Button title={"7"} onPress={() => handleNumberPress("7")} />
        <Button title={"8"} onPress={() => handleNumberPress("8")} />
        <Button title={"9"} onPress={() => handleNumberPress("9")} />
        <Button title={"0"} onPress={() => handleNumberPress("0")} />
      </View>
    </View>
  );
}


