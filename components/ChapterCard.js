import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

export default class ChapterCard extends React.Component {

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
      console.log('Rendering Chapter Card ' + this.props.name);
      return(
        <Card>
          <CardItem button onPress={this._onPress}>
            <Body style={styles.containerStyle}>
              <Text style={styles.title}> {this.props.name} </Text>
            </Body>
          </CardItem>
        </Card>);
  }
}

const styles = StyleSheet.create({
  containerStyle: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 7,
      marginBottom: 7,
      paddingHorizontal: 12,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '200',
    color: '#444',
  },
});
