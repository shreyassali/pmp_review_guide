import React from 'react';
import { Platform, StyleSheet, View, FlatList } from 'react-native';
import Banner from '../components/Banner';
import firebase from 'firebase';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


class LinksScreen extends React.Component {
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
        if (childSnapshot.val().isformulaAvailable == true) {
          chapterList.push(chapter);
        }
      });
      return chapterList;
    }).then((chapterList) => this.setState({isLoadingComplete: true,
                  chapterList: chapterList}));
  }

  _renderItem = ({item}) => (
    <View style={styles.option}>
      <Text style={styles.optionText}> {item.name} </Text>
    </View>
  );

_keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
        <Banner headerText={'PMP Formulas'}/>
        <FlatList
          data={this.state.chapterList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}/>
      </View>
    );
  }
}

export default () => <LinksScreen />;

const styles = StyleSheet.create({
  containerStyle: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 7,
      marginBottom: 7,
      paddingHorizontal: 12,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '200',
    color: '#444',
  },
  container: {
      flex: 1,
      paddingTop: 15,
  },
  optionsTitleText: {
      fontSize: 16,
      marginLeft: 17,
      marginTop: 9,
      marginBottom: 10,
  },
  optionIconContainer: {
      marginRight: 9,
  },
  option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#EDEDED',
  },
  optionText: {
      fontSize: 15,
      marginTop: 1,
  },
});
