import { Text,View,StyleSheet , Image, Pressable} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { styles } from "@/styles/menu";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";


export default function Menu() {

    const howitworks = useNavigation()
    const router = useRouter();

    return(

        
        <View style={styles.container}>
                 <Pressable 
                        style={ ( { pressed}) => [
                            {transform:[{ scale: pressed ? 0.94 : 1}]}
                          // pressed && {opacity: 0.7}
                        ]}
                        onPress={() => {
                            console.log("pressed")
                            router.push("/howitworks")}}
                        >
                            <View style={styles.howitworkscontainer}>

                                 <Text style={styles.howitworks}>How It Works</Text>
                            </View>
                        </Pressable>
            <View style={styles.addmosquecontainer}>
            <Text style={styles.addmosque}>Add Mosque</Text>
            <Entypo name="plus" size={24} color="white" />
            </View>
        </View>
    )
}