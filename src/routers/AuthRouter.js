import * as React from 'react';
// import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';
import Register from '../pages/login/register';

const Stack = createStackNavigator();

export class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Regist" component={Register} />
      </Stack.Navigator>
    );
  }
}

export default AuthScreen;
