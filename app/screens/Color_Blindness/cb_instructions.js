import React, { Component } from 'react';
import {Image,ScrollView, View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';
//import Button from './components/Button';
//import Home from './Home';
const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;
import cb_tests from './cb_tests';
//import cb_id from './cb_id';

export default class cb_instructions extends Component {

  goToTests = () => {
    //this.props.navigation.navigate('cb_tests');
    Tts.stop();
    this.props.navigation.navigate('cb_tests');
  };

 /*GenerateRandomNumber = () => {
    var RandomNumber = /math.floor(Math.random()*100) +1;

    this.state ({
      NumberHolder : 1
    })
  }*/
  render() {
    Tts.setDefaultPitch(.9);
    Tts.speak('Wear your corrective lenses before taking this test.');
    Tts.speak('Keep the Phone at an arms length.');
    Tts.speak('Keep head straight and the device in front of your eyes.');
    Tts.speak('Try to identify the object in the pattern.');
    return (
      <View style={styles.container} >
        <Text style={styles.textContainer}>

         1.Wear your corrective lenses before taking this test.{'\n'}{'\n'}
         2.Keep the Phone at an arm's length.{'\n'}{'\n'}
         3.Keep head straight and the device in front of your eyes.{'\n'}{'\n'}
         4.Try to identify the object in the pattern.{'\n'}{'\n'}

       </Text>

       <TouchableOpacity style={styles.button} onPress={this.goToTests}>
                <Text> Start </Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container: {
    // alignItems: 'center',
      backgroundColor: '#01a3a4',
      width:DEVICE_WIDTH,
      height:DEVICE_HEIGHT,
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
