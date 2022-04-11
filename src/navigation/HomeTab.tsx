import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeIndex from 'screens/Home'

export type HomeTabParamList = {
  HomeIndex: undefined,
}

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeIndex" component={HomeIndex}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator<HomeTabParamList>()

const HomeTab = () => {
  const screenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false
  }
  const color = (focused: boolean) => focused ? '#000' : '#ddd'
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="HomeIndex" component={HomeStack} options={{
        tabBarIcon: ({focused}) => (
          <Icon name="home" size={30} color={color(focused)}/>
        )
      }}/>
    </Tab.Navigator>
  )
}

export default HomeTab
