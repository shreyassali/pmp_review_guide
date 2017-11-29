import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
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
    header:(
      <Banner headerText={'PMP Quick Reference Guide'}/>
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
        chapterList.push(chapter);
      });
      return chapterList;
    }).then((chapterList) => this.setState({isLoadingComplete: true,
                  chapterList: chapterList}));
  }

  _onPressItem = (id) => {
    const { navigate } = this.props.navigation;
    console.log('Selected item ' + id);
    navigate('Topics', {chapterId: id});
  };

  _renderItem = ({item}) => (
    <ChapterCard
      id={item.id}
      name={item.name}
      onPress={() => this._onPressItem(item.id)} />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
        <FlatList
          data={this.state.chapterList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
