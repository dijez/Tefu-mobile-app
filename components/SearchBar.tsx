import { View, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "@/styles";
import { useState } from "react";

export default function SearchBar() {

  const [search, setSearch] = useState("");

  return (
    <View style={styles.searchcitycontainer}>
      <Feather name="search" size={20} color="black" />

      <TextInput
        style={styles.inputsearchcity}
        placeholder="Search by city or mosque"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
}