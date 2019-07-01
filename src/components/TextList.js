import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import TextItem from './Text';
import TextForm from './TextForm';



class TextList extends Component{
    constructor(props){
        super(props);
        this.state={

            text:[],
            next_id:0
            
        }
        this.newText = this.newText.bind(this);
    }
    newText(data){
       
       
        this.setState(prev=>{
            const newData = {data,id:this.state.next_id+1};
            
            return{
                next_id:prev.next_id+1,
                text:[...this.state.text,newData]
                
                
            }
        })
    }
    
    onItemDeleted(id){
        console.log("hello")
        console.log(id);
        let newData = this.state.text.filter(r=>
                r.id !== id
            
        )
        this.setState({text:newData});
    }
    render(){
        let text = this.state.text.map((r,i)=>(
             
        <TextItem text={r.data} key={r.id}  onDelete={this.onItemDeleted.bind(this,r.id)}/>))
        return(
            <View>
             <TextForm addText={this.newText}/>
             <View>
                 {text}
             </View>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
         flex:1,
         padding:20,
         flexDirection:"column",
         alignItems:"flex-start"
    }
})

export default TextList;