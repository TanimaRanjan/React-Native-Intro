import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'


const ColorCounter = ({color, onInc, onDec}) => {

    // let col = colorName
    let col = color.toLowerCase()
    return (
        <View style={style.viewStyle}>
            <Text 
                style={{textAlign:"center", fontSize:40, color:`${col}`}}>
                {color}
            </Text>
            <Button 
                title={`More ${color}`}
                onPress={() => {onInc()}}
            />
            
            <Button
                title={`Less ${color}`}
                onPress={() => {onDec()}}
            />
            
        </View>
    )

}

const style = StyleSheet.create({
    viewStyle : {
        width:'100%', 
        backgroundColor:'rgb(205,205,205)',
        textAlign:"center",
        marginTop:20
    }
})

export default ColorCounter