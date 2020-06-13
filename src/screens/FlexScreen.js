import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexScreen = () => {

    return (
        <View style={style.viewStyle}>
            <Text style={style.text1}> Child 1 </Text>
            <Text style={style.textStyle}> Child 2 </Text>
            <Text style={style.text3}> Child 3 </Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        borderWidth:1,
        borderColor:'black',
        // flex:1,
        // height:'100%',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-around",
        height:200
        
    }, 
    textStyle : {
        // flex:2,
        fontSize:20,
        borderWidth:1,
        borderColor:'red',
        alignSelf:'flex-end'
    },
    text1: {
        alignSelf:'flex-start',
        // flex:1,
        fontSize:20,
        borderWidth:1,
        borderColor:'red'
    },
    text3: {
        alignSelf:'flex-start',
        // flex:2,
        fontSize:20,
        borderWidth:1,
        borderColor:'red'
    }
})

export default FlexScreen