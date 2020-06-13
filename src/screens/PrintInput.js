import React, { useState } from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'

const PrintInput = () => {

    const [name, setName ] = useState('')
    const [password, setPassword ] = useState('')
    return (
        <View style={style.viewStyle}>
            <Text style={{fontSize:20}}>Enter Name</Text>
            <TextInput 
                style={style.textStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => {
                    setName(text)}}
                value={name}
            />
           
            <TextInput 
            style={style.textStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {
                setPassword(text)}}
            value={password}
        />
            <Text> {name &&  `Your name is ${name}`}</Text>

            <Text> {password.length > 0 && password.length < 5 &&  `Password must be longer than 5 character `}</Text>
            
        </View>
    )
}

const style = StyleSheet.create({
    textStyle : {
        fontSize:20,
        height:40,
        borderColor:'blue',
        borderWidth:1,
        marginTop:15,
        marginBottom:15

    }, 
    viewStyle: {
        margin:25
    }
})


export default PrintInput