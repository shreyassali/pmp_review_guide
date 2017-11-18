import React from 'react';
import { ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import Banner from '../components/Banner';

export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
        <Banner headerText={'PMP Formulas'}/>
        <ExpoLinksView />
      </ScrollView>
    );
  }
}
