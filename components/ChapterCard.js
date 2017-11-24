import React from 'react';
import { TextStyleSheet } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

export default class ChapterCard extends React.Component {

render(props){
    <Card>
      <CardItem>
        <Body style={styles.containerStyle}>
          <Text style={styles.title}> {this.props.name} </Text>
        </Body>
      </CardItem>
    </Card>
  }
}

export default () => <Card />;

const styles = StyleSheet.create ({
  containerStyle: {
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      marginLeft: 10,
      marginTop: 10,
      marginRight: 10,
      paddingVertical: 20,
      alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
});
