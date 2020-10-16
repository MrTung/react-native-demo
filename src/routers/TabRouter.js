import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconFont from '../assets/iconfont';

import MineScreen from '../pages/tabs/mine';
import HomeScreen from '../pages/tabs/home';
import ListScreen from '../pages/tabs/list';

const Tab = createBottomTabNavigator();

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getIcon(route, focused) {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'gongzuotainor' : 'gongzuotais';
    } else if (route.name === 'Fuliao') {
      iconName = focused ? 'fuliaonor' : 'fuliaos';
    } else if (route.name === 'Customer') {
      iconName = focused ? 'gongzuotais' : 'gongzuotais';
    } else if (route.name === 'Mine') {
      iconName = focused ? 'mingpiannor' : 'mingpians';
    }
    return iconName;
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <IconFont
                name={this.getIcon(route, focused)}
                size={20}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1467FF',
          inactiveTintColor: '#9DA1AD',
        }}>
        <Tab.Screen
          name="Home"
          options={{title: '工作台'}}
          initialParams={{itemId: 42}}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Fuliao"
          component={ListScreen}
          options={{title: '辅料'}}
        />
        <Tab.Screen
          name="Customer"
          options={{title: '客户'}}
          component={ListScreen}
        />
        <Tab.Screen
          name="Mine"
          options={{title: '我的'}}
          component={MineScreen}
        />
      </Tab.Navigator>
    );
  }
}

export default Home;
