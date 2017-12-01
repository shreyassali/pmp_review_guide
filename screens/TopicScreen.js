import React from 'react';
import firebase from 'firebase';
import { Platform, StyleSheet, TouchableOpacity, View, FlatList, Button } from 'react-native';
import { List, ListItem, Text, Icon } from 'native-base';
import Banner from '../components/Banner';

class TopicScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    chapter: null,
    chapterName: null,
  };

  static navigationOptions = ({ navigation }) => ({
    //title: this.state.chapterName,
    headerLeft: <Button title="Go Back" onPress={() => navigation.goBack()}/>
  });

  componentDidMount() {
    if(this.state.isLoadingComplete) {
      return;
    }
    const {state} = this.props.navigation;
    var chapterDetailsDB = 'chapterDetails/' + state.params.chapterId;

    firebase.database().ref(chapterDetailsDB).once('value').then(function(snapshot) {
        var chapterDetails = snapshot.val();
        return chapterDetails;
      }).then((chapterDetails) => this.setState(
        { isLoadingComplete: true,
          chapter: chapterDetails.topics,
          chapterName: chapterDetails.name
        }));
  }

  _renderItem = ({item}) => (
    <List>
        <ListItem button onPress={() => _handleOnPress(item)}>
            <Text>{item.topic_name}</Text>
        </ListItem>
   </List>
  );

  _keyExtractor = (item, index) => item.topic_id;

  render() {
    const {state} = this.props.navigation;
    console.log(this.state.chapterName);
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
        <FlatList
          data={this.state.chapter}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}/>
      </View>
    );
  }
}

_handleOnPress = (item) => {
  console.log(item.name);
};

export default TopicScreen;
