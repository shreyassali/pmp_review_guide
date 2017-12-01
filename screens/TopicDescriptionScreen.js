import React from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';

class TopicDescriptionScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Button title="Go Back" onPress={() => navigation.goBack('Topics')}/>
  });

  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Sample Test Topic Description
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Entypo name="github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default TopicDescriptionScreen;
