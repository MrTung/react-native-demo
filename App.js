import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthRouter from './app/routers/AuthRouter';
import AppRouter from './app/routers/AppRouter';

const RootStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={AppRouter}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Login" component={AuthRouter} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
