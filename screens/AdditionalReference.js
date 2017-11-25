import React from 'react';
import firebase from 'firebase';
import Touchable from 'react-native-platform-touchable';
import { Platform, StyleSheet, View, FlatList } from 'react-native';
import { WebBrowser } from 'expo';
import Banner from '../components/Banner';
import { List, ListItem, Text, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';



class LinksScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    resourceList: null,
  };

  static navigationOptions = ({ navigation, screenProps }) => ({

  });

  componentDidMount() {
    if(this.state.isLoadingComplete) {
      return;
    }
    //Read from firebase
    var resourceList = [];
    firebase.database().ref('externalResources').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var resource = childSnapshot.val();
        resource.id = childSnapshot.key;
        resourceList.push(resource);
      });
      return resourceList;
    }).then((resourceList) => this.setState({isLoadingComplete: true,
                  resourceList: resourceList}));
  }

  _renderItem = ({item}) => (
        <List>
            <ListItem button onPress={() => _handleOnPress(item)}>
                <MaterialIcons name="question-answer" size={27} color="#8e6de3" />
                <Text>{item.name}</Text>
            </ListItem>
       </List>
  );

_keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
        <Banner headerText={'PMP Resources & Free Practice Tests'}/>
        <FlatList
          data={this.state.resourceList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}/>
      </View>
    );
  }
}

_handleOnPress = (item) => {
  WebBrowser.openBrowserAsync(item.url);
};

export default () => <LinksScreen />;

const styles = StyleSheet.create({
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
