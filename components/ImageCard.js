import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base';

export default class ImageCard extends React.Component {
    render(props) {
        return (
    <Container>
      <Content>
        <Card style={styles.containerStyle}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
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
