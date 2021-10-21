import React,{useState} from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { MapComponent, ModalComponent, PanelComponent } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);

  const handleLongPress = ({nativeEvent}) => {
    const newPoint = points.concat({coordinate: nativeEvent.coordinate})
    setPoints(newPoint);
    //setPoints([...points,{coordinate: nativeEvent.coordinate}])
    console.log(points);
  }
  return (
    <View style={styles.container}>
      <MapComponent onLongPress={handleLongPress}/>
      <ModalComponent />
      <PanelComponent />
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
