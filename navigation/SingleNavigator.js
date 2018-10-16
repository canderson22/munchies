import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import ResturantsScreen from '../screens/ResturantsScreen';

const ResturantsStack = createStackNavigator({
  Resturants: ResturantsScreen
});

ResturantsStack.navigationOptions = {
  tabBarLabel: 'Back',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-arrow-back'} />
  )
};

export default createMaterialTopTabNavigator({
  Resturants: ResturantsStack
});
