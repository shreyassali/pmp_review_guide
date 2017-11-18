import React from 'react';
import { ScrollView } from 'react-native';

import ReferenceLinksScreen from '../components/ReferenceLinks';
import Banner from '../components/Banner';

export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
           <Banner headerText={'PMP Resources & Free Practice Tests'}/>
           <ReferenceLinksScreen />
      </ScrollView>
    );
  }
}
