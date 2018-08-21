import SpeechAndroid from 'react-native-android-voice';
import React, { Component } from 'react';
import { Dimensions,TouchableOpacity,Image,AsyncStorage,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import cb_result from './cb_result';
import Tts from 'react-native-tts';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  Alert,
} from 'react-native';

var arr= [0,12,8,6,29,57,5,3,15,74,2,6,97,45,5,7,16,73,"Nothing","Nothing","Nothing","Nothing",26,42,35,96];

var n1="";
var n2="";
var n3="";
var n4="";

var count=0;
var spokenText;
var x;
var x1;
var b1;
var index=1;
const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;


export default class cb_tests extends Component
{

    constructor(props)
       {

        super(props);
        this.state = {flag:0};

global.brr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
       }


    componentWillMount = () =>
    {
    protanopia=0;
       deuteranopia=0;
        count=0;
        //C:\Users\HP\Desktop\CurrencyConverter\app\screens\images\12i.PNG
        index=1;
        x=require('../images/pl1.png');
        n1="12";
        n2="10";
        n3="21";
        n4="Nothing";
     }

    handleChangeText(n)
    {

      brr[index]=n;
     /* if(index==1 &&(n!="12"))
         {
          brr[index]="12";//addition
          this.props.navigation.navigate('cb_result');
         }*/

      {/* if(arr[index]>100)
       {
         if(spokenText=='no')
         {
        // Alert.alert('You identified correctly.');
        //addition
        brr[index]=spokenText;
         }
         else
         {
          //Alert.alert('Wrong Identification');
          brr[index]=spokenText;
        }
       }
       else
       {
        if(spokenText==arr[index])
        {
          //addition
          brr[index]=spokenText;
          //Alert.alert('You identified correctly. ');
          //console.log("correct");
        }
        else if(arr[index]==2 ||arr[index]==6 ||arr[index]==3 )
        {
          if(spokenText=='to' ||spokenText=='sex'||spokenText=='free')
          {
          brr[index]=spokenText;
          }
        }
       else
       {
       //  Alert.alert('Wrong Identification');
         brr[index]=spokenText;
        // console.log("not_correct");
         if(index==1 &&(spokenText!='well'))
         {
          brr[index]=spokenText;//addition
          this.props.navigation.navigate('cb_result');
         }
       }
       } */}

          if(index<=24)
          {
            this.printVal();
          }
          else
          {
         this.props.navigation.navigate('cb_result');
          }
      }


      printVal = () =>
      {
      index++;
      //console.log("printVal");
      if(index==2)
      {
      x=require('../images/pl2.png');
     // x1=require('../images/8n.jpg');
      //b1=require('../images/3n.jpg');
      n1="5";
      n2="8";
      n3="3";
      n4="Nothing";
      }
      else if(index==3){
        x=require('../images/pl3.png');
        //x1=require('../images/6n.jpg');
        //b1=require('../images/5n.jpg');
      n1="3";
      n2="5";
      n3="6";
      n4="Nothing";
      }
      else if(index==4){
        x=require('../images/pl4.png');
        //x1=require('../images/29n.jpg');
        //b1=require('../images/70n.jpg');
        n1="70";
      n2="58";
      n3="29";
      n4="Nothing";
      }
      else if(index==5)
      {
        x=require('../images/pl5.png');
        //x1=require('../images/57n.png');
        //b1=require('../images/35n.jpg');
        n1="57";
      n2="35";
      n3="37";
      n4="Nothing";
      }
      else if(index==6)
      {
        x=require('../images/pl6.png');
        //x1=require('../images/5n.jpg');
        //b1=require('../images/2n.png');
        n1="3";
        n2="2";
        n3="5";
        n4="Nothing";
      }
      else if(index==7)
      {
        x=require('../images/pl7.png');
        //x1=require('../images/3n.jpg');
        //b1=require('../images/5n.jpg');
        n1="8";
      n2="3";
      n3="5";
      n4="Nothing";
      }
      else if(index==8)
      {
        x=require('../images/pl8.png');
        //x1=require('../images/15n.png');
        //b1=require('../images/17n.jpg');
        n1="17";
      n2="13";
      n3="15";
      n4="Nothing";
      }
      else if(index==9)
      {
        x=require('../images/pl9.png');
        //x1=require('../images/74n.png');
        //b1=require('../images/21n.png');
        n1="74";
      n2="44";
      n3="21";
      n4="Nothing";
      }
      else if(index==10)
      {
        x=require('../images/pl10.png');
       // x1=require('../images/2n.png');
        //b1=require('../images/21n.png');
        n1="7";
      n2="2";
      n3="5";
      n4="Nothing";
      }
      else if(index==11)
      {
        x=require('../images/pl11.png');
        //x1=require('../images/6n.jpg');
        //b1=require('../images/non.jpg');
        n1="8";
      n2="6";
      n3="0";
      n4="Nothing";
      }
      else if(index==12)
      {
        x=require('../images/pl12.png');
        //x1=require('../images/97n.png');
        //b1=require('../images/non.jpg');
        n1="97";
      n2="84";
      n3="87";
      n4="Nothing";
      }
      else if(index==13)
      {
        x=require('../images/pl13.png');
        //x1=require('../images/45n.png');
        //b1=require('../images/non.jpg');
        n1="45";
      n2="48";
      n3="75";
      n4="Nothing";
      }
      else if(index==14)
      {
        x=require('../images/pl14.png');
        //x1=require('../images/5n.jpg');
        //b1=require('../images/non.jpg');
        n1="2";
      n2="3";
      n3="5";
      n4="Nothing";
      }
      else if(index==15)
      {
        x=require('../images/pl15.png');
        //x1=require('../images/7n.png');
        //b1=require('../images/non.jpg');
        n1="7";
      n2="1";
      n3="4";
      n4="Nothing";
      }
      else if(index==16)
      {
        x=require('../images/pl16.png');
        //x1=require('../images/16n.jpg');
        //b1=require('../images/non.jpg');
        n1="18";
      n2="26";
      n3="16";
      n4="Nothing";
      }
      else if(index==17)
      {
        x=require('../images/pl17.png');
        //x1=require('../images/73n.jpg');
        //b1=require('../images/non.jpg');
        n1="73";
        n2="78";
        n3="43";
        n4="Nothing";
      }
      else if(index==18)
      {
        x=require('../images/pl18.png');
        //x1=require('../images/101n.png');
        //b1=require('../images/non.jpg');
        n1="23";
        n2="5";
        n3="2";
        n4="Nothing";
      }
      else if(index==19)
      {
        x=require('../images/pl19.png');
       // x1=require('../images/102n.jpg');
       // b1=require('../images/non.jpg');
       n1="2";
       n2="8";
       n3="1";
       n4="Nothing";
      }
      else if(index==20)
      {
        x=require('../images/pl20.png');
       // x1=require('../images/103n.png');
       // b1=require('../images/non.jpg');
       n1="8";
       n2="3";
       n3="45";
       n4="Nothing";
      }
      else if(index==21)
      {
        x=require('../images/pl21.png');
       // x1=require('../images/104n.png');
       // b1=require('../images/non.jpg');
       n1="3";
       n2="7";
       n3="73";
       n4="Nothing";
      }
      else if(index==22)
      {
        x=require('../images/pl22.png');
       // x1=require('../images/26n.png');
       // b1=require('../images/non.jpg');
       n1="2";
       n2="6";
       n3="26";
       n4="Nothing";
      }
      else if(index==23)
      {
        x=require('../images/pl23.png');
      //  x1=require('../images/42n.jpg');
      //  b1=require('../images/non.jpg');
      n1="2";
      n2="42";
      n3="4";
      n4="Nothing";
    }
      else if(index==24)
      {
        x=require('../images/pl24.png');
       // x1=require('../images/35n.jpg');printVal
       // b1=require('../images/non.jpg');
       n1="35";
       n2="5";
       n3="3";
       n4="Nothing";
      }
      else if(index==25)
      {
        x=require('../images/pl25.png');
      //  x1=require('../images/96n.jpg');
       // b1=require('../images/non.jpg');
       n1="6";
       n2="96";
       n3="9";
       n4="Nothing";
      }
      this.setState({flag:1});
      }

       render()
       {
        if(index==1)
        Tts.speak('Please click on the button corresponding to the number that you see');

      return (
        <View style={styles.container}>
  <Image style={styles.image} source={x}  />
<View style={styles.container1} >
<TouchableOpacity style={styles.mybutton} onPress={this.handleChangeText.bind(this,n1)}>
        <Text style={styles.mytext}>{n1}</Text>
  </TouchableOpacity >
  <TouchableOpacity  style={styles.mybutton} onPress={this.handleChangeText.bind(this,n2)}>
        <Text style={styles.mytext}>{n2}</Text>
  </TouchableOpacity >
  <TouchableOpacity style={styles.mybutton} onPress={this.handleChangeText.bind(this,n3)}>
        <Text style={styles.mytext}>{n3}</Text>
  </TouchableOpacity >
  <TouchableOpacity style={styles.mybutton} onPress={this.handleChangeText.bind(this,n4)}>
        <Text style={styles.mytext}>{n4}</Text>
  </TouchableOpacity >
</View>
   </View>
    );
  }
    }


const styles = StyleSheet.create ({

  mytext:{
   color:'black',
   fontSize:20,
  },
    mybutton:{
      alignItems: 'center',
      backgroundColor:'#a6a6a6',
      padding: 10,
      marginRight:10,
      marginTop:5,
      borderRadius: 10,
      //borderWidth: 5,
     // borderColor: 'white',
      justifyContent: 'center',
      width: 110,
      height:110,
    },
    container: {
       flex: 1,
       //alignItems: 'center',
     //  marginTop: 50,
       backgroundColor:'black',
      // justifyContent:'space-between',
      flexDirection: 'column',
    },
    container1: {
     /* flex: 1,
      //alignItems: 'center',
    //  marginTop: 50,
    marginLeft:30,
      backgroundColor:'black',
      justifyContent:'flex-start',
      flexDirection:'row',*/
     // backgroundColor:'red',
      flex: 1,
      flexDirection: 'row',
      flexWrap:'wrap',
      //width:DEVICE_WIDTH/3,
      //height:DEVICE_HEIGHT/3,
      justifyContent: 'center',
      paddingHorizontal: 10,
      //paddingLeft:20,
      paddingTop:50,
      paddingBottom:40,
      //justifyContent:'space-around',
      alignContent:'space-around',

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
     // marginTop:DEVICE_HEIGHT/8,
     marginBottom:10,
     marginLeft:DEVICE_WIDTH/4,
      borderRadius: 10,
      borderWidth: 5,
      borderColor: '#008080',
      justifyContent: 'center',
      width: 150,
      height:50,
      //alignSelf:DEVICE_WIDTH/4,
    // marginTop:DEVICE_WIDTH/5,
    },
    button1:{
      alignItems: 'center',
      backgroundColor:'grey',
      paddingTop:0 ,
      marginBottom:DEVICE_HEIGHT/20,
      marginLeft:DEVICE_WIDTH/2.5,
      borderRadius: 20,
      borderWidth: 5,
    //  borderColor: '#008080',
      justifyContent: 'center',
      width: 70,
      height:70,
    },
   /* button1: {
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
      marginBottom:DEVICE_WIDTH/3.5,
    },*/

    image: {
      justifyContent:'center',
      alignItems: 'center',
      marginLeft:DEVICE_WIDTH/5,
         marginTop:40,
         width:200,
         height:200,
         borderColor:'black',
         borderWidth:1,

    },

    image1: {
      justifyContent:'center',
      alignItems: 'center',
     // marginTop:DEVICE_HEIGHT/8,
     // marginLeft:DEVICE_WIDTH/5,
        // marginTop:40,
         width:50,
         height:50,
        // borderRadius:35,

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
