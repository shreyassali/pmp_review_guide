import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Header from '../components/Header';
import Card from '../components/Card';
import Banner from '../components/Banner';
import ProjectMgmtFramework from '../screens/ProjectMgmtFramework';


const ExampleRoutes = {

  ProjectMgmtFramework: {
    name: 'PROJECT MANAGEMENT FRAMEWORK',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'KNOWLEDGE MANAGEMENT',
    screen: ProjectMgmtFramework,
  },

  ProjectMgmtFramework: {
    name: 'INTEGRATION MANAGEMENT',
    screen: ProjectMgmtFramework,
  },

  ProjectMgmtFramework: {
    name: 'SCOPE MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'TIME MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'COST MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'QUALITY MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'HUMAN RESOURCES MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'CONFLICT MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'COMMUNICATIONS MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'RISK MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'PROCURMENT MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'STAKEHOLDER MANAGEMENT',
    screen: ProjectMgmtFramework,
  },
  ProjectMgmtFramework: {
    name: 'PROFESSIONAL AND SOCIAL RESPONSIBILITY',
    screen: ProjectMgmtFramework,
  },
};

const MainScreen = ({ navigation }) => (
  <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
    <Banner headerText={'PMP Quick Reference Guide'}/>
    {Object.keys(ExampleRoutes).map((routeName: string) => (
      <TouchableOpacity key={routeName}
        onPress={() => {
          const { path, params, screen } = ExampleRoutes[routeName];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate(routeName, {}, action);
        }}
        >
        <SafeAreaView style={styles.itemContainer} forceInset={{ vertical: 'never' }}>
          <View style={styles.containerStyle}>
            <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

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
