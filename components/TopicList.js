import React from 'react';
import firebase from 'firebase';
import { List, ListItem, Text, Icon } from 'native-base';
import Banner from './components/Banner';

class TopicList extends React.Component {
  state = {
    isLoadingComplete: false,
    TopicList: null,
  };

  static navigationOptions = ({ navigation, screenProps }) => ({

  });

  componentDidMount() {
    if(this.state.isLoadingComplete) {
      return;
    }
    //Read from firebase
    var topicList = [];
    firebase.database().ref('chapterDetails').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var chapter = childSnapshot.val();
        chapter.id = childSnapshot.key;
        if (this.props.id == chapter.id) {
          console.log(chapter);
          topicList.push(chapter.topics);
        }
      });
      return topicList;
    }).then((topicList) => this.setState({isLoadingComplete: true,
                  topicList: topicList}));
  }

  _onPress = () => {
    console.log("Shreyas Hello");
  };
  
render(){
  <List>
    <ListItem button onPress={() => _handleOnPress(item)}>
      <Text>{item.name}</Text>
    </ListItem>
  </List>
  }
}

export default () => <TopicList />;
