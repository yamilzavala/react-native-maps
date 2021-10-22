import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapComponent({ onLongPress, pointsToShowInMap, showMarkersInMap }) {
  return (
    <MapView style={styles.mapView} onLongPress={onLongPress}>      
      {showMarkersInMap && pointsToShowInMap.map((item) => (
        <Marker coordinate={item.coordinate} title={item.name} key={item.name} />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapView: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
});
