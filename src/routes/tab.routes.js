import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'
import SingUp from "../pages/SingUp"
import Logado from "../pages/Logado"
import PopUp from "../pages/PopUp"
import SingIn_Motorista from "../pages/SingIn_Motorista"
import SingUp_Motorista from "../pages/SingUp_Motorista";




import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    const [user, setUser] = useState(null)
    try{
        useEffect(() => {
            onAuthStateChanged(FIREBASE_AUTH, (user) => {
                console.log(user)
                setUser(user)
            })
        }, [])

    }catch(e){
        console.log("Te achei", e )
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingUp"
                component={SingUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Logado"
                component={Logado}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PopUp"
                component={PopUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
            name="SingIn_Motorista"
            component={SingIn_Motorista}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="SingUp_Motorista"
            component={SingUp_Motorista}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}