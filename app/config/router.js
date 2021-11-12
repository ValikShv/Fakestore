import React from 'react';
import createStackNavigator from 'react-native-screens/createNativeStackNavigator';

const defaultNavigationOptions = {
  headerShown: false,
  cardOverlayEnabled: true,
  cardShadowEnabled: true,
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    headerMode="none"
    // initialRouteName={!props.route.params?.status && 'PersonalInfo'}
    >
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

const HomeStack = createStackNavigator()
const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Catalog" component={Catalog} />
  </HomeStack.Navigator>
)



const RootStack = createStackNavigator()
const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      {false ? (
        <>
          {false ? (
            <RootStack.Screen
              name="App"
              component={HomeStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
          ) : (
            <RootStack.Screen
              name="Registration"
              // initialParams={{ status }}
              component={AuthStackScreen}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </>
      ) : (
        <RootStack.Screen
          name="Auth"
          // initialParams={{ status: true }}
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>

  )
}
