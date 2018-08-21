import React, { Component } from 'react';
import { Dimensions,StatusBar,TouchableOpacity,Image,Button,AsyncStorage, Text, View, TextInput, StyleSheet,Alert,ScrollView} from 'react-native';
import Home from './Home';
import test from '../screens/test';
import { StackNavigator } from 'react-navigation';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share'; 
var x=0;
var str='';
var ar=['','Relative/Absolute Scotoma','Central Scotoma','Central Scotoma associated with Nutritional Amblyopia','Paracentral Scotoma','Central or Paracentral Metamorphpsia ','Metamorphopsia','Macular Disease'];
const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;
var cp=["","","","","","","",""];
var c_color=["","","","","","","",""];
var ca_dis=["","","","","","","",""];
class result extends Component {

  gotoHome = () => {
    this.props.navigation.navigate('Home');
  };
  gotoPDF = () => {
    Alert.alert("hello");
    this.props.navigation.navigate('convert_to_PDF');
  };
         
  createPDF() {
         
    const html = `
    <html>
<style >
	div {
    background-color: lightblue;
}
.lastname{
width:1000px;
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
    <input type="text" name="firstname" value=${name} >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    Regno.:
    <input type="text" name="lastname" value="20041994"><br><br>
</fieldset>
<fieldset>
<br>
    Age.:
    <input type="text" name="lastname" value=${age}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    DOB:
    <input type="text" name="lastname" value=${dob}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    Sex:
    <input type="text" name="lastname" value=${sex}><br><br>
    </fieldset>
    <fieldset>
<br>
    SYST.:
    <input type="text" name="lastname" value="NA">
    
   
    </fieldset>
      <fieldset>
<br>
    c/o.:
    <input type="text" name="lastname" value="NA">
   
    </fieldset>
<fieldset>

<legend>investigations:</legend>
${ca_dis[1]}<br><br>
${ca_dis[2]}<br><br>
${ca_dis[3]}<br><br>
${ca_dis[4]}<br><br>
${ca_dis[5]}<br><br>
${ca_dis[6]}<br><br>
${ca_dis[7]}<br><br>

</fieldset>
<fieldset>
	<fieldset >
    <div align=left >Note:</div>
      <ul style="list-style-type:disc">
      
  <li>Metamorphopsia is a type of distorted vision in which a grid of straight lines appears wavy and parts of the grid may appear blank</li>
  <li>Scotoma is the partial loss of vision or blind spot in an otherwise normal visual field</li>
  
</ul> 
    <fieldset>
</fieldset>

</form> 
</div>

</body>
</html>

    `

    console.log(html)
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

  render ()
  {
    for(var i=1;i<8;i++)
    {
       if(i==4)
       {
         if(e[i]==0)
         {
        ca_dis[i]='You might be suffering from metamorphosia';
        c_color[i]='red';
       }
       else
       {
         ca_dis[i]='You might be suffering from  scotoma';
         c_color[i]='red';
       }
      }
      else
      {
      if(e[i]==-1)
      { 
        cp[i]='Identified Incorrectly'
        c_color[i]='red'
        ca_dis[i]='You might be suffering from '+ar[i];
      }
      else{
       // cp[i]='Identified Correctly'
        c_color[i]='green'
        ca_dis[i]='Identified Correctly';
      }
    }
  }
  count=0;
  str="";
  tx=0;ty=0;tz=0;
  console.log("The values in the array");
  for(var i=1;i<8;i++)
    {
      console.log(e[i]);
      if(e[i]==-1)
      {
        str=str+"\n"+ar[i];
      }
    }
console.log("in result screen");
//var str=e[3]+''+e[4]+'fff';
e=[0,0,0,0,0,0,0,0];
return (
<View style={styles.container}>
<StatusBar backgroundColor="green" barStyle="light-content"/>
 {/* <Text>ERRORS : {str}</Text>*/}
  <ScrollView>
            <View style={styles.container}>
              <Text style={{marginLeft:DEVICE_WIDTH/15,color:'#990000',fontSize:20,fontFamily:'lucida grande'}}>Information regarding Glaucoma</Text>
              <Image style={styles.image} source={require('./images/g1.png')}  />
              <Text style={{color:c_color[1],marginLeft:DEVICE_WIDTH/10}}>{cp[1]}</Text>
              <Text style={{color:c_color[1],marginLeft:DEVICE_WIDTH/10}}>{ca_dis[1]}</Text>
              <Image style={styles.image} source={require('./images/g2.png')}  />
              <Text style={{color:c_color[2],marginLeft:DEVICE_WIDTH/10}}>{cp[2]}</Text>
               <Text style={{color:c_color[2],marginLeft:DEVICE_WIDTH/10}}>{ca_dis[2]}</Text>
              <Image style={styles.image} source={require('./images/g3.png')}  />
              <Text style={{color:c_color[3],marginLeft:DEVICE_WIDTH/10}}>{cp[3]}</Text>
              <Text style={{color:c_color[3],marginLeft:DEVICE_WIDTH/10}}>{ca_dis[3]}</Text>
              <Image style={styles.image} source={require('./images/g4.png')}  />
              <Text style={{color:c_color[4],marginLeft:DEVICE_WIDTH/10}}>{cp[4]}</Text>
              <Text style={{color:c_color[4],marginLeft:DEVICE_WIDTH/10}}>{ca_dis[4]}</Text>
              <Image style={styles.image} source={require('./images/g5.png')}  />
              <Text style={{color:c_color[5],marginLeft:DEVICE_WIDTH/10}}>{cp[5]}</Text>
              <Text style={{color:c_color[5],marginLeft:DEVICE_WIDTH/10}}>{ca_dis[5]}</Text>
              <Image style={styles.image} source={require('./images/g6.png')}  />
              <Text style={{color:c_color[6],marginLeft:DEVICE_WIDTH/10}}>{cp[6]}</Text>
              <Text style={{color:c_color[6],marginLeft:DEVICE_WIDTH/10}}>{ca_dis[6]}</Text>
              <Image style={styles.image} source={require('./images/g7.png')}  />
              <Text style={{color:c_color[7],marginLeft:DEVICE_WIDTH/10}}>{cp[7]}</Text>
              <Text style={{color:c_color[7],marginLeft:DEVICE_WIDTH/10}}>{ca_dis[7]}</Text>

  <TouchableOpacity style={styles.button_pdf}  onPress={this.createPDF.bind(this)}>
   <Image style={styles.image1} source={require('./images/pdf.png')}  />
       <Text style={styles.text1}>Create PDF</Text>
             </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={this.gotoHome} >
         <Text> HOME </Text>
</TouchableOpacity>
</View>
</ScrollView>
  </View>
);
}

}


export default result

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
    //  marginTop: 50
    backgroundColor:'#01a3a4',
    //height:DEVICE_HEIGHT
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
     paddingLeft: 0,
     marginLeft:DEVICE_WIDTH/10,
     borderRadius: 10,
     borderWidth: 5,
     borderColor: '#008080',
     justifyContent: 'center',
     width: 150,
     height:50,
     marginTop:20,
   },

   image: {
    justifyContent:'center',
    alignItems: 'center',
    marginLeft:DEVICE_WIDTH/10,
    width:80,
    height:80,
       marginTop:40,
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
   button_pdf: {
    alignItems: 'center',
    backgroundColor: 'white',
    //paddingLeft: 0,
    marginLeft:DEVICE_WIDTH/10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    width: 150,
    height:70,
    marginTop:40,
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
