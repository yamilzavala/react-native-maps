import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default function MapComponent ({onLongPress}) {
    return (
        <MapView style={styles.mapView} onLongPress={onLongPress}/>
    )
}

const styles = StyleSheet.create({
    mapView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 150,
      },
});