import React ,{Component} from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';


class TextForm extends Component{
    constructor(props){
        super(props);
        this.state={
            add:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(t){
        
        this.setState({add:t});
    }
    handleSubmit(e){
        console.log(this.state.add)
        
        this.props.addText(this.state.add);
        
      

    }

    render(){
        return(
            <View style={styles.Inputform}>
                <TextInput
                 placeholder="text"
                 value={this.state.add}
                 onChangeText={this.handleChange} 
                 style={{width:300}}
                />
                <Button
                  title="Enter"
                  onPress={this.handleSubmit}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Inputform:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-start",
        padding:20
    }
})

export default TextForm;