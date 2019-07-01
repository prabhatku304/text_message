import React, {Component} from 'react';
import {View,Text,List} from 'react-native';
import Todoform from './Todoform';
import Todo from './Todo';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            text:[]
        }
        this.newData=this.newData.bind(this);
    }
    newData(data){
        this.setState({text:[...text,data]});
    }
    render(){
        let text = this.state.text.map((r,i)=><Todo key={i} text={r}/>)
        return(
            <View>
                <Todoform Add={this.newData}/>
                 <Text>Welcome</Text>
            </View>
        )
    }
}
export default Todolist;