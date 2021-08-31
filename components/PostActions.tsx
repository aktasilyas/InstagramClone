import { Ionicons} from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import PostHeader from "./PostHeader";

const PostActions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconGroup}>
      <TouchableOpacity onPress={() => alert("Pressed!")}>
        <Ionicons name="heart-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Pressed!")}>
        <Ionicons name="send" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Pressed!")}>
        <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
      </TouchableOpacity>
      </View>
      <View style={styles.iconGroup}>
      <TouchableOpacity onPress={() => alert("Pressed!")}>
        <Ionicons name="save-sharp" size={24} color="black" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostActions;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between'
    },
    iconGroup:{
       flexDirection:'row'
    }
});
