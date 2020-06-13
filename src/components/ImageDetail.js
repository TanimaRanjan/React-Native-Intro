import React from 'react'

import { View, Text, StyleSheet, Image } from 'react-native'


const ImageDetail = ({title, source, score}) => {

  
    return (
        <View>
        <Text>{title} - {score}</Text>
        <Image source={source} />
        </View>)
}


export default ImageDetail