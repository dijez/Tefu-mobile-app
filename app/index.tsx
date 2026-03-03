import { Text, View,Image } from "react-native";
import { styles } from "@/styles";


export default function Index() {
  return (
    <View 
    style={styles.container}
    >
      <View style={styles.navtefu} >
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../assets/images/Frame 3.png")}/>
        <Text style={styles.tefu}>Tefu</Text>
        </View>
        
          <Image source={require("../assets/images/Hamburger Menu.png")}/>
      </View>
     
     <View style={styles.secondpart}>
      <Text style={styles.congregation}>Never Miss a Congregation.</Text>
      <Text style={ styles.findmosque}>Find nearby mosques, see prayer times, and join jamā‘ah wherever you are.</Text>
      <Image source={require("../assets/images/muslim-man.png")} />
     </View>

     <View>

     </View>
    </View>
  );
}
