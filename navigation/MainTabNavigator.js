import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PlateScreen from '../screens/PlateScreen';
import MunchiesScreen from '../screens/MunchiesScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `md-home${focused ? '' : ''}` : 'md-home'}
    />
  )
};

const PlateStack = createStackNavigator({
  Plate: PlateScreen
});

PlateStack.navigationOptions = {
  tabBarLabel: 'Fill my Plate',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pie${focused ? '' : '-outline'}`
          : 'ios-pie'
      }
    />
  )
};

const MunchiesStack = createStackNavigator({
  Munchies: MunchiesScreen
});

MunchiesStack.navigationOptions = {
  tabBarLabel: 'My Munchies',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pizza${focused ? '' : '-outline'}`
          : 'ios-pizza'
      }
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  PlateStack,
  MunchiesStack
});
