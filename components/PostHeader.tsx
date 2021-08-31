import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet,Image, TouchableOpacity } from 'react-native'
import { Text, View } from '../components/Themed';

const PostHeader = () => {
    return (
        <View style={styles.container}>
            <ProfileImage />
            <ProfileNameAndLocation/>
            <ProfileActions/>
        </View>
  
    );
}

const ProfileImage=()=>(
    <TouchableOpacity onPress={()=>alert("Pressed!")}>
        <Image source={{uri:'https://picsum.photos/id/598/600/400'}}
        style={styles.image}/>
     </TouchableOpacity>
)
const ProfileNameAndLocation=()=>(
   
      <View style={styles.profileNameAndLocation}>
          <Text style={styles.userName}>500px</Text>
          <Text style={styles.location}>istanbul</Text>
      </View>
)
const ProfileActions=()=>(
    <TouchableOpacity onPress={()=>alert("Pressed!")}>
        <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
    </TouchableOpacity>
   
)
export default PostHeader

const styles = StyleSheet.create({
    location:{
        opacity:.5
    },
    userName:{
        fontWeight:'bold'
    },
    profileNameAndLocation:{
        paddingLeft:8,
        flex:1
    },
    container:{
        flexDirection:'row',
        paddingHorizontal:8,
        paddingVertical:16
    },
    image:{
        width:32,
        height:32,
        borderRadius:16
    }
})
