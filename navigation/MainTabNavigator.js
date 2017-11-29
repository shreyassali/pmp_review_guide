import React from 'react';
import { Platform } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AdditionalReference from '../screens/AdditionalReference';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: StackNavigator({
          Home: {screen: HomeScreen},
          Topics: {screen: TopicScreen},
          Desceiption: {screen: TopicDescriptionScreen}
        },
        {
          headerMode: 'none'
        }
      )
    },
    Formulas: {
      screen: LinksScreen,
    },
    Documents: {
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
                ? `home`
                : 'home';
            break;
          case 'Formulas':
            iconName = Platform.OS === 'ios' ? 'calculator' : 'calculator';
            break;
          case 'Documents':
            iconName = Platform.OS === 'docs' ? 'docs' : 'docs';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? 'settings' : 'settings';
        }
        return (

          <SimpleLineIcons
            name={iconName}
            size={26}
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
