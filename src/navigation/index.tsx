import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import RootTab from "navigation/RootTab";
import * as React from 'react';
import { $navigation } from './rootNavigation'

export type SuperRootStackParamList = {
  RootTab: undefined,
}

const RootStack = createStackNavigator<SuperRootStackParamList>()

const RootNavigation = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {}
  }
  return (
    <RootStack.Navigator initialRouteName="RootTab" screenOptions={screenOptions}>
      <RootStack.Screen name="RootTab" component={RootTab}/>
    </RootStack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer ref={$navigation}>
      <RootNavigation/>
    </NavigationContainer>
  )
}

export default Navigation
