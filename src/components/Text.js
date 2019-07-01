import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Button} from "react-native";

const TextItem = (props)=>{
         return(
             
             <View style={styles.textStyle}>
             <Text>{props.text}</Text>
             <Button
                title="X"
                onPress={props.onDelete}
             />
             </View>
           
         )
         }

const styles = StyleSheet.create({
    textStyle:{
        padding:10,
      flexDirection:"row",
        backgroundColor:"#eee",
        justifyContent:"space-around"
    }
})



export default TextItem;