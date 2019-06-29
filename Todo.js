import React ,{Component} from 'react';
import {View,Text} from 'react-native';


const Todo = (props)=>{
    return(
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

export default Todo;