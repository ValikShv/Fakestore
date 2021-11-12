import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import createStackNavigator from "react-native-screens/createNativeStackNavigator";

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const LoginStack = createStackNavigator();

const SignInScreen = () => {
  // const { colors: theme } = useTheme();

  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 16,
          },
          cardStyle: {
            backgroundColor: theme.imageBackground,
          },
          headerStyle,
          headerLeft: HeaderBackButton,
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
};

