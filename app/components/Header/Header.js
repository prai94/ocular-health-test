import PropTypes from 'prop-types';
import React from 'react';
import {View,Image,TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = (props) => {
  return (
  <View>
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
       <Image resizeMode="contain" source={props.imageSource} style={styles.icon}/>
    </TouchableOpacity>
  </View>
);
};
/*
const Header =({onPress})=>(
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image resizeMode="contain" source={require('./images/user_icon.png')} style={styles.icon}/>
    </TouchableOpacity>

  </View>
);*/
/*
Header.propTypes={
  onPress: PropTypes.func,
};*/

export default Header;
