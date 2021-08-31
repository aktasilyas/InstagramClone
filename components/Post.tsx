import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import PostActions from "./PostActions";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

const Post = () => {
  return (
    <View >
      <View style={styles.container}>
        <PostHeader />
        <PostImage />
        <PostActions />
      </View>
      <View>
        <PostHeader />
        <PostImage />
        <PostActions />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
    container:{
        marginBottom:30
        
    }
});
