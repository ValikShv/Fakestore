import React from 'react';
import {Catalog} from '../screens/Catalog/Catalog';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../screens/Registration/Registration";
import Login from "../screens/Login/Login";

 const AuthStack = createNativeStackNavigator();
 const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    // options={{gestureDirection: 'vertical-inverted',}}
  >
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Registration" component={Registration} />
    <AuthStack.Screen name='Catalog' component={Catalog} />
    {/*<AuthStack.Screen name='Category' component={Category} />*/}
    {/*<AuthStack.Screen name='ItemCard' component={ItemCard} />*/}
  </AuthStack.Navigator>
);


const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen
        name="Auth"
        // initialParams={{ status: true }}
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
