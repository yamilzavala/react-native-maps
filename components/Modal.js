import React from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
export default ModalComponent = () => {
  return (
    <Modal visible={false} transparent={true} animation="fade">
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>Text from Modal</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
