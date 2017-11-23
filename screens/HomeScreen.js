import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Header from '../components/Header';
import Card from '../components/Card';
import Banner from '../components/Banner';
import ProjectMgmtFramework from '../screens/ProjectMgmtFramework';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPKnrvHFlQeHuaRX_jmFWhu9ScZ4sYL04",
  authDomain: "pmpguide-b8d72.firebaseapp.com",
  databaseURL: "https://pmpguide-b8d72.firebaseio.com",
  projectId: "pmpguide-b8d72",
  storageBucket: "pmpguide-b8d72.appspot.com",
  messagingSenderId: "323096544554"
};

const ExampleRoutes = {

  ProjectMgmtFramework: {
    name: 'PROJECT MANAGEMENT FRAMEWORK',
    screen: ProjectMgmtFramework,
  },
};

class MainScreen extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  static navigationOptions = ({ navigation, screenProps }) => ({

  });

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    //Read from firebase
    var chapterNames = [];
    firebase.database().ref('chapterList').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        console.log(childKey);
        var childData = childSnapshot.val();
        //console.log(childData);
        var chname = childData.name;
        chapterNames.push({chname});
      });
    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
        <Banner headerText={'PMP Quick Reference Guide'}/>
        {Object.keys(ExampleRoutes).map((routeName: string) => (
          <TouchableOpacity key={routeName}>
            <SafeAreaView style={styles.itemContainer} forceInset={{ vertical: 'never' }}>
              <View style={styles.containerStyle}>
                <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
              </View>
            </SafeAreaView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const HomeScreen = StackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  },
);

export default () => <HomeScreen />;

const styles = StyleSheet.create({
  containerStyle: {
      borderRadius: 3,
      borderWidth: 2,
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
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '200',
    color: '#444',
  },
});
