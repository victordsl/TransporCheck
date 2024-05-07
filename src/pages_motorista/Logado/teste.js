import { Text, View, StyleSheet, TextInput } from "react-native"
import * as Animatable from 'react-native-animatable'

//Trabalhando com mapas
import MapView from 'react-native-maps';

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,

} from 'expo-location';

import { useEffect, useState } from "react";


export default function Teste() {
//Maps com permissão


  const [location, setLocation ] = useState<LocationObject | null >(null);


  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);

      console.log("LOCALIZAÇÃO ATUAL =>",currentPosition);
    }

  }

useEffect(() => {
  requestLocationPermissions();

},[]);





  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Olá</Text>
        <Text style={styles.message}>Escolha sua rota!</Text>
      </Animatable.View>








      <Animatable.View animation="fadeInUp" style={styles.containerForm} >
          <MapView
            style={styles.Map}
            initialRegion={{
              latitude: -3.764077,
              longitude: -38.609127,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          </MapView>
      </Animatable.View>
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
    paddingTop:50,
    marginVertical:5,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    padding:10,

},
  input: {
    borderRadius:10,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    padding:5,
    borderWidth:1,
    borderColor:'#d3d3d3',
    fontStyle:'italic',
  },
  Map:{

  }
})
