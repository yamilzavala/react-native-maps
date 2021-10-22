import React from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";
export default PanelComponent = ({ textLeft, showList }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={showList} />
      <Button title="Show/Hide" />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
  button: {},
});
