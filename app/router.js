import React from 'react';
import { StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
import Home from './screens/Home';
import cb_instructions from './screens/Color_Blindness/cb_instructions';
import cb_tests from './screens/Color_Blindness/cb_tests';
import cb_result from './screens/Color_Blindness/cb_result';
import ri_instructions from './screens/Refractive_Error/ri_instructions';
import ri_tests from './screens/Refractive_Error/ri_tests';
import ri_result from './screens/Refractive_Error/ri_result';
import test from './screens/test';
import result from './screens/result';
import instructions from './screens/instructions';
import cb_pg1 from './screens/Color_Blindness/cb_pg1';
import cb_pg2 from './screens/Color_Blindness/cb_pg2';
import cb_pg3 from './screens/Color_Blindness/cb_pg3';
import cb_pg4 from './screens/Color_Blindness/cb_pg4';
import cb_id from './screens/Color_Blindness/cb_id';
import convert_to_PDF from './screens/Color_Blindness/convert_to_PDF';
import disclaimer from './screens/disclaimer';
const Root = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header:()=>null,
    },
  },

  cb_instructions : {
    screen : cb_instructions,
    navigationOptions: {
      title: 'Instructions',
    },
  },

  cb_tests: {
    screen:cb_tests,
    navigationOptions: {
      title: 'Test',
    },
  },

  cb_result: {
    screen:cb_result,
    navigationOptions: {
      title: 'Results',
    },
  },

  ri_instructions : {
    screen : ri_instructions,
    navigationOptions: {
      title: 'Instructions',
    },
  },

  ri_tests: {
    screen:ri_tests,
    navigationOptions: {
      title: 'Test',
    },
  },

  ri_result: {
    screen:ri_result,
    navigationOptions: {
      title: 'Results',
    },
  },

  instructions : {
    screen : instructions,
    navigationOptions: {
      title: 'Instructions',
    },
  },

  test: {
    screen:test,
    navigationOptions: {
      title: 'Test',
    },
  },

  result: {
    screen:result,
    navigationOptions: {
      title: 'Results',
    },
  },
  
  cb_pg1: {
    screen:cb_pg1,
    navigationOptions: {
      title: 'Results',
    },
  },

  cb_pg2: {
    screen:cb_pg2,
    navigationOptions: {
      title: 'Results',
    },
  },

  cb_pg3: {
    screen:cb_pg3,
    navigationOptions: {
      title: 'Results',
    },
  },

  cb_pg4: {
    screen:cb_pg4,
    navigationOptions: {
      title: 'Results',
    },
  },
  cb_id:{
    screen:cb_id,
    navigationOptions: {
      title: 'User Details',
    },

  },
  convert_to_PDF:{
    screen:convert_to_PDF,
  },
  disclaimer:{
    screen:disclaimer,
    navigationOptions: {
      title: 'About',
    },
  },
  /*List: {
    screen: list,
  },
  User: {
    screen: user,
  },
}, {
  mode: 'modal',
  headerMode: 'none',*/
});




export default Root;
