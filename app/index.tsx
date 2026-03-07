import { Text, View,Image,TextInput, ImageBackground  } from "react-native";
import { styles } from "@/styles";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import CustomShape from "@/component/customshape";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {

  const [text, setText] = useState('')
  return (
    <View 
    style={styles.container}
    >
      <View style={styles.navtefu} >
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../assets/images/Frame 3.png")}/>
        <Text style={styles.tefu}>Tefu</Text>
        </View>
        
          <Ionicons name="menu-outline" size={24} color="black" />
          {/* <Image source={require("../assets/images/Hamburger Menu.png")}/> */}
      </View>
     
     <View style={styles.secondpart}>
      <Text style={styles.congregation}>Never Miss a Congregation.</Text>
      <Text style={ styles.findmosque}>Find nearby mosques, see prayer times, and join jamā‘ah wherever you are.</Text>
      <Image style={styles.manpraying} source={require("../assets/images/muslim-man.png")} />
     </View>

     <View >
      <Text style={styles.mosquenear}>Mosques Near You Yet to Observe Prayer</Text>
      <View style={ styles.searchcitycontainer}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        id="searchmosque"
        style={styles.inputsearchcity}
        placeholder="Search by city or mosque name…"
        placeholderTextColor={'#8F8F8F'}
        value={text}
        onChangeText={setText}
        />
          
      </View>
     </View>

     <View style={styles.listmoquecontainer}>
      
      <ImageBackground style={styles.polygonrectanglemosque}  source={require("../assets/images/Union.png")} resizeMode="contain" >  
        
        <View style={styles.textContainer}>
            <Image style={styles.mosqueimage} source={require("../assets/images/mosque.png")} />
        </View>

        <View style={styles.mosquelistcontainer}>
          <Text style={styles.mosquelistname} >Al-Nur Central Mosque</Text>
          <Text style={styles.mosquelistmetersaway}>450 m away</Text>
        </View>

        <View style={styles.mosquelistprayercontainer}>
          <Text style={styles.mosquelistprayer}>MAHGRIB</Text>
          <Text style={styles.mosquelisttime}>7:15 PM</Text>
          
          <View style={ styles.mosquelistIqamahcontainer}>
          <Text style={styles.mosquelistIqamah}>Iqamah </Text>
          <Text style={styles.mosquelistIqamahtime}>7:05</Text>
          </View>
        </View>

        <View style={styles.mosquelistbuttoncontainer}>
          <Text style={styles.mosquelistbutton}>Navigate</Text>
          <MaterialIcons name="route" size={20} color="white" />
        </View>
        </ImageBackground>

        
      {/* <View style={styles.polygonrectanglemosque}>
      <Image   source={require("../assets/images/Union.png")} />  
      </View>

        <View style={styles.textContainer}>
      <Image style={styles.mosqueimage} source={require("../assets/images/mosque.png")} />
        
      </View>
 */}
     </View>


    </View>
  );
}
