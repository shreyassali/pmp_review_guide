import React from 'react';
import { Platform, View, ScrollView, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import ProjectMgmtFramework from '../screens/ProjectMgmtFramework';

const ExampleRoutes = {

  ProjectMgmtFramework: {
    name: 'PROJECT MANAGEMENT FRAMEWORK',
    screen: ProjectMgmtFramework,
  },
};

const MainScreen = ({ navigation }) => (
  <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
    {Object.keys(ExampleRoutes).map((routeName: string) => (
      <TouchableOpacity
        key={routeName}
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

const Card = StackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

//Make the components available to other parts of the project
export default () => <Card />;

//Stylesheet
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
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});
