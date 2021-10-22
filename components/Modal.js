import React from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
export default ModalComponent = ({ children, visibility }) => {
  return (
    <Modal visible={visibility} transparent={true} animation="fade">
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 20,
    width: 250,
    height: 200,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
});
