import React from 'react';
import { ScrollView } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

import Banner from '../components/Banner';

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header:(
      <Banner headerText={'Settings'}/>
    ),
  });
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
           <ExpoConfigView />
      </ScrollView>
    );
  }
}
