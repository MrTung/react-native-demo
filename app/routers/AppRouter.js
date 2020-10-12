import * as React from 'react';
import {Image, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import TabRouter from './TabRouter';
import DetailsScreen from '../pages/detail';
import OtherScreen from '../pages/other';

const Stack = createStackNavigator();

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route);

    switch (routeName) {
      case 'Home':
        return '首页';
      case 'List':
        return '分类';
      case 'Settings':
        return '我的';
    }
  }
  // LogoTitle() {
  //   return (
  //     <Image
  //       style={{width: 50, height: 50}}
  //       source={require('@expo/snack-static/react-native-logo.png')}
  //     />
  //   );
  // }

  render() {
    return (
      <Stack.Navigator
        // headerMode="none"
        screenOptions={
          {
            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }
        }>
        {/* 主tab页面 */}
        <Stack.Screen
          name="首页"
          component={TabRouter}
          initialParams={{itemId: 42}}
          options={({route}) => ({
            headerTitle: this.getHeaderTitle(route),
          })}
        />
        {/* 具体的页面逻辑页面 */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          // options={{title: '详情页'}}
          options={{
            headerTitle: '详情',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#f00"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Other"
          component={OtherScreen}
          options={{title: '其他页面'}}
        />
      </Stack.Navigator>
    );
  }
}

export default MainScreen;
