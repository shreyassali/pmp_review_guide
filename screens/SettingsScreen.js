import React from 'react';
import { ScrollView } from 'react-native';

import Banner from '../components/Banner';
import SettingsComponent from '../components/SettingsComponent';

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header:(
      <Banner headerText={'Settings'}/>
    ),
  });
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
           <SettingsComponent />
      </ScrollView>
    );
  }
}
