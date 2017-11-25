import React from 'react';
import firebase from 'firebase';
import { List, ListItem, Text, Icon } from 'native-base';
import Banner from './components/Banner';

class TopicList extends React.Component {
render(){
  <List>
    <ListItem button onPress={() => _handleOnPress(item)}>
      <Text>{item.name}</Text>
    </ListItem>
  </List>
  }
}

export default () => <TopicList />;
