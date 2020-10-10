import * as React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../pages/list/list';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function HomeScreen({route, navigation}) {
  console.log(route.params, 'route.params');
  const {itemId} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to Details1"
        onPress={() =>
          navigation.navigate('List11', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home', {post: 'postText'})}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function HomeStackScreen({route, navigation}) {
  const {itemId} = route.params;
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home1'}}
        initialParams={{itemId: 42}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details1'}}
      />
    </Stack.Navigator>
  );
}

function ListStackScreen({route, navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={List}
        options={{title: '列表页面'}}
      />
    </Stack.Navigator>
  );
}

function HomeScreen2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is the home screen!</Text>
      <Button onPress={() => navigation.navigate('Login')} title="Open Modal" />
    </View>
  );
}
function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={HomeScreen2}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

function HomeTabScreen({route, navigation}) {
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
            iconName = focused ? 'ios-bicycle-outline' : 'ios-bicycle-outline';
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
        options={{title: 'Home1'}}
        initialParams={{itemId: 42}}
        component={HomeStackScreen}
      />
      <Tab.Screen name="Settings" component={RootStackScreen} />
      <Tab.Screen
        name="List"
        component={ListStackScreen}
        options={{title: 'List'}}
      />
    </Tab.Navigator>
  );
}

function ListVC() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>List Screen</Text>
    </View>
  );
}

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeTabScreen}
          options={{title: 'Home1'}}
          initialParams={{itemId: 42}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Details1'}}
        />
        <Stack.Screen
          name="List11"
          component={ListVC}
          options={{title: '我是列表'}}
        />
      </Stack.Navigator>
    );
  }
}

export default MainScreen;
