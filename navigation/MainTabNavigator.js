import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AdditionalReference from '../screens/AdditionalReference';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Formulas: {
      screen: LinksScreen,
    },
    Reference: {
      screen: AdditionalReference,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Formulas':
            iconName = Platform.OS === 'ios' ? `ios-calculator${focused ? '' : '-outline'}` : 'md-calculator';
            break;
          case 'Reference':
            iconName = Platform.OS === 'ios' ? `ios-document${focused ? '' : '-outline'}` : 'md-document';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-cog${focused ? '' : '-outline'}` : 'md-cog';
        }
        return (
          
          <Ionicons
            name={iconName}
            size={32}
            style={{ marginBottom: 1 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
