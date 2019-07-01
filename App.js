import React ,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

import TextList from './src/components/TextList';

import Todolist from './Todolist'
class App extends Component{
    constructor(props){
      super(props);
    
    }
 
   

    render(){
      
      return(
       
        <View style={styles.container}>
         <TextList />
        </View>
         
     
      )
    }

} 

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:26,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  newContainer:{
    
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start"



  }
});
