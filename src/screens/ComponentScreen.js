import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {

    const greeting = <Text style={style.textStyle}>Getting started with React Native!</Text>
    return (
        <View>
            {greeting}
            <Text style={style.secondStyle}>My Name is Tanima </Text>
        </View>
        )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize:45
    },
    secondStyle: {
        fontSize:20
    }
})

export default ComponentScreen