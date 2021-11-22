import React from 'react';
import {Catalog} from '../screens/Catalog/Catalog';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../screens/Registration/Registration";
import Login from "../screens/Login/Login";
import { Category } from "../screens/Category/Category";
import { CurrentItem } from "../screens/CurrentItem/CurrentItem";
import User from "../components/svgIcon/UserIcon";
import colors from "../constants /styles/colors";
import { Dimensions } from "react-native";
import Profile from "../screens/Profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BoxTabIcon from "../components/svgIcon/BoxTabIcon";
import UserIcon from "../components/svgIcon/UserIcon";

 const AuthStack = createNativeStackNavigator();
 const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Registration" component={Registration} />
    <AuthStack.Screen name="TabNavigationScreen" component={TabNavigationScreen} />
    <AuthStack.Screen name='Category' component={Category} />
    <AuthStack.Screen name='CurrentItem' component={CurrentItem} />
  </AuthStack.Navigator>
);


const TabNavigation = createBottomTabNavigator()
const TabNavigationScreen = () => (
  <TabNavigation.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        const color = focused ? colors.black : colors.lightgray
        switch (route.name) {
          case 'Catalog':
            return <BoxTabIcon color={color} />
          case 'Profile':
            return <UserIcon color={color} />
          default:
            return null
        }
      },
    })}
    tabBarOptions={{
      showLabel: false,
      style: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff',
        borderTopColor: '#fff',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        width: Dimensions.get('window').width,
        height: 65,
        zIndex: 8,
      },
    }}>
    <TabNavigation.Screen name="Catalog" component={Catalog} />
    <TabNavigation.Screen name="Profile" component={Profile} />
  </TabNavigation.Navigator>
)

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <RootStack.Screen
        name="Home"
        // initialParams={{ status: true }}
        component={HomeStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
};

export default Navigation;
