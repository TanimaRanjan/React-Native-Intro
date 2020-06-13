import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const PositionScreen = () => {

    return (
        <View style={style.viewStyle} >
            <Text style={style.text1 }>Text 1</Text>
            <Text style={style.text2 }>Text 2</Text>
            <Text style={style.textStyle }>Text 3</Text>

        </View>
    )
}

const style = StyleSheet.create({
    viewStyle : {
        borderColor:'black',
        borderWidth:1,
        // top:10,
        height:200
    },
    textStyle: {
        top:10,
        left:20,   
        fontSize:20,
        padding:10,
        borderWidth:1,
        borderColor:'red',
        textAlign:'center'
    },
    text1:{
        position:'absolute',
        left:40,
        bottom:0
    },
    text2: {

        borderColor:'blue',
        borderWidth:1,
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
        // bottom:0,
        ...StyleSheet.absoluteFillObject
    }
})

export default PositionScreen