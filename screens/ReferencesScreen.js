import React from 'react';
import firebase from 'firebase';
import { Platform, View, FlatList } from 'react-native';

import { WebBrowser } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { List, ListItem, Text, Icon } from 'native-base';

import Banner from '../components/Banner';

export default class ReferencesScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    resourceList: null,
  };

  static navigationOptions = ({ navigation, screenProps }) => ({
    header:(
      <Banner headerText={'PMP Resources & Free Practice Tests'}/>
    ),
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

  _handleOnPress = (item) => {
    WebBrowser.openBrowserAsync(item.url);
  };

  _renderItem = ({item}) => (
        <List>
            <ListItem button onPress={() => this._handleOnPress(item)}>
                <MaterialIcons name="question-answer" size={27} color="#8e6de3" />
                <Text style={{paddingLeft: 10}}>{item.name}</Text>
            </ListItem>
       </List>
  );

_keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
        <FlatList
          data={this.state.resourceList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}/>
      </View>
    );
  }
}
