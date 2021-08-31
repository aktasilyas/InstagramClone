import React from 'react'
import { StyleSheet,Image } from 'react-native'
import { Text, View } from '../components/Themed';
import PostHeader from './PostHeader';

const PostImage = () => {
    return (
       <>
        <Image source={{uri:'https://picsum.photos/id/1076/600/400'}}
        style={{width:'100%',height:400}}/>
       </>
    )
}

export default PostImage

const styles = StyleSheet.create({})
