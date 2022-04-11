import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeIndex from 'screens/Home'

export type HomeTabParamList = {
  HomeStack: undefined,
}

const Stack = createStackNavigator();

const HomeStack = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  }
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeIndex" component={HomeIndex}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator<HomeTabParamList>()

const HomeTab = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false
  }
  const color = (focused: boolean) => focused ? '#000' : '#ddd'
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={30} color={color(focused)}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTab
