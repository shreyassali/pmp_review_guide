import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

export default class ChapterCard extends React.Component {

render(props){
  return (
      <Card style={styles.containerStyle}>
        <CardItem>
          <Body style={styles.bodyStyle}>
            <Text style={styles.title}> {this.props.name} </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create ({
  containerStyle: {
      marginTop: 7,
      marginBottom: 7,
      marginLeft: 10,
      marginRight: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  bodyStyle: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '200',
    color: '#444',
  },
});
