import React, {Component} from 'react';
import {View,TextInput,Button,Text} from 'react-native';


class Todoform extends Component{
      constructor(props){
          super(props);
          this.state={
              add:""
          }
      }
      handleChange(text){
         this.setState({add:text});
      }
      handleSubmit(){
          this.props.Add(this.state.add)
      }

      render(){
          return(
              <View>
                
                 <TextInput
                  placeholder="text"
                  value={this.state.add}
                  onChangeText={this.handleChange}
                 />
                 <Button
                 title="enter"
                 onPress={this.handleSubmit}
                 />
                 <Text>hello</Text>
              </View>
          )
      }
}

export default Todoform;