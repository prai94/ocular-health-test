import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import color from 'color';
import styles from './styles';
//import instructions from './screens/Color Blindness/instructions'
const Button = ({buttonText,onPress}) => {
  return (
  <View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
             <Text> {buttonText} </Text>
    </TouchableOpacity>
  </View>
);
};

Button.propTypes = {
  buttonText: PropTypes.string,
  onPress:PropTypes.func,
};

export default Button;
