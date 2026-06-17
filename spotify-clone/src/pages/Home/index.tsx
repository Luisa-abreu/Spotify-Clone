import { styles } from "./style";
import { Dados } from "../../data";
import { Prateleira } from "../../components/Prateleira";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Good morning</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="refresh-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Prateleira title="Recently played" data={Dados} />
        <Prateleira
          title="Try something else"
          data={Dados}
          filterType="album"
        />
        <Prateleira
          title="Artist on the Radar"
          data={Dados}
          filterType="artista"
        />
        <Prateleira title="Editor's picks" data={Dados} filterType="playlist" />
      </ScrollView>
      <View style={styles.player}>
        <View style={styles.info}>
          <View style={styles.cover} />
          <View>
            <Text style={styles.music}>Safe Haven</Text>
            <Text style={styles.artist}>Lyncayo, Arya Starr</Text>
          </View>
        </View>

        <View style={styles.controls}>
          <Ionicons name="pause" size={20} color="white" />
        </View>
      </View>
    </View>
  );
};
