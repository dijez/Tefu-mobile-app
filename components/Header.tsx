import { Text, View,Pressable,Image} from "react-native";
import { styles } from "@/styles/header";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Menu from "@/app/menu";
import { useState } from "react";


export default function Header() {

    const [ModalVisible, setModalVisibile] = useState(false);
      const [menuVisible, setMenuVisible] = useState(false);
    


  return (
    <View style={styles.navtefu} >
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../assets/images/Frame 3.png")}/>
        <Text style={styles.tefu}>Tefu</Text>
        </View>
        
          <Pressable 
        style={ ( { pressed}) => [
          {transform:[{ scale: pressed ? 0.94 : 1}]}
          // pressed && {opacity: 0.7}
        ]}
        >
          <View style={ {alignItems: 'flex-end'} }>

          <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>

          {menuVisible && (
            <Menu/>
          )}
          </View>



        </Pressable>
          
      </View>
);
}
