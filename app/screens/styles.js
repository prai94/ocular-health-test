import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

  container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'center',
      paddingHorizontal: 10,
      //paddingLeft:20,
      paddingTop:50,
      paddingBottom:40,
      justifyContent:'space-around',
      alignContent:'space-around',
    //  backgroundColor: '$primaryBlue',
    },

    containerHeader:{
      //alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row',
      backgroundColor:'white',
      position:'absolute',
      left:0,
      top:0,
      right:0,
      '@media ios':{
        paddingTop:20,
      },
      '@media android':{
      //  paddingTop:StatusBar.currentHeight,
      },
    },

    containerText: {
      paddingTop:100,
      fontSize: 40,
      fontFamily: 'lucida grande',
      color:'white',
      fontWeight: 'bold',
      //textShadowRadius:'10',
      textShadowOffset:{width: 10,height: 10}
      //fontFamily: 'Courier New',
    },
    image1: {
      justifyContent:'center',
      alignItems: 'center',
     // marginLeft:DEVICE_WIDTH/5,
        // marginTop:40,
         width:50,
         height:50,
         borderRadius:25,
    },
});
