import React, {useState} from 'react'

import { View, StyleSheet, Text} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INC = 15

const ChangeColor = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    console.log(red, green, blue)

    const setColor = (color,change) => {
        switch(color)  {
            case 'red': 
                return (red+change <= 255) && (red+change >=0) ? setRed(red+change): null
            case 'green':
                return (green+change <= 255) && (green+change >=0) ? setGreen(green+change) : null
            case 'blue':
               return  (blue+change <= 255) && (blue+change >=0) ? setBlue(blue+change) : null
            default:
                return;
        }

        // if(color === 'red' && ((red+change <= 255) && (red+change >=0))) {
        //     setRed(red+change)
        // } 
        // if(color === 'green' && ((green+change <= 255) && (green+change >=0))) {
        //     setGreen(green+change)
        // } 
        // if(color === 'blue' && ((blue+change <= 255) && (blue+change >=0))) {
        //     setBlue(blue+change)
        // } 

    }
    return (
        <View>
            <Text style={style.textStyle}>Change Color </Text>
                <ColorCounter color='Red' 
                    onInc={() => {setColor('red', COLOR_INC)}} 
                    onDec={() => {setColor('red', -1* COLOR_INC)}} />
                <ColorCounter color='Green' 
                    onInc={() => {setColor('green',COLOR_INC)}} 
                    onDec={() => {setColor('green',-1*COLOR_INC)}} />
                <ColorCounter color='Blue' 
                    onInc={() => {setColor('blue',COLOR_INC)}} 
                    onDec={() => {setColor('blue',-1 * COLOR_INC)}} />


                <View style={{width:'70%', height:100, 
                    backgroundColor:`rgb(${red},${green},${blue})`,
                     margin:'15%'}} />
                    

        </View>
        )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize:20,
        textAlign:"center",
        marginTop:30
    }

    , 
    viewStyle: {
        
    }
})

export default ChangeColor;