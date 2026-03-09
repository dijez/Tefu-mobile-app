import React from "react";
import { Modal, Text, View,Pressable } from "react-native";
import { useState } from "react";
import { styles } from "@/styles/feedback";
import { BlurView } from "expo-blur";

const [modalVisible, setModalVisible] = useState(false);

export default function feedback(){


    return(
        <View>

            <Modal
  transparent={true}
  visible={modalVisible}
  animationType="fade"
>
  <View style={{ flex: 1 }}>
    
    <BlurView
      intensity={60}
      tint="dark"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    />

    <View style={styles.modalContainer}>
      <View style={styles.modalCard}>
        <Text>Feedback Form</Text>

        <Pressable onPress={() => setModalVisible(false)}>
          <Text>Close</Text>
        </Pressable>
      </View>
    </View>

  </View>
</Modal>
        </View>
    )
}



