import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import {
  MapComponent,
  ModalComponent,
  PanelComponent,
  InputComponent,
  ListComponent,
} from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleList, setVisibleList] = useState(false);
  const [temporalName, setTempName] = useState("");
  const [temporalPoint, setTempPoint] = useState({});
  const [modalFilter, setModalFilter] = useState("showModalPoint");

  const handleLongPress = ({ nativeEvent }) => {
    setVisibleList(false);
    console.log(modalFilter);
    setModalFilter("showModalPoint");
    setVisible(true);
    setTempPoint(nativeEvent.coordinate);
  };

  handleChangeText = (text) => {
    setTempName(text);
  };

  handleSubmit = () => {
    const newPoint = {
      coordinate: temporalPoint,
      name: temporalName,
    };
    setPoints(points.concat(newPoint));
    setVisible(false);
    setTempName("");
    setTempPoint({});
  };

  handleCancel = (e) => {
    setVisible(false);
    setTempName("");
    setTempPoint({});
  };

  handleShowList = (text) => {
    setModalFilter("showListPoints");
    setModalFilter(text);
    setVisible(false);
    setVisibleList(true);
  };

  handleCloseListModal = () => {
    setVisibleList(false);
  };

  console.log(points);

  return (
    <View style={styles.container}>
      <MapComponent onLongPress={handleLongPress} />

      <View>
        {modalFilter === "showModalPoint" ? (
          <ModalComponent visibility={visible}>
            <InputComponent
              title="Modal title"
              placeholder="Type a name..."
              onChangeText={handleChangeText}
            />
            <Button title="Accept" onPress={handleSubmit} />
            <Button title="Cancel" onPress={handleCancel} />
          </ModalComponent>
        ) : (
          <ModalComponent visibility={visibleList}>
            <ListComponent points={points} closeListModal={handleCloseListModal}/>
          </ModalComponent>
        )}
      </View>

      <PanelComponent showList={handleShowList} textLeft="Show List" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
