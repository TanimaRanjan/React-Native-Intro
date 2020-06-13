import React from 'react'

import { View , Text, StyleSheet } from 'react-native'

const BoxScreen = () => {

    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>Box Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle : {
        borderWidth:2,
        borderColor:'black',
     
    }, 
    textStyle: {
        borderWidth:4,
        borderColor:'red',
        marginVertical:30,
        marginHorizontal:60,
        padding:20,
        
    }
})

export default BoxScreen