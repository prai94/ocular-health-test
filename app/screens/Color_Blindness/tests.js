import React, { Component } from 'react';
import {Image,ScrollView, View, Text,StyleSheet,Dimensions,TouchableOpacity ,TextInput,ImageBackground} from 'react-native';
import imageid from './imageDetails';
import DialogBox from 'react-native-dialogbox';

const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;

export default class tests extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleChangeText = () => {
    this.dialogbox.alert(`${imageid.id}`);
  }

  render(){
  return(
    <View>
      <Text>1</Text>
      <Image source={require('../images/2.png')} />
      <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleChangeText}>
                 <Text> Submit </Text>
        </TouchableOpacity>
        <DialogBox ref={dialogbox => { this.dialogbox = dialogbox }}/>
    </View>
  );
}
}

const styles=StyleSheet.create({
    container: {
      height:150,
    //  width:150,
   alignItems: 'center',
    backgroundColor: 'black',
    //  width:DEVICE_WIDTH,
    //  height:DEVICE_HEIGHT,
      padding: 10,
      //borderRadius: 100,
      //borderWidth: 5,
      //borderColor: '#008080',
      //justifyContent: 'center',
      //width: 145,

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2e8b57',
    paddingLeft: 0,
    marginLeft:DEVICE_WIDTH/4,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#008080',
    justifyContent: 'center',
    width: 150,
    height:50,
  },
});
