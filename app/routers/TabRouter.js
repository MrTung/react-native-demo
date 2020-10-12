import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MineScreen from '../pages/tabs/mine';
import HomeScreen from '../pages/tabs/home';
import ListScreen from '../pages/tabs/list';

const Tab = createBottomTabNavigator();

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-add-circle-outline'
                : 'ios-add-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-bicycle-outline'
                : 'ios-bicycle-outline';
            } else {
              iconName = focused
                ? 'ios-car-sport-outline'
                : 'ios-car-sport-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          options={{title: '首页'}}
          initialParams={{itemId: 42}}
          component={HomeScreen}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{title: '分类页'}}
        />
        <Tab.Screen
          name="Settings"
          options={{title: '我的'}}
          component={MineScreen}
        />
      </Tab.Navigator>
    );
  }
}

export default Home;
