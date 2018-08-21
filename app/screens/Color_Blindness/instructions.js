import React, { Component } from 'react';
import {Image,ScrollView, View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';

//import Button from './components/Button';
//import Home from './Home';
const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;
import test from './test';


export default class instructions extends Component {
  goToTests = () => {
    this.props.navigation.navigate('tests');
  };

 /*GenerateRandomNumber = () => {
    var RandomNumber = /math.floor(Math.random()*100) +1;

    this.state ({
      NumberHolder : 1
    })
  }*/



  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.textContainer}>

         1.Keep the Phones at an arm's length.{'\n'}{'\n'}
         2.Keep head straight and the device in front of your eyes.{'\n'}{'\n'}
         3.Try to identify the object in the pattern  glaucoma.{'\n'}{'\n'}


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
    //  alignItems: 'center',
      backgroundColor: 'black',
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
    paddingTop:DEVICE_WIDTH/3,
    paddingLeft:10,
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
  width:150,
  height:150,
}

});
