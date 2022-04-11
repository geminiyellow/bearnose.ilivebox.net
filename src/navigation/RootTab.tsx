import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { useAuthentication } from "hooks/useAuthentication";
import AuthStack, { AuthStackParamList } from "navigation/AuthStack";
import HomeTab, { HomeTabParamList } from "navigation/HomeTab";

export type RootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
}

export type CommonParamList = AuthStackParamList & RootStackParamList & HomeTabParamList

const RootTab = createMaterialTopTabNavigator<RootStackParamList>()

const RootTabComponent = () => {
  const {user} = useAuthentication()
  console.log('RootTab', user)
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarIndicatorContainerStyle: {
      display: "none"
    },
    tabBarStyle: {
      display: "none"
    }
  }
  const initialRootName = user ? 'HomeTab' : 'AuthStack'
  return (
    <RootTab.Navigator initialRouteName={initialRootName} screenOptions={screenOptions}>
      {
        user
          ? <RootTab.Screen name="HomeTab" component={HomeTab}/>
          : <RootTab.Screen name="AuthStack" component={AuthStack}/>
      }
    </RootTab.Navigator>
  )
}

export default RootTabComponent
