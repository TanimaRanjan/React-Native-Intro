import React, {useReducer} from 'react'

import { View, StyleSheet, Text} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INC = 15

const reducer = (state, action) => {

    switch(action.type) {
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0 ) 
            ? state 
            : {...state, red: state.red + action.payload}
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0 ) 
            ? state 
            : {...state, green: state.green + action.payload}
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0 ) 
            ? state 
            : {...state, blue: state.blue + action.payload}
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
                    onInc={() => {dispatch({type:'change_red', payload:COLOR_INC})}} 
                    onDec={() => {dispatch({type:'change_red', payload:-1*COLOR_INC})}} />
                <ColorCounter color='Green' 
                    onInc={() => {dispatch({type:'change_green', payload:COLOR_INC})}} 
                    onDec={() => {dispatch({type:'change_green', payload:-1*COLOR_INC})}} />
                <ColorCounter color='Blue' 
                    onInc={() => {dispatch({type:'change_blue', payload:COLOR_INC})}} 
                    onDec={() => {dispatch({type:'change_blue', payload:-1*COLOR_INC})}} />


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