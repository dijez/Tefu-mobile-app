import { Text, View} from "react-native";
import { styles } from "@/styles/footer";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Footer() {



  return (
    <View style={styles.container}>
        <AntDesign name="copyright" size={20} color="#FBFBFB"style={styles.icon} />
        <Text style={styles.year} >2025 </Text>
        <Text style={styles.rights} >Tefu. All rights reserved.</Text>
    </View>
);
}
