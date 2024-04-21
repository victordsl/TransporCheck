import { Text, View, StyleSheet,} from "react-native"
import * as Animatable from 'react-native-animatable'

//Trabalhando com mapas
import MapView from 'react-native-maps';


export default function Logado() {
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
            latitude: -3.7640,
            longitude: -38.6091,
            latitudeDelta: 0.000922,
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
  Map:{

  }
})
