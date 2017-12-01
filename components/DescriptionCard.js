import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class DescriptionCard extends React.Component {
    render() {
        return (
          <Container>
            <Content>
              <Card style={styles.containerStyle}>
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


const styles = StyleSheet.create ({
  containerStyle: {
      marginTop: 12,
      marginBottom: 7,
      marginLeft: 10,
      marginRight: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0,
  },
});
