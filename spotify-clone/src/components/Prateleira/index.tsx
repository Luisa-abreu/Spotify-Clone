import { FlatList, Text } from "react-native";
import { styles } from "./style";
import { PropsPrateleira } from "./type";
import { Card } from "../Card";

export const Prateleira = ({ title, data, filterType }: PropsPrateleira) => {
  const filteredData = filterType
    ? data.filter((item) => item.type === filterType)
    : data;
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.shelf}
        horizontal
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title}
            image={item.image}
            type={item.type}
          />
        )}
      />
    </>
  );
};
