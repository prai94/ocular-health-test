import React, { Component } from 'react';
import { Dimensions,TouchableOpacity,Image,Button,AsyncStorage, Text, View, TextInput, StyleSheet,Alert, ScrollView } from 'react-native';
import Home from '../Home';
import cb_tests from './cb_tests';
import cb_pg1 from './cb_pg1';
import cb_pg2 from './cb_pg2';
import cb_pg3 from './cb_pg3';
import cb_pg4 from './cb_pg4';
import convert_to_PDF from './convert_to_PDF';
import { StackNavigator } from 'react-navigation';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';

var string_to_identify_12="";
var x=0;
var common='';
var red_green=0;
global.protanopia=0;
global.deuteranopia=0;
global.rg=0;
var st1="";
var st2="";
var st3="";
var st4="";
global.pc=0;
global.dc=0;


const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;

var crr=["0","12","3","5","70","35","2","5","17","21","Nothing","Nothing","Nothing","Nothing","Nothing","Nothing","Nothing","73","5","2","45","73"];


class cb_result extends Component {

  gotoHome = () => {
    this.props.navigation.navigate('Home');
  };

  //MY CODE
  gotoPage1 = () => {
    this.props.navigation.navigate('cb_pg1');
  };
  gotoPage2 = () => {
    this.props.navigation.navigate('cb_pg2');
  };
  gotoPage3 = () => {
    this.props.navigation.navigate('cb_pg3');
  };
  gotoPage4 = () => {
    this.props.navigation.navigate('cb_pg4');
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
    <input type="text" name="firstname" value=${name}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    Regno.:
    <input type="text" name="lastname" value="20041994"><br><br>
</fieldset>
<fieldset>
<br>
    Age.:
    <input type="text" name="lastname" value=${age}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

    DOB:
    <input type="text" name="lastname" value=${dob}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
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
    <input type="text" name="lastname" value="Color Blindness">
   
    </fieldset>
<fieldset>

<legend>investigations:</legend>
Information regarding Red Green Defficiency :<br>
${st1}<br><br>
Information regarding Protanopia :<br>
${st2}<br><br>
Information regarding Deuteranopia :<br>
${st3}<br><br>

</fieldset>
<fieldset>
	<fieldset >
    <div align=left >Note:</div>
      <ul style="list-style-type:disc">
      
  <li>p disease or Protanopia where  people affected by protan color blindness are less sensitive to red light</li>
  <li>d disease or  deuteranopia or deuteranomly is related to sensitiveness on green light</li>
  
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

      // Testing for red_green disease

  for(let i=1;i<=21;i++)
    {
      if(i==1 && brr[i]!=crr[i])
      {
        red_green=1;
        rg=rg+1;
      }

      if(brr[i]==crr[i])
        {
          red_green=1;
          rg=rg+1;
        }
    }
 
   /* for(let i=10;i<17;i++)
     {
       if(brr[i]=="Nothing")
      {
        red_green=1;
        rg=rg+1;
      }
     }*/

    /* for(let i=17;i<=21;i++)
     {
      if(brr[i]==crr[i])
      {
        red_green=1;
        rg=rg+1;
      }
     }*/
     
     
     
     //testing for protanopia


     if(brr[22]==6)
     {
      protanopia=1;
      pc=pc+1;
      //console.log("p1");
     }
     if(brr[23]==2)
     {
      protanopia=1;
      pc=pc+1;
      //console.log("p2");
     }
     if(brr[24]==5)
     {
      protanopia=1;
      pc=pc+1;
      //console.log("p3");
     }
     if(brr[25]==6)
     {
      protanopia=1;
      pc=pc+1;
      //console.log("p4");
     }

     if(brr[22]==0 && brr[23]==0 && brr[24]==0 && brr[25]==0)
     {
       rg=100;
       pc=100;
       dc=100;//a random number given to indicate that the code terminated befor reaching here .
              //This can happen when the first slide is identified incorrectly
     }

     
     //Testing for deuteranopia


     if(brr[22]==2)
     {
      deuteranopia=1;
      dc=dc+1;
      //console.log("d1");
     }
     if(brr[23]==4)
     {
      deuteranopia=1;
      dc=dc+1;
      //console.log("d2");
     }
     if(brr[24]==3)
     {
      deuteranopia=1;
      dc=dc+1;
      //console.log("d3");
     }
     if(brr[25]==9)
     {
      deuteranopia=1;
      dc=dc+1;
      //console.log("d4");
     }
          

     if(rg>=1 && rg<=21)
     {
       if(rg>6)
      {
        st1='You might be suffering from Red-Green Color Bindness.';
      rg=0;
     }
     else
     {
      st1='You are not suffering from Red-Green Color Bindness.';
     }
    }
     {/*else if(rg==100)
     {
      st1='The FIRST SLIDE was identified incorrectly so you could not reach these slides';
      rg=0;
     }
    */}


    if(pc>=2)
    {
   st2="You might be insensitive to Red light.";
   pc=0;
    }
    else
    {
     st2="You are not insensitive to Red light.";
    }


     {/*if(pc>=1 && pc<=4)
     { 
       if(pc>=2)
       {
      st2="You might be insensitive to Red light.";
      pc=0;
       }
       else
       {
        st2="You are not insensitive to Red light.";
       }
     }
    */}


     {/*else if(pc==100)
     {
      st2="The FIRST SLIDE was identified incorrectly so you could not reach these slides";
      pc=0;
     }
    */}


    if(dc>=2)
     { st3="You might be insensitive to Green light.";
      dc=0;
    }
    else
     {
      st3="You are not insensitive to Green light.";
     }


     {/*if(dc>=1 && dc<=4)
     { 
       if(dc>=2)
     { st3="You might be insensitive to Green light.";
      dc=0;
    }
    else
     {
      st3="You are not insensitive to Green light.";
     }
    }
  */}

    // else if(dc==100)
    // {
    //  st3="The FIRST SLIDE was identified incorrectly so you could not reach these slides";
    //  dc=0;
    // }
     

    for(let i=1;i<=21;i++)
    {
      console.log(i +" "+ brr[i]);
    }
   // console.log("prot"protonopia);

//MY CODE
    
   return(
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{flex:1}}>

   {/* <TouchableOpacity style={styles.button1} onPress={this.gotoPage1} >
    <Text> The first image is compulsory to be Identified </Text>
   </TouchableOpacity>*/}
    <TouchableOpacity style={styles.button2} onPress={this.gotoPage2} >
    <Text>{st1}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button3} onPress={this.gotoPage3} >
    <Text> {st2} </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button4} onPress={this.gotoPage4} >
    <Text> {st3} </Text>
    </TouchableOpacity>
  
   {/* <TouchableOpacity style={styles.button} onPress={this.gotoPDF} >
    <Text> Create PDF </Text>
   </TouchableOpacity>*/}
   <TouchableOpacity style={styles.button_pdf}  onPress={this.createPDF.bind(this)}>
   <Image style={styles.image1} source={require('../images/pdf.png')}  />
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


export default cb_result

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
  
   textInput: {
      margin: 15,
      height: 35,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   },
   button_pdf: {
    alignItems: 'center',
    backgroundColor: 'white',
    //paddingLeft: 0,
    marginLeft:DEVICE_WIDTH/4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    width: 150,
    height:70,
    marginTop:40,
  },
   button: {
     alignItems: 'center',
     backgroundColor: '#2e8b57',
     paddingLeft: 0,
     marginLeft:DEVICE_WIDTH/4,
     borderRadius: 10,
     borderWidth: 5,
     borderColor:  '#008080',
     justifyContent: 'center',
     width: 150,
     height:50,
     marginTop:20,
   },
   button1: {
    alignItems: 'center',
    backgroundColor: '#00e6e6',
    paddingLeft: 2,
    paddingTop:5,
    marginLeft:DEVICE_WIDTH/8,
    marginTop:5,
    borderRadius: 10,
    //borderWidth: 5,
    borderColor: '#00e6e6',//'#00e6e6',
    justifyContent: 'center',
    width: 250,
    height:100,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#00cccc',
    paddingLeft: 2,
    paddingTop:5,
    marginLeft:DEVICE_WIDTH/8,
    marginTop:5,
    borderRadius: 10,
    //borderWidth: 5,
    borderColor:'#00cccc',//'#00cccc',
    justifyContent: 'center',
    width: 250,
    height:100,
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#00b3b3',
    paddingLeft: 2,
    paddingTop:5,
    marginLeft:DEVICE_WIDTH/8,
    marginTop:5,
    borderRadius: 10,
    //borderWidth: 5,
    borderColor:'#00b3b3', //'#00b3b3',
    justifyContent: 'center',
    width: 250,
    height:100,
  },
  button4: {
    alignItems: 'center',
    backgroundColor: '#009999',
    paddingLeft: 2,
    paddingTop:5,
    marginLeft:DEVICE_WIDTH/8,
    marginTop:5,
    borderRadius: 10,
    //borderWidth: 5,
    borderColor: '#009999',//'#009999',
    justifyContent: 'center',
    width: 250,
    height:100,
  },

   image: {
     justifyContent:'center',
     alignItems: 'center',
     marginLeft:DEVICE_WIDTH/5,
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

})
