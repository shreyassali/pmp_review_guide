import React from 'react';
import firebase from 'firebase';
import { List, ListItem, Text, Icon } from 'native-base';
import Banner from '../components/Banner';
import { View } from 'react-native';

class TopicScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    chapter: null,
  };

  static navigationOptions = ({ navigation, screenProps }) => ({

  });

  componentDidMount() {
    if(this.state.isLoadingComplete) {
      return;
    }
    //Read from firebase
    firebase.database().ref('chapterDetails/' + '0').once('value').then(function(snapshot) {
        var chapter = snapshot.val();
        console.log(chapter);
        return chapter;
      }).then((chapter) => this.setState({isLoadingComplete: true,
                  chapter: chapter}));
  }

  _onPress = () => {
    console.log("Shreyas Hello");
  };

render(){
  return (
          <View style={{ flex: 1, backgroundColor: 'white' }} contentInsetAdjustmentBehavior="automatic">
            <Banner headerText={this.state.chapter.name}/>
            <List dataArray={this.state.chapter.topics}
                  renderRow={(item) =>
                  <ListItem button onPress={() => _handleOnPress(item)}>
                    <Text>{item}</Text>
                  </ListItem>}>
            </List>
          </View>
        );
  }
}

export default () => <TopicScreen />;
