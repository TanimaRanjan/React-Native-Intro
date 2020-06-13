import React , { useState }from 'react'
import { View, Image, Text, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {


    const [colors, setColors] = useState([])

    console.log('colors ', colors)
    return (
        <View >
            <Button 
                onPress={()=> {
                    setColors([...colors, randomColor()])
                }}
                title="Add Color"
            />
          
            <FlatList style={style.viewStyle}
                keyExtractor={(item) => item}
                data={colors}
                renderItem = {({item}) => {
                   return  <View style={{width:100, height:100, backgroundColor:`${item}`}}></View>
                }}
                />
              
        </View>
    )
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`

}

const style = StyleSheet.create({
    boxStyle: {
        fontSize:20
    },
    viewStyle : {
       marginHorizontal:60,
      
     
    }
})

export default ColorScreen