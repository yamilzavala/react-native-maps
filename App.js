import React,{useState} from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import { MapComponent, ModalComponent, PanelComponent, InputComponent } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [visible, setVisible] = useState(false);
  const [temporalName, setTempName] = useState('');
  const [temporalPoint, setTempPoint] = useState({});

  const handleLongPress = ({nativeEvent}) => {
    // const newPoint = points.concat({coordinate: nativeEvent.coordinate})
    // setPoints(newPoint);
    console.log(points);
    setVisible(true);
    setTempPoint(nativeEvent.coordinate);
  }

  handleChangeText = text => {
    setTempName(text)
  }

  handleAccept = () => {
    const newPoint = points.concat({coordinate: temporalPoint, name: temporalName});
    setPoints(newPoint);
    setVisible(false);
    setTempName('');
    setTempPoint({})   
  }

  handleCancel = (e) => {
    setVisible(false);
    setTempName('');
    setTempPoint({})
  }

  return (
    <View style={styles.container}>
      <MapComponent onLongPress={handleLongPress}/>
      <ModalComponent visibility={visible}>
        <InputComponent title="Modal title" placeholder='Type a name...' onChangeText={handleChangeText}/>      
       
          <Button title='Accept' onPress={handleAccept} />
          <Button title='Cancel' onPress={handleCancel} />
        
      </ModalComponent>
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
