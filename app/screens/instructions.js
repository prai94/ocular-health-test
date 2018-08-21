import React, { Component } from 'react';
import {Image,ScrollView, View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';

//import Button from './components/Button';
//import Home from './Home';
const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;
import test from './test';
import {NativeModules} from "react-native";
import {DeviceEventEmitter} from 'react-native';
import Gyroscope from 'NativeModules';
import Tts from 'react-native-tts';
var mSensorManager = require('NativeModules').SensorManager;

export default class instructions extends Component {

  goToTests = () => {
    Tts.stop();
    mSensorManager.startGyroscope(1000);
    this.props.navigation.navigate('test');
  };

  // setTimeout(function(){
  //
  //   mSensorManager.startGyroscope(1000);
  //   this.props.navigation.navigate('test');
  //
  // }, 5000);

  render() {
    Tts.setDefaultPitch(.9);
      Tts.speak('Please put on VR glass for better precision.');
      Tts.speak('Keep your eye focused on the dot in the center of the grid');
      Tts.speak('Move your head horizontally from right to left three times if answer is YES for any of the following questions');
      Tts.speak('Move your head vertically from up to down three times if answer is NO for any of the following questions');
      Tts.speak('Do any of the lines in the grid appear wavy, blurred or distorted?');
      Tts.speak('Do all the boxes in the grid look square and the same size?');
      Tts.speak('Are there any “holes” missing areas or dark areas in the grid?');
      Tts.speak('Can you see all corners and sides of the grid while keeping your eye on the central dot');
      Tts.speak('Are you able to distinguish the dots?');
    return (
      <View style={styles.container} >
        <ScrollView>
          <View style={styles.container1} >
       <Text style={styles.textContainer}>
         1.Please put on VR glass for better precision.{'\n'}{'\n'}
         2.Keep your eye focused on the dot in the center of the grid{'\n'}{'\n'}
         3.Move your head horizontally<Text style={styles.text}>(from right to left)</Text> three times if answer is <Text style={styles.text}>YES</Text> for any of the following questions{'\n'}{'\n'}
         4.Move your head vertically<Text style={styles.text}>(from up to down)</Text> three times if answer is <Text style={styles.text}>NO</Text> for any of the following questions{'\n'}{'\n'}
         (a). Do any of the lines in the grid appear wavy, blurred or distorted?{'\n'}{'\n'}
         (b). Do all the boxes in the grid look square and the same size?{'\n'}{'\n'}
         (c). Are there any “holes” (missing areas) or dark areas in the grid?{'\n'}{'\n'}
         (d). Can you see all corners and sides of the grid (while keeping your eye on the central dot)?{'\n'}{'\n'}
         (e). Are you able to distinguish the dots?{'\n'}{'\n'}
       </Text>
       <TouchableOpacity style={styles.button} onPress={this.goToTests}>
                <Text> Start </Text>
       </TouchableOpacity>
         </View>
</ScrollView>

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
      flex:1,
      //padding: 10,
      //borderRadius: 100,
      //borderWidth: 5,
      //borderColor: '#008080',
      //justifyContent: 'center',
      //width: 145,

  },
  container1:{
    flex:1,
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
  text : {
    color: 'red',
    fontFamily:'Times New Roman',

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
