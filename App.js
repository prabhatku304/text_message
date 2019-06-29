import React ,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';


class App extends Component{
    constructor(props){
      super(props);
      this.state={
        text:[],
        add:""
      }
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(event){
     
      this.setState({add : event})
    }
    handleSubmit(event){
    let newText = this.state.add;
    let previousText = this.state.text;
    this.setState({text:[...previousText,newText]});
    }

    render(){
      return(
        <View style={styles.container}>
          <TextInput
            placeholder="enter your text"
            onChangeText={this.handleChange}
            value={this.state.add}
          />
          <Button
           onPress={this.handleSubmit}
           title="click me"
          />
        </View>
      )
    }

} 

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
