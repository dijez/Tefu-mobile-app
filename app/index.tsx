import Footer from "@/components/Footer";
import { mosques } from "@/data/mosque";
import { styles } from "@/styles";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ImageBackground, Modal, Pressable, ScrollView, Text, TextInput, useWindowDimensions, View } from "react-native";
import MosqueCard from "@/components/MosqueCard";
import SearchBar from "@/components/SearchBar";
import FeedbackModal from "@/components/FeedbackModal";



export default function Index() {

  // const [text, setText] = useState('');
  const [fullname, setFullname] = useState('');

  const  handleFullnameChange = (text: any) => {
    const processedText = text;
    setFullname(processedText);
  };
  const [feedback, setFeedback] = useState('');

  const  handleFeedbackChange = (text: any) => {
    const processedText = text;
    setFeedback(processedText);
  };
  
  const [searchmosque, setSearchMosque] = useState('');

  const  handleSearchMosqueChange = (text: any) => {
    const processedText = text;
    setSearchMosque(processedText);
  };
  const {width} = useWindowDimensions();
  const BREAKPOINT_TABLET = 768;
  const isSmallDevice = width < BREAKPOINT_TABLET;
  const navigation = useNavigation();
  const router = useRouter()
  const [ModalVisible, setModalVisibile] = useState(false);

  return (
    <ScrollView 
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
        <Feather name="search" size={20} color="black" />
        <TextInput
        id="searchmosque"
        style={styles.inputsearchcity}
        placeholder="Search by city or mosque name…"
        placeholderTextColor={'#8F8F8F'}
        value={searchmosque}
        onChangeText={handleSearchMosqueChange}
        />
          
      </View>
      {/* <SearchBar/> */}

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
        onPress={() => router.push("/navigation")}
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
        <Text style={styles.seemore}>See more </Text>
        <MaterialCommunityIcons name="arrow-right" size={20} color="black" />
      </View>
        </Pressable>
        
      
     </View>

      {/* <View style={styles.listmosquecontainer}>
        {mosques.map((mosque) => (
          <MosqueCard key={mosque.id} mosque={mosque} />
        ))}
      </View> */}


        <Pressable 
          onPress={() => setModalVisibile(true)}
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

        <Footer/>
        <Modal
  transparent={true}
  visible={ModalVisible}
  animationType="fade"
>
  <View style={{ flex: 1 }}>

    <BlurView
      intensity={60}
      tint="dark"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
    />

    <View style={styles.modalContainer}>
      <View style={styles.modalCard}>

        <View style={styles.leavefeedbackcontainer}>
          <Pressable onPress={() => setModalVisibile(false)}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </Pressable>
        <Text style={styles.leavefeedback}>Leave Feedback</Text>
        </View>

        <View style={styles.feedbackinputcontainer}>
          
          <View style={styles.fullnamecontainer}>
          <Text style={styles.fullname}>
            Fullname
          </Text>
           <TextInput
        id="firstname"
        style={styles.fullnameinput}
        placeholder="E.g. Aliyu Ahmed Bello"
        placeholderTextColor={'#8F8F8F'}
        value={fullname}
        onChangeText={handleFullnameChange}
        />
        </View>

        {/* <View > */}
        <View style={styles.typefeedbackcontainer}>

           <TextInput
        id="typefeedack"
        style={styles.typefeedbackinput}
        placeholder="Type your feedback here"
        placeholderTextColor={'#8F8F8F'}
        value={feedback}
        onChangeText={handleFeedbackChange}
        multiline= {true}
        numberOfLines={6}
        />

        <View style={styles.borderline}/>  
        </View>

        <View style={ styles.leavefeedbackencouragementcontainer}>
          <Text style={styles.leavefeedbackencouragement}>
            Leave the team a feedback so that they can continue to serve you better.
          </Text>
        </View>

        <View style={styles.sendfeedbackcontainer}>
          <Text style={styles.sendfeedback}>Send feedback</Text>
        </View>


        </View>

        {/* <Pressable onPress={() => setModalVisibile(false)}>
          <Text>Close</Text>
        </Pressable> */}
      </View>
    </View>

      {/* <FeedbackModal
        visible={ModalVisible}
        onClose={() => setModalVisibile(false)}
      /> */}
  </View>

        </Modal>
    </ScrollView>
  );
}
