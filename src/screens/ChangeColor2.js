import React, {useReducer} from 'react'

import { View, StyleSheet, Text} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INC = 15

const reducer = (state, action) => {

    switch(action.colorToChange) {
        case 'red':
            return (state.red + action.amount > 255 || state.red + action.amount < 0 ) 
            ? state 
            : {...state, red: state.red + action.amount}
        case 'green':
            return (state.green + action.amount > 255 || state.green + action.amount < 0 ) 
            ? state 
            : {...state, green: state.green + action.amount}
        case 'blue':
            return (state.blue + action.amount > 255 || state.blue + action.amount < 0 ) 
            ? state 
            : {...state, blue: state.blue + action.amount}
        default: return

    }
}

const ChangeColor2 = () => {

    const [{ red, green, blue}, dispatch] = useReducer(reducer, {red:0,green:0,blue:0})
    // const 
    // console.log(state)
    return (
        <View>
            <Text style={style.textStyle}>Change Color </Text>
                <ColorCounter color='Red' 
                    onInc={() => {dispatch({colorToChange:'red', amount:COLOR_INC})}} 
                    onDec={() => {dispatch({colorToChange:'red', amount:-1*COLOR_INC})}} />
                <ColorCounter color='Green' 
                    onInc={() => {dispatch({colorToChange:'green', amount:COLOR_INC})}} 
                    onDec={() => {dispatch({colorToChange:'green', amount:-1*COLOR_INC})}} />
                <ColorCounter color='Blue' 
                    onInc={() => {dispatch({colorToChange:'blue', amount:COLOR_INC})}} 
                    onDec={() => {dispatch({colorToChange:'blue', amount:-1*COLOR_INC})}} />


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

export default ChangeColor2;