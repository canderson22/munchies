import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ResturantsScreeen from '../screens/ResturantsScreen';

const ResturantStack = createStackNavigator({ Resturants: ResturantsScreeen });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Resturants: ResturantStack
});
