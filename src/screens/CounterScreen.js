import React , {useState}  from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const CounterScreen = () => {

    const [count, setCount] = useState(0)
    return (
        <View style={style.viewStyle}>
            <Button 
                
                onPress={() => setCount(count+1)}
                title="INCREASE"></Button>
            <Button 
               
                onPress={() => setCount(count-1)}
                title="DECREASE"></Button>
            <Text style={style.textStyle}>Current Count:  {count}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 25
        // backgroundColor:'lightblue',
        // marginTop:50,
        // borderBottomWidth:67, 
       
    }, 
    viewStyle: {
        display:"flex",
        justifyContent:"center",
        alignContent:"center"
    }
})

export default CounterScreen