import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {header_not_shown, screenNames} from './constants/constants';
import Splashscreen from './screens/Splashscreen';
import Home from './screens/Home';

const app = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.splash}>
        <Stack.Screen
          name={screenNames.splash}
          component={Splashscreen}
          options={header_not_shown}
        />
        <Stack.Screen
          name={screenNames.home}
          component={Home}
          options={header_not_shown}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
