import React from "react";
import {
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function PopUp(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}> 
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Antes de realizar o login, precisamos saber:</Text>
                <Text style={styles.text}>Com o que você quer trabalhar?</Text>
            <View>
                <TouchableOpacity 
                    style={styles.buttonPassageiro}
                    onPress={()=> navigation.navigate('SingIn')}
                >
                    <Text style={styles.buttonText}>Passageiro</Text>
                </TouchableOpacity> 
            </View>
            

            <TouchableOpacity 
                style={styles.buttonMotorista}
                onPress={()=> navigation.navigate('SingIn_Motorista')}
            >
                <Text style={styles.buttonText}>Motorista</Text>
            </TouchableOpacity>

  
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#38a69d',
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,

    },
    text:{
        color:'#a1a1a1',
        fontSize: 24,

    },
    buttonPassageiro:{
        position:'absolute',
        backgroundColor:'#38a69d',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
        margin:-190
    },
    buttonMotorista:{
        position:'absolute',
        backgroundColor:'#38a69d',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
        margin:150
    },
    buttonText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    }
})