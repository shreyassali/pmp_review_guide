import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Header from '../components/Header';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title:<Header headerText={'Settings'}/>,
    headerStyle:{ backgroundColor:'#673ab7' }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
