import React from 'react';
import firebase from 'firebase';
import { Platform, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { List, ListItem, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Banner from '../components/Banner';

class TopicScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    chapter: null,
    chapterName: null,
  };

  static navigationOptions = ({ navigation }) => ({
    headerLeft: ( <Button iconLeft transparent primary onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                  </Button>
                ),
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

  _handleOnPress = (item) => {
    const { navigate } = this.props.navigation;
    console.log('Selected topic item ' + item.topic_id + " " + item.topic_name);
    navigate('Desceiption', {topicId: item.topic_id});
  };

  _renderItem = ({item}) => (
    <List>
        <ListItem button onPress={() => this._handleOnPress(item)}>
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
        <List>
          <ListItem itemDivider>
          <Text style={styles.chapterheader}>{this.state.chapterName}</Text>
          </ListItem>
        </List>
        <FlatList
          data={this.state.chapter}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}/>
      </View>
    );
  }
}

export default TopicScreen;

const styles = StyleSheet.create({
  chapterheader: {
      flex: 1,
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold',
  },
});
