import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabRouter from './TabRouter';
import DetailsScreen from '../pages/detail';
import OtherScreen from '../pages/other';

const Stack = createStackNavigator();

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator>
        {/* 主tab页面,必须是nav包含tab,不然push的时候tabbar无法隐藏 */}
        <Stack.Screen
          name="首页"
          component={TabRouter}
          initialParams={{itemId: 42}}
        />
        {/* 具体的页面逻辑页面 */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: '详情页'}}
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
