import React from 'react';
import firebase from 'firebase';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import DescriptionCard from '../components/DescriptionCard';

class TopicDescriptionScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    topicName: null,
    topicDescription: null,
    topicId: null,
  };

  componentDidMount() {
    if(this.state.isLoadingComplete) {
      return;
    }
    const {state} = this.props.navigation;
    var topicDetailsDB = 'topicDetails/' + state.params.topicId;

    console.log(topicDetailsDB);

    firebase.database().ref(topicDetailsDB).once('value').then(function(snapshot) {
        var topicDetails = snapshot.val();
        return topicDetails;
      }).then((topicDetails) => this.setState(
        { isLoadingComplete: true,
          topicName: topicDetails.topic_name,
          topicDescription: topicDetails.topic_description,
          topicId: topicDetails.topic_id
        }));
  }

  render() {
    const {state} = this.props.navigation;
    console.log('Description' + this.state.topicDescription);
    return (
      <DescriptionCard
        id={this.state.topicId}
        name={this.state.topicName}
        description = {this.state.topicDescription}/>
    );
  }
}

export default TopicDescriptionScreen;
