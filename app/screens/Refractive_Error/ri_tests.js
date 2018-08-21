import React, { Component } from 'react';
import { Dimensions,TouchableOpacity,Image,Button,AsyncStorage, Text, View, TextInput, StyleSheet,Alert ,ToastAndroid} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ri_result from './ri_result';
import ri_instructions from './ri_instructions';
import SpeechAndroid from 'react-native-android-voice';
import Tts from 'react-native-tts';

var arr= ['Z','M','V','X','Y','O','T','V','H','U','Z','X','U','M','T','X','Z','Y'];
global.brr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
global.error=0;
global.level=0;

var spokenText;
var x;
var index=1;
var count=0;
var p=0;
var n=0;
const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;

class ri_tests extends Component {

   constructor(props) {
     super(props);
     this.state = {flag:0};
   }

   handleChangeText = () => {
     if(spokenText.toUpperCase()==arr[index])
     {
       console.log('handlechange if');
      // Alert.alert('You identified correctly. ');
       count++;
       p++;
     }


     else if((arr[index]=='Y' ||arr[index]=='U' )&&(spokenText=='why' ||spokenText=='bye' || spokenText=='you'))
     { 
         console.log('handlechange else if - if');
       //  Alert.alert('You identified correctly. ');
         count++;
         p++;
    }
    else
    {
      console.log('handlechange else ');
     // Alert.alert('Wrong Identification');
      count++;
      n++;
   }

   if(count==3)
  {
        level++;
        count=0;
        console.log("p="+p+" n="+n);
      if(p<n)
      { 
        error=1;
       // console.log("p1");
        if(ri_left==1)
        {
          level_l=level;
          ri_left=0,
          this.props.navigation.navigate('ri_instructions');
        }
        else{
          level_r=level;
          this.props.navigation.navigate('ri_result');
        }
       
      }
        
      n=0;
      p=0;
    }
    
   if(level<6)
   {
       console.log('handlechange new if');
          this.printVal();
        }
        else
        {
          console.log('handlechange new else');
          if(ri_left==1)
        {
          level_l=level;
          ri_left=0,
          this.props.navigation.navigate('ri_instructions');
        }
        else{
          level_r=level;
          this.props.navigation.navigate('ri_result');
        }
        
        }
        /*console.log("p2");
        this.props.navigation.navigate('ri_result');*/
    
    

   /* if(level<6)
    {
      console.log('handlechange new if');
      this.printVal();
    }
    else
    {
      console.log('handlechange new else');
      this.props.navigation.navigate('ri_result');
    }*/
  }

componentWillMount = () => {
  index=1;
  level=0;
  count=0;
  error=0;
  spokenText='';
  brr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var RandomNumber = Math.floor(Math.random() * 3);
  index=RandomNumber;
  brr[index]=1;

  if(arr[index]=='Z'){
   x=require('../ri_images/znl1.png');
  }
  else if(arr[index]=='M')
  {
    x=require('../ri_images/ml1.png');
  }
  else if(arr[index]=='V'){
    x=require('../ri_images/vl1.png');
  }
}


printVal = () => {
  this.setState({flag:1});
  var RandomNumber = Math.floor(Math.random() * 3) + (3*level);
  index=RandomNumber;
  while (brr[index]==1) {
  index=(index+1)%3;
  index+=3*level;
  }
  brr[index]=1;

if(level==0) {
  if(arr[index]=='Z'){
   x=require('../ri_images/znl1.png');
  }
  else if(arr[index]=='M'){
    x=require('../ri_images/ml1.png');
  }
  else if(arr[index]=='V'){
    x=require('../ri_images/vl1.png');
  }
}


if(level==1) {
if(arr[index]=='X'){
 x=require('../ri_images/xnl2.png');
}
else if(arr[index]=='Y'){
  x=require('../ri_images/ynl2.png');
}
else if(arr[index]=='O'){
  x=require('../ri_images/onl2.png');
}
}

if(level==2) {
if(arr[index]=='T'){
 x=require('../ri_images/tnl3.png');
}
else if(arr[index]=='V'){
  x=require('../ri_images/vnl3.png');
}
else if(arr[index]=='H'){
  x=require('../ri_images/hnl3.png');
}
}

if(level==3) {
if(arr[index]=='U'){
 x=require('../ri_images/unl4.png');
}
else if(arr[index]=='Z'){
  x=require('../ri_images/znl4.png');
}
else if(arr[index]=='X'){
  x=require('../ri_images/xnl4.png');
}
}

if(level==4) {
if(arr[index]=='U'){
 x=require('../ri_images/unl5.png');
}
else if(arr[index]=='M'){
  x=require('../ri_images/mnl5.png');
}
else if(arr[index]=='T'){
  x=require('../ri_images/tnl5.png');
}
}

if(level==5) {
if(arr[index]=='X'){
 x=require('../ri_images/xnl6.png');
}
else if(arr[index]=='Z'){
  x=require('../ri_images/znl6.png');
}
else if(arr[index]=='Y'){
  x=require('../ri_images/ynl6.png');
}
}
}


async voicefunc()
{
  try{
   spokenText = await SpeechAndroid.startSpeech("Speak Now", SpeechAndroid.US);
 /* ToastAndroid.show(spokenText , ToastAndroid.LONG);
   ToastAndroid.showWithGravityAndOffset(
     spokenText ,
     ToastAndroid.LONG,
     ToastAndroid.BOTTOM,
     100,
     100
   );*/
  Tts.setDefaultPitch(.9);
 Tts.speak('You said');
 Tts.speak(spokenText);

}catch(error){
  switch(error){
      case SpeechAndroid.E_VOICE_CANCELLED:
          ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
          break;
      case SpeechAndroid.E_NO_MATCH:
          ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
          break;
      case SpeechAndroid.E_SERVER_ERROR:
          ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
          break;
  }
}
}

render() {
return (
  <View style={styles.container}>
<Image style={styles.image} source={x}  />
<Text>    </Text>
<View style={styles.container1}>
<TouchableOpacity style={styles.button1} onPress={() => this.voicefunc()} >
  <Image style={styles.image1} source={require('../images/mic.png')}  />
         {/*  <Text>  </Text> */}
   </TouchableOpacity>
   <Text>   </Text>
<TouchableOpacity style={styles.button} onPress={() => this.handleChangeText()} >
       <Text> Confirm </Text>
</TouchableOpacity>
</View>
</View>
 );
}
}
export default ri_tests

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //alignItems: 'center',
  //  marginTop: 50,
    backgroundColor:'black',
   // justifyContent:'space-between',
 },
 container1: {
   flex: 1,
   //alignItems: 'center',
 //  marginTop: 50,
   backgroundColor:'black',
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

  button1:{
    alignItems: 'center',
    backgroundColor: '#2e8b57',
    paddingTop:0 ,
    marginBottom:DEVICE_HEIGHT/20,
    marginLeft:DEVICE_WIDTH/2.5,
    borderRadius: 35,
    borderWidth: 5,
  //  borderColor: '#008080',
    justifyContent: 'center',
    width: 70,
    height:70,
  },

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
       width:70,
       height:70,
       borderRadius:35,

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
  }
})




