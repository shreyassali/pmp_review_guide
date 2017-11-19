//Import libraries for making a components
import React from 'react';
import { Text } from 'react-native';

//Make a components
const Header = (props) => {
  const { textStyle } = styles
  return <Text style={ textStyle }> {props.headerText} </Text>;
};

//Style Component
const styles = {
  textStyle: {
    fontSize: 19,
    fontWeight: '200',
  }
}

//Make the components available to other parts of the _handleHelpPress
export default Header;
