import { Modal, View, Text, TextInput, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { styles } from "@/styles";
import { useState } from "react";

export default function FeedbackModal({ visible, onClose }: any) {

  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <Modal transparent visible={visible} animationType="fade">

      <BlurView
        intensity={60}
        tint="dark"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />

      <View style={styles.modalContainer}>
        <View style={styles.modalCard}>

          <Pressable onPress={onClose}>
            <Text>Back</Text>
          </Pressable>

          <Text>Leave Feedback</Text>

          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Type feedback"
            value={feedback}
            onChangeText={setFeedback}
            multiline
          />

        </View>
      </View>

    </Modal>
  );
}