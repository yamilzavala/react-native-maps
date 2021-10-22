import React from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";

export default ListComponent = ({ points,closeListModal }) => {
  return (
    <View>
      <FlatList
        data={points.map((item) => item.name)}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />
      <Button title="Close" onPress={closeListModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
