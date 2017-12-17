import React from 'react';
import firebase from 'firebase';

import { WebBrowser } from 'expo';
import { Platform, StyleSheet, View, FlatList } from 'react-native';
import { List, ListItem, Text, Icon } from 'native-base';

import Banner from '../components/Banner';

export default class FormulaScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    chapterList: null,
  };

  static navigationOptions = ({ navigation, screenProps }) => ({
    header:(
      <Banner headerText={'PMP Formulas'}/>
    ),
  });

  componentDidMount() {
    if(this.state.isLoadingComplete) {
      return;
    }
    //Read from firebase
    var chapterList = [];
    firebase.database().ref('chapterList').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var chapter = childSnapshot.val();
        chapter.id = childSnapshot.key;
        if (childSnapshot.val().isformulaAvailable == true) {
          chapterList.push(chapter);
        }
      });
      return chapterList;
    }).then((chapterList) => this.setState({isLoadingComplete: true,
                  chapterList: chapterList}));
  }

  _handleOnPress = (item) => {
    console.log(item.name);
    WebBrowser.openBrowserAsync(item.url);
  };

  _renderItem = ({item}) => (
    <List>
        <ListItem button onPress={() => this._handleOnPress(item)}>
            <Text>{item.name}</Text>
        </ListItem>
   </List>
  );

_keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
        <FlatList
          data={this.state.chapterList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}/>
      </View>
    );
  }
}
