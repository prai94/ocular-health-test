import PropTypes from'prop-types';
import React, { Component } from 'react';
import { StatusBar,View, Image, Alert, Text,TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import styles from './styles';
//import { Logo } from '../components/Logo';
//import { InputWithButton } from '../components/TextInput';
import cb_instructions from './Color_Blindness/cb_instructions';
import ri_instructions from './Refractive_Error/ri_instructions';
import { StackNavigator } from 'react-navigation';
import test from '../screens/test';
import instructions from '../screens/instructions';
import cb_id from './Color_Blindness/cb_id';
global.level_r=0;
global.level_l=0;
global.ri_left=0;
export default class Home extends Component {
/*static propTypes={
  navigation: PropTypes.object,
};*/

refractiveError = () => {
  ri_left=1;
  this.props.navigation.navigate('ri_instructions');
};

colorBlindness = () => {
  this.props.navigation.navigate('cb_instructions');
};

glaucoma = () => {
  this.props.navigation.navigate('instructions');
};

id = () =>{
   this.props.navigation.navigate('cb_id');
}

disclaimer =() =>{
  this.props.navigation.navigate('disclaimer');
}
  render() {
    return (
     <Container >
        <StatusBar backgroundColor="red" barStyle="light-content"/>

        <View style={styles.containerHeader} >
          <Header imageSource={require('./images/dropMenu.jpg')} onPress={this.disclaimer}/>
         <Header imageSource={require('./images/user_icon.png')} onPress={this.id}/>
        </View>
        <Text style={styles.containerText}> OCULAR TEST </Text>

        <View style={styles.container} >

          <Button buttonText="Refrative Error" onPress={this.refractiveError}/>
          <Button buttonText="Glaucoma" onPress={this.glaucoma}/>
          <Button buttonText="RetinoBlastoma" />
          <Button buttonText="Color Blindness" onPress={this.colorBlindness}/>

        </View>

      </Container>
    );
  }
}

//export default Home;
