import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { PropsCard } from "./type";

export const Card = ({ id, title, image, type }: PropsCard) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={[styles.image, type === "artista" && styles.artistCover]}
      />
      <Text style={{ color: "#FFF" }}>{title}</Text>
    </View>
  );
};
