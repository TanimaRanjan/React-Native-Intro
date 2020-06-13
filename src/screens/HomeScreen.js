import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button 
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo" />
      
      <Button 
      onPress={() => navigation.navigate("List")}
      title="Go to List Demo"
       />
      
      <Button 
       onPress={() => navigation.navigate("Image")}
       title="Go to Image Demo"
        />
        
      <Button 
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen "
         /> 

      <Button 
         onPress={() => navigation.navigate("Color")}
         title="Go to Color Screen "
          /> 

      <Button 
          onPress={() => navigation.navigate("Change")}
          title="Go to Change Color Screen "
           /> 
      <Button 
          onPress={() => navigation.navigate("Print")}
          title="Go to Print name Screen "
          /> 
      <Button 
          onPress={() => navigation.navigate("BoxS")}
          title="Go to Box Screen "
        /> 
      <Button 
            onPress={() => navigation.navigate("Flex")}
            title="Go to Flex Screen "
        /> 
      <Button 
        onPress={() => navigation.navigate("Pos")}
        title="Go to Position Screen "
      /> 
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    backgroundColor:'steelblue',
    // flex:1,
    width:'100%',
    // height:'100%',
    // flexDirection:'row',
    // borderBottomColor:'blue',
    textAlign:"center",
    marginTop:50,
    marginBottom:20
    // borderBottomWidth:67,
    
  },
  viewStyle : {
    flex:1,
    flexDirection:'row'
  }
});

export default HomeScreen;


