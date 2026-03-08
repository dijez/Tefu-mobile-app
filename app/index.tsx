import { Text, View,Image,TextInput, ImageBackground  } from "react-native";
import { styles } from "@/styles";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import CustomShape from "@/component/customshape";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { mosques } from "@/data/mosque";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { useWindowDimensions } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Index() {

  const [text, setText] = useState('');
  const {width} = useWindowDimensions();
  const BREAKPOINT_TABLET = 768;
  const isSmallDevice = width < BREAKPOINT_TABLET;
  const navigation = useNavigation();


  return (
    <View 
    style={styles.container}
    >
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
          <Ionicons name="menu-outline" size={24} color="black" />
        </Pressable>
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
        

     <View 
     style={[
      styles.listmosquecontainer,
      { flexDirection: isSmallDevice ? "column" : "row" }
      ]}>
      {
        mosques.map((mosque) => (
      <ImageBackground
      key={mosque.id}
       style={[styles.polygonrectanglemosque]}  
       source={require("../assets/images/Union.png")} 
       resizeMode="contain" >  
        
        <View style={styles.textContainer}>
            <Image 
            style={styles.mosqueimage} 
            source={require("../assets/images/mosque.png")} />
        </View>

        <View style={styles.mosquelistcontainer}>

          <Text style={styles.mosquelistname} >{mosque.name}</Text>
          <Text style={styles.mosquelistmetersaway}>{mosque.meters} m away</Text>
        </View>

        <View style={styles.mosquelistprayercontainer}>
          <Text style={styles.mosquelistprayer}>MAHGRIB</Text>
          <Text style={styles.mosquelisttime}>{mosque.prayerTimes.maghrib}</Text>
          
          <View style={ styles.mosquelistIqamahcontainer}>
              <Text style={styles.mosquelistIqamah}>Iqamah </Text>
            <Text style={styles.mosquelistIqamahtime}>{mosque.iqamahTimes?.iqamahMagrib}</Text>
          </View>
        </View>


        <Pressable 
        style={ ( { pressed}) => [
          {transform:[{ scale: pressed ? 0.94 : 1}]}
          // pressed && {opacity: 0.7}
        ]}
        onPress={() => navigation.navigate("navigation")}
        >
        <View style={styles.mosquelistbuttoncontainer}>
          <Text style={styles.mosquelistbutton}>Navigate</Text>
          <MaterialIcons name="route" size={20} color="white" />
        </View>
        </Pressable>
        </ImageBackground>
        ))
      }


      <Pressable 
        style={ ( { pressed}) => [
          {transform:[{ scale: pressed ? 0.94 : 1}]}
          // pressed && {opacity: 0.7}
        ]}
        >
      <View style={styles.seemorecontainer}>
        <Text style={styles.seemore}>
          See more 
        </Text>
        <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
      </View>
        </Pressable>
        
      
     </View>


        <Pressable 
        style={ ( { pressed}) => [
          styles.feedbackcontainer,
          {transform:[{ scale: pressed ? 0.94 : 1}]}
          // pressed && {opacity: 0.7}
        ]}
        >

          {/* <Icon></Icon> */}
          <LinearGradient
          colors={['#0A5F3A' , '#063923']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.feedbackcontainer}
          >
          
          <Text style={styles.feedback}>
            Leave a feedback
          </Text>
          </LinearGradient>
        </Pressable>

    </View>
  );
}
