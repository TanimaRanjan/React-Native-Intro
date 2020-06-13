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
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    backgroundColor:'pink',
    borderBottomColor:'blue',
    marginTop:50,
    borderBottomWidth:67,
    
  }
});

export default HomeScreen;


