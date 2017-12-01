import React from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import DescriptionCard from '../components/DescriptionCard';

class TopicDescriptionScreen extends React.Component {

  render() {
    return (
      <DescriptionCard />
    );
  }
}

export default TopicDescriptionScreen;
