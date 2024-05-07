import { Text, View, StyleSheet, Button} from "react-native"
import * as Animatable from 'react-native-animatable'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location';
import { useEffect, useState, useRef } from 'react';
//Trabalhando com mapas
import MapView, { Marker } from 'react-native-maps';

export default function Logado() {
  const [location, setLocation] = useState(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync({});
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        console.log('NOVA LOCALIZAÇÃO!', response);
        setLocation(response);
      }
    );
    //eslint-disable-next-line
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Olá,</Text>
        <Text style={styles.message}>Escolha sua rota!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm} >
      <View style={styles.container}>
        {location && (
          <MapView
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}>
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
        )}
      </View>
      </Animatable.View>
      <Button title="Check" style={styles.input} onPress={alert('olá')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },
  containerHeader: {
    padding:35,
    paddingTop:15,
    marginVertical:1,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopWidth:10,
    borderTopColor:'gray'
  },
  map:{
    flex: 1,
    width:'100%',
    padding: 10
  },
  input: {
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#d3d3d3',
    padding:10,
  }

})
