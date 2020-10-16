import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import AuthRouter from './src/routers/AuthRouter';
import AppRouter from './src/routers/AppRouter';

console.log(Platform.OS);

// 配置一波编译环境
const envDirectory = process.env.NODE_ENV;
if (envDirectory === 'development') {
  process.env.APPCONFIG = require('./build/development.js');
} else if (envDirectory === 'production') {
  process.env.APPCONFIG = require('./build/production.js');
} else if (envDirectory === 'release') {
  process.env.APPCONFIG = require('./build/release.js');
}
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
