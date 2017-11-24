import React from 'react';
import { Platform, StyleSheet,
  Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';
import Banner from '../components/Banner';
import firebase from 'firebase';
import { Card, CardItem, Body } from 'native-base';

class HomeScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    chapterList: null,
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

  _renderItem = ({item}) => (
      <Card>
        <CardItem style={styles.containerStyle}>
          <Body>
            <Text style={styles.title}>
               {item.name}
            </Text>
          </Body>
        </CardItem>
      </Card>
  );

_keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
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

export default () => <HomeScreen />;

const styles = StyleSheet.create({
  containerStyle: {
      borderRadius: 3,
      borderWidth: 2,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      marginLeft: 10,
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
      paddingHorizontal: 16,
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '200',
    color: '#444',
  },
});
