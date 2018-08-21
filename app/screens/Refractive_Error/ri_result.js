import React, { Component } from 'react';
import { Dimensions,TouchableOpacity,Image,Button,AsyncStorage, Text, View, TextInput, StyleSheet,Alert } from 'react-native';
import Home from '../Home';
import ri_tests from './ri_tests';
import { StackNavigator } from 'react-navigation';
//import convert_to_PDF from './convert_to_PDF';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
var x=0;
var arr=['6/60','6/36','6/24','6/18','6/12','6/9','6/6'];

const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;

class ri_result extends Component {

  gotoHome = () => {
    this.props.navigation.navigate('Home');
  };

  gotoPage1 = () => {
    this.props.navigation.navigate('cb_pg1');
  };

  gotoPDF = () => {
    Alert.alert("hello");
    this.props.navigation.navigate('convert_to_PDF');
  };

  createPDF() {


    const  html = `
       <html>
<style >
	div {
    background-color: lightblue;
}
</style>
<body>
<div 	>
 <form action="/action_page.php" >
  <fieldset >
    <div align=center style="font-size:40px">Eye Report:</div>
    <fieldset>
    <br>
    name:
    <input type="text" name="firstname" value= ${name}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    Regno.:
    <input type="text" name="lastname" value="20041994"><br><br>
</fieldset>
<fieldset>
<br>
    Age.:
    <input type="text" name="lastname" value= ${age}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    DOB:
    <input type="text" name="lastname" value= ${dob}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    Sex:
    <input type="text" name="lastname" value= ${sex}><br><br>
    </fieldset>
    <fieldset>
<br>
    SYST.:
    <input type="text" name="lastname" value="NA">
    </fieldset>
      <fieldset>
<br>
    c/o.:
    <input type="text" name="lastname" value="Refractive Index">
    </fieldset>
<feildset>
<table style="width:50%" border="1">	
<tr>
  <th rowspan="2">vision</th>
  <th>left eye</th>
  <th>right eye</th>
  <th rowspan="2"> glass</th>
  <th>left eye</th>
  <th>right eye</th>

</tr>
<tr>
   <td><input type="text" name="lastname" value=${arr[level_l]}></td>
  <td><input type="text" name="lastname" value=${arr[level_r]}></td>
   <td><input type="text" name="lastname" value="NA"></td>
  <td><input type="text" name="lastname" value="NA"></td>
</tr>
</table>
</form> 
</div>
</body>

      `

   // console.log(html)
    const options = {
     html, // HTML String
      fileName: 'Survey',
      directory: 'docs',
      height: 800,
      width: 1056,
      padding: 24,
    };


    RNHTMLtoPDF.convert(options).then(filePath => {
      console.log('PDF generated', filePath);
var s=filePath.toString();
// console.log("Yeh hai file Path Madar chod!!!!:", filePath);
console.log("The value of s="+s);
     // var p="data:html/pdf;base64,Survey.pdf"
      Share.open({
        title: "Survey PDF",
        message:  "I just wanted to show you this:",
       // url:"teri ma ki",
        //url:"file://"+s,
        url:"file:///storage/emulated/0/Documents/Survey.pdf",
        subject: "The PDF of your report is Attached below: ",
      });

    });
  }
  render () {
 //Alert.alert("error="+error+" level="+level);
    if(error==1)
    {
    return (
      <View style={styles.container}>
        <Text>  </Text>
        <Text style={{marginLeft:DEVICE_WIDTH/22,fontSize:28,color:'black'}}>Left Eye Vision: {arr[level_l]} </Text>
        <Text style={{marginLeft:DEVICE_WIDTH/22,fontSize:28,color:'black'}}>Right Eye Vision : {arr[level_r]} </Text>
        <Text> </Text>
        <Text> </Text>
        <Image style={{ width: DEVICE_WIDTH,  resizeMode :'contain'}} source={require('../images/chart2.png')} />
        <Text style={styles.textInput}>To generate and share the full report, click on the Create PDF icon.</Text>
        <TouchableOpacity style={styles.button_pdf}  onPress={this.createPDF.bind(this)}>
   <Image style={styles.image1} source={require('../images/pdf.png')}  />
       <Text style={styles.text1}>Create PDF</Text>
             </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.gotoHome} >
                 <Text> HOME </Text>
        </TouchableOpacity>


      </View>
    );
  }


else {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>To generate and share the full report, click on the Create PDF icon.</Text>
      <Text style={{marginLeft:DEVICE_WIDTH/22,fontSize:28,color:'black'}}>Left Eye Vision : {arr[level_l]} </Text>
        <Text style={{marginLeft:DEVICE_WIDTH/22,fontSize:28,color:'black'}}>Right Eye Vision : {arr[level_r]} </Text>
        <Text> </Text>
        <Text> </Text>
        <Image style={{ width: DEVICE_WIDTH,  resizeMode :'contain'}} source={require('../images/chart2.png')} />
      <TouchableOpacity style={styles.button_pdf}  onPress={this.createPDF.bind(this)}>
   <Image style={styles.image1} source={require('../images/pdf.png')}  />
       <Text style={styles.text1}>Create PDF</Text>
             </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={this.gotoHome} >
               <Text> HOME </Text>
      </TouchableOpacity>
    </View>
  );
}
error=0;
}
}

export default ri_result

const styles = StyleSheet.create ({
   container: {
     flex: 1,
      alignItems: 'center',
      //marginTop: 50,
      backgroundColor: '#01a3a4',
   },
   textInput: {
      //margin: 15,
      //height: 35,
     // borderWidth: 1,
      //backgroundColor: '#7685ed'
      marginTop:40,
      marginLeft:DEVICE_WIDTH/18,
      color:'white',
      marginRight:DEVICE_WIDTH/18,
   },
   button: {
     alignItems: 'center',
     backgroundColor: '#2e8b57',
     paddingLeft: 0,
     marginLeft:DEVICE_WIDTH/18,
     borderRadius: 10,
     borderWidth: 5,
     borderColor: '#008080',
     justifyContent: 'center',
     width: 150,
     height:50,
     marginTop:60,
   },

   image: {
     justifyContent:'center',
     alignItems: 'center',
     marginLeft:DEVICE_WIDTH/5,
        marginTop:40,

   },
   button_pdf: {
    alignItems: 'center',
    backgroundColor: 'white',
    //paddingLeft: 0,
    marginLeft:DEVICE_WIDTH/18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    width: 150,
    height:70,
    marginTop:5,
  },
  image1: {
    // marginLeft:DEVICE_WIDTH/2,
     //justifyContent:'center',
     alignItems: 'center',
    // marginLeft:DEVICE_WIDTH/5,
       // marginTop:40,
        width:50,
        height:50,
       // borderRadius:25,
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
