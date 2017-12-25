import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class DescriptionCard extends React.Component {
    render(props) {
        return (
      <Container>
        <Content>
          <Card style={styles.containerStyle}>
            <CardItem header>
              <Text style={styles.topicheader}>{this.props.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.props.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>PMP Quick Review Guide</Text>
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
  topicheader: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold',
  },
});
