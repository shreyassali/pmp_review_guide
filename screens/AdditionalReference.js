import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ReferenceLinksScreen from '../components/ReferenceLinks';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title:<Header headerText={'PMP Resources & Free Practice Tests'}/>,
    headerStyle:{ backgroundColor:'#673ab7' }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
           <ReferenceLinksScreen />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
