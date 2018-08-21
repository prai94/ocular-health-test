//import SpeechAndroid from 'react-native-android-voice';
import React, { Component } from 'react';
import { Dimensions,TouchableOpacity,Image,AsyncStorage,TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import result from '../screens/result';
import {NativeModules} from "react-native";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  Alert,
} from 'react-native';
import {
  DeviceEventEmitter // will emit events that you can listen to
} from 'react-native';
var {
    Accelerometer
} = require('NativeModules');

import Gyroscope from 'NativeModules';

var mSensorManager = require('NativeModules').SensorManager;
global.count=0;
global.tx=0;
global.ty=0;
global.tz=0;
global.e=[0,0,0,0,0,0,0,0];
global.c=1;

var index=require('./images/g1.png');

const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;

export default class test extends Component
{
 constructor(props) {
  super(props);
    this.state = {
    x: 0,
    y: 0,
    z: 0,
    gyro: false,
    flag:0
  };
}



componentWillMount () {
 DeviceEventEmitter.addListener('Gyroscope', function (data) {
count++;
console.log("count:" + count);
if(c==1)
{
index=require('./images/g1.png');
}

if(count==10)
{
  c++;
  if(c==2)
  {
  index=require('./images/g2.png');
  console.log("component"+c);
  }
  if(c==3)
  {
  index=require('./images/g3.png');
  console.log("component"+c);
  }
  if(c==4)
  {
  index=require('./images/g4.png');
  console.log("component"+c);
  }
  if(c==5)
  {
  index=require('./images/g5.png');
  console.log("component"+c);
  }
  if(c==6)
  {
  index=require('./images/g6.png');
  console.log("component"+c);
  }
  if(c==7)
  {
  index=require('./images/g7.png');
  console.log("component"+c);
  }
  //this.setState({flag:1});
}
    this.setState({

      x: data.x,
      y: data.y,
      z:data.z,
     gyro: true
    });
      tx=tx+(this.state.x)*(this.state.x);
      console.log("tx"+tx);
      ty=ty+(this.state.y)*(this.state.y);
      console.log("ty"+ty);
      tz=tz+(this.state.z)*(this.state.z);
      console.log("tz"+tz);
  }.bind(this));
}

/*componentDidUnmount () {
  mSensorManager.stopGyroscope();
}*/

handleStart (){
  mSensorManager.startGyroscope(1000);
  console.log("gyro in handle entry:"+this.state.x);
  this.setState({
    gyro: false
  });
  console.log("gyro in handle exit:"+this.state.gyro);
}


handleStop=()=>{
  console.log("handle stop:"+this.state.gyro);
  mSensorManager.stopGyroscope();
  console.log("handle Stop");
  c=1;
this.props.navigation.navigate('result');
};

render()
{
console.log("c : "+c);
  if(count==10)
  {

      if(ty>=2)
      {
       console.log("yes");
       count=0;
       tx=0;ty=0;tz=0;

        ToastAndroid.show("CORRECT",ToastAndroid.LONG);

      }
     else if(tx>=2)
     {
      console.log("no");
      e[c-1]=-1;
      tx=0;ty=0;tz=0;
       count=0;
       ToastAndroid.show("INCORRECT",ToastAndroid.LONG);
      }
      else
      {
        console.log("Again");
        c--;

        if(c==2)
        {
        index=require('./images/g2.png');
        console.log("component"+c);
        }
        if(c==3)
        {
        index=require('./images/g3.png');
        console.log("component"+c);
        }
        if(c==4)
        {
        index=require('./images/g4.png');
        console.log("component"+c);
        }
        if(c==5)
        {
        index=require('./images/g5.png');
        console.log("component"+c);
        }
        if(c==6)
        {
        index=require('./images/g6.png');
        console.log("component"+c);
        }
        if(c==7)
        {
        index=require('./images/g7.png');
        console.log("component"+c);
        }
     ToastAndroid.show("TRY AGAIN",ToastAndroid.LONG);
      tx=0;ty=0;tz=0;
      count=0;
    }

     if(c==8)
     {
       index=require('./images/g1.png');
       console.log("aa gayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
     this.handleStop();
     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxaa gayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

     }
     return null;
   }
   else
   {


    if(c==8)
     {
      index=require('./images/g1.png');
       console.log("aa gayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
     this.handleStop();
     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxaa gayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
     return null;
     }
     else
     {
       console.log("image ");
   return(
   <View>
     <Image style={styles.image} source={index}  />
    </View>
   );
  }
  }
    }
  }

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       backgroundColor:'black',
      // justifyContent:'space-between',
    },
    container1: {
      flex: 1,
      //alignItems: 'center',
    //  marginTop: 50,
      backgroundColor:'white',
      justifyContent:'center',

   },
    textInput: {
       margin: 15,
       height: 35,
       borderWidth: 1,
       backgroundColor: '#7685ed'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#2e8b57',
      paddingTop:0 ,
      marginLeft:DEVICE_WIDTH/4,
      borderRadius: 10,
      borderWidth: 5,
      borderColor: '#008080',
      justifyContent: 'center',
      width: 150,
      height:50,
    },

    image: {
      justifyContent:'center',
      alignItems: 'center',
      marginLeft:0,
         marginTop:40,
         width:DEVICE_WIDTH,
         height:DEVICE_WIDTH,

    },
   textContainer:{
     paddingTop:40,
     fontSize: 15,
     fontFamily: 'lucida grande',
     color:'#ff5e57',
     fontWeight: 'bold',
     alignItems: 'center',
     paddingLeft:25,
     paddingRight:15,
     justifyContent:'center',
     //textShadowRadius:'10',
     //textShadowOffset:{width: 10,height: 10}
   }
 })
