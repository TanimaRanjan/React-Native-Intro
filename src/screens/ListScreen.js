import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'


const ListScreen = () => {

    const friends = [
        {name: 'Name 1', age:25},
        {name: 'Name 2', age:26},
        {name: 'Name 3', age:27},
        {name: 'Name 4', age:28},
        {name: 'Name 5', age:23},
        {name: 'Name 6', age:29},
        {name: 'Name 7', age:29},
        {name: 'Name 8', age:25},
        {name: 'Name 9', age:27},

    ]
    return (
        <View>
            <FlatList 
                // horizontal
                // showsHorizontalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}
                data={friends} 
                renderItem ={({item}) => {
                    return <Text style={style.textStyle}>{item.name} - {item.age}</Text>
                }}
            />

            </View>
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize:30,
        marginVertical:50
    }
})

export default ListScreen