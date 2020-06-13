import React , {useReducer}  from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {

    switch(action.type) {
        case 'INC_COUNT':
            return {...state, count:state.count+action.payload}
        case 'DEC_COUNT':
            return {...state, count:state.count-action.payload}
        default: return state
    }
}

const CounterScreen = () => {

    // const [count, setCount] = useState(0)
    const [{count}, dispatch] = useReducer(reducer, {count : 0})
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>Change Count</Text>
            <Button 

                onPress={() => dispatch({type:'INC_COUNT', payload:1})}
                title="INCREASE"></Button>
            <Button 
               
                onPress={() => dispatch({type:'DEC_COUNT', payload:1})}
                title="DECREASE"></Button>
            <Text style={style.textStyle}>Current Count:  {count}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign:"center",
        margin:'10%'
       
    }, 
    viewStyle: {
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        marginTop:'10%'
    }
})

export default CounterScreen