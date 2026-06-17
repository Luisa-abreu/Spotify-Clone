import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { PropsInput } from "./type";

export const Input = ({ placeholder, label, type }: PropsInput) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#fff"}
        secureTextEntry={type === "senha"}
        style={styles.input}
      />
    </View>
  );
};
