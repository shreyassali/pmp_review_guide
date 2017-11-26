import React from 'react';
import { Platform, StyleSheet,
  Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';
import Banner from '../components/Banner';
import firebase from 'firebase';
import ChapterCard from '../components/ChapterCard';

export default class HomeScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    chapterList: null
  };

  static navigationOptions = ({ navigation, screenProps }) => ({

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
        console.log(chapter);
        chapterList.push(chapter);
      });
      return chapterList;
    }).then((chapterList) => this.setState({isLoadingComplete: true,
                  chapterList: chapterList}));
  }

  _onPressItem = (id) => {
    console.log('Selected item ' + id);
    this.props.navigation.navigate('Topics', {chapterId: id});
  };

  _renderItem = ({item}) => (
    <ChapterCard id={item.id} name={item.name} onPressItem={this._onPressItem} />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
        <Banner headerText={'PMP Quick Reference Guide'}/>
        <FlatList
          data={this.state.chapterList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
