import React from 'react'
import { View , Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {

    return (
       <View style={style.viewStyle}>
       <ImageDetail title="Forest" score={9} source={require('../../assets/forest.jpg')}/>
        <ImageDetail title="Beach"  score={7} source={require('../../assets/beach.jpg')}/>
        <ImageDetail title="Mountain"   score={10} source={require('../../assets/mountain.jpg')}/>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
        // flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    textStyle: {
        fontSize:50
    }
})

export default ImageScreen