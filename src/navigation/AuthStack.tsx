import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import ForgotPassword from 'screens/Auth/ForgotPassword';

import Login from "screens/Auth/Login";
import Register from "screens/Auth/Register";
import Welcome, { WelcomePropsRouteParams } from 'screens/Auth/Welcome';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: WelcomePropsRouteParams;
}

const Stack = createStackNavigator<AuthStackParamList>()
const AuthStack = () => {
  const options: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false
  }
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
    </Stack.Navigator>
  )
}

export default AuthStack
