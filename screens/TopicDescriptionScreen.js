import React from 'react';
import { View, Button } from 'react-native';
import { List, ListItem, Text, Icon } from 'native-base';

class TopicDescriptionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({

  });
  render() {
    return (
      <Text>Topic DescriptionScreen Sample</Text>
    );
  }
}
export default () => <TopicDescriptionScreen />;
