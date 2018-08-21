import React, { Component } from 'react';
import {Image,ScrollView, View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';

//import Button from './components/Button';
//import Home from './Home';
const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;
import ri_tests from './ri_tests';
import Tts from 'react-native-tts';
export default class ri_instructions extends Component {

  goToTests = () => {
    Tts.stop();
    this.props.navigation.navigate('ri_tests');
  };

 /*GenerateRandomNumber = () => {
    var RandomNumber = /math.floor(Math.random()*100) +1;

    this.state ({
      NumberHolder : 1
    })
  }*/
  render() {
    if(ri_left==1)
    {
      Tts.setDefaultPitch(.9);
      Tts.speak('Keep the Phones at an arms length.');
      Tts.speak('Keep head straight and the device in front of your eyes.');
      Tts.speak('Now close your Right Eye and try to identify the object with the Left Eye.');
    return (
      <View style={styles.container} >
      <ScrollView>
        <View style={styles.container}> 
        <Text style={styles.textContainer}>
         1.Keep the Phones at an arm's length.{'\n'}{'\n'}
         2.Keep head straight and the device in front of your eyes.{'\n'}{'\n'}
         3.Now close your Right Eye and try to identify the object with the <Text style={{color:'red'}}>Left Eye.</Text>{'\n'}{'\n'}

       </Text>

       <TouchableOpacity style={styles.button} onPress={this.goToTests}>
                <Text> Start </Text>
       </TouchableOpacity>
       </View>
       </ScrollView>
      </View>
    );
  }
  else{
    Tts.setDefaultPitch(.9);
    Tts.speak('Keep the Phones at an arms length.');
    Tts.speak('Keep head straight and the device in front of your eyes.');
    Tts.speak('Now close your Left Eye and try to identify the object with the Right Eye.');
    return (
      <View style={styles.container} >
        <Text style={styles.textContainer}>
         1.Keep the Phones at an arm's length.{'\n'}{'\n'}
         2.Keep head straight and the device in front of your eyes.{'\n'}{'\n'}
         3.Now close your Left Eye and try to identify the object with the <Text style={{color:'red'}}>Right Eye.</Text>{'\n'}{'\n'}
       </Text>

       <TouchableOpacity style={styles.button} onPress={this.goToTests}>
                <Text> Start </Text>
       </TouchableOpacity>
      </View>
    );
  }
  }
}

const styles=StyleSheet.create({
    container: {
    // alignItems: 'center',
      backgroundColor: '#01a3a4',
      width:DEVICE_WIDTH,
      height:DEVICE_HEIGHT,
      flex:1,
      //padding: 10,
      //borderRadius: 100,
      //borderWidth: 5,
      //borderColor: '#008080',
      //justifyContent: 'center',
      //width: 145,

  },

  textContainer : {
    color: 'white',
    fontFamily:'Times New Roman',
    paddingTop:DEVICE_WIDTH/6,
    paddingLeft:15,
    paddingRight:5,
    fontSize:24,
    //textAlign:'center',
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
image:{
  width:50,
  height:250,
}

});
