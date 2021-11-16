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
  </AuthStack.Navigator>
);

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Catalog" component={Catalog} />
  </HomeStack.Navigator>
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
    </RootStack.Navigator>
    // <RootStack.Navigator headerMode="none">
    //   {false ? (
    //     <>
    //       {false ? (
    //         <RootStack.Screen
    //           name="App"
    //           component={HomeStackScreen}
    //           options={{
    //             animationEnabled: false,
    //           }}
    //         />
    //       ) : (
    //         <RootStack.Screen
    //           name="Registration"
    //           // initialParams={{ status }}
    //           component={AuthStackScreen}
    //           options={{
    //             animationEnabled: false,
    //           }}
    //         />
    //       )}
    //     </>
    //   ) : (
    //     <RootStack.Screen
    //       name="Auth"
    //       // initialParams={{ status: true }}
    //       component={AuthStackScreen}
    //       options={{
    //         animationEnabled: false,
    //       }}
    //     />
    //   )}
    // </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      {/*<RootStackScreen />*/}
      <AuthStackScreen />
      {/*<Login />*/}
    </NavigationContainer>
  );
};

export default Navigation;
