import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { InputComponent } from "./index";

export default PointComponent = ({
  handleUpdateText,
  handleSubmitText,
  handleCancelText
}) => {
  return (
    <View>
      <InputComponent
        title="Modal title"
        placeholder="Type a name..."
        onChangeText={handleUpdateText}
      />
      <Button title="Accept" onPress={handleSubmitText} />
      <Button title="Cancel" onPress={handleCancelText} />
    </View>
  );
};

