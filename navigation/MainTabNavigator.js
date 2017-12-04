import React from 'react';
import { Platform } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Text, Button } from 'native-base';

import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import FormulaScreen from '../screens/FormulaScreen';
import ReferencesScreen from '../screens/ReferencesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TopicScreen from '../screens/TopicScreen';
import TopicDescriptionScreen from '../screens/TopicDescriptionScreen';

export default TabNavigator(
  {
    Home: {
      screen: StackNavigator({
          Home: {screen: HomeScreen},
          Topics: {screen: TopicScreen},
          Desceiption: {screen: TopicDescriptionScreen,
            navigationOptions: ({ navigation }) => ({
              headerLeft: ( <Button iconLeft transparent primary onPress={() => navigation.goBack()}>
                              <Ionicons size={28}
                                color= '#307be1'
                                style={{ marginLeft: 10, marginRight:1 }}
                                name='ios-arrow-back-outline' />
                              <Text>Back</Text>
                            </Button>
                          ),
            })
          }
        },
        {
          headerMode: 'none'
        }
      )
    },
    Formulas: {
      screen: FormulaScreen,
    },
    Documents: {
      screen: ReferencesScreen,
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
