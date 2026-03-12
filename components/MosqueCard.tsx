import { View, Text, Image, Pressable, ImageBackground } from "react-native";
import { styles } from "@/styles";
import { useRouter } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function MosqueCard({ mosque }: any) {

  const router = useRouter();

  return (
    <ImageBackground
      style={styles.polygonrectanglemosque}
      source={require("../assets/images/Union.png")}
      resizeMode="contain"
    >

      <View style={styles.textContainer}>
        <Image
          style={styles.mosqueimage}
          source={require("../assets/images/mosque.png")}
        />
      </View>

      <View style={styles.mosquelistcontainer}>
        <Text style={styles.mosquelistname}>{mosque.name}</Text>
        <Text style={styles.mosquelistmetersaway}>
          {mosque.meters} m away
        </Text>
      </View>

      <View style={styles.mosquelistprayercontainer}>
        <Text style={styles.mosquelistprayer}>MAGHRIB</Text>
        <Text style={styles.mosquelisttime}>
          {mosque.prayerTimes.maghrib}
        </Text>
      </View>

      <Pressable onPress={() => router.push("/navigation")}>
        <View style={styles.mosquelistbuttoncontainer}>
          <Text style={styles.mosquelistbutton}>Navigate</Text>
          <MaterialIcons name="route" size={20} color="white" />
        </View>
      </Pressable>

    </ImageBackground>
  );
}