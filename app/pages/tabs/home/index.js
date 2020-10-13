import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {testRequest} from '../../../servers/home.server';
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  async test() {
    const res = await testRequest();
    console.log(res, 'res');
  }

  render() {
    const {navigation, route} = this.props;
    const {itemId} = route.params;
    console.log(route.params, 'route.params');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
        <Button
          title="Go to Other"
          onPress={() =>
            navigation.navigate('Other', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
        <Button title="测试网络请求" onPress={() => this.test()} />
      </View>
    );
  }
}

export default Home;
