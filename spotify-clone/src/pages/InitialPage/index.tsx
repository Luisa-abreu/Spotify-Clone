import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParametroRotasStack } from "../../routers/navigation";
import Logo from "../../../assets/spotify-icon.png";

type Props = {
  navigation: NativeStackNavigationProp<ParametroRotasStack, "Login">;
};

export const InitialPage = ({ navigation }: Props) => {
  return (
    <View style={styles.page}>
      <Image
        style={{ width: 60, height: 60, marginBottom: 10 }}
        source={Logo}
        alt="Spotify logo"
      />
      <Text style={styles.title}>Millions of songs. Free on Spotify</Text>

      <Button text="Sign up free" type="solid" />
      <Button text="Continue with Google" type="outline" icon="google" />
      <Button text="Continue with Facebook" type="outline" icon="facebook" />
      <Button text="Continue with Apple" type="outline" icon="apple" />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};
