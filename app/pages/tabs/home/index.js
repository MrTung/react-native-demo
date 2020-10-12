import * as React from 'react';
import {View, Text, Button} from 'react-native';

export class Home extends React.Component {
  constructor(props) {
    super(props);
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
      </View>
    );
  }
}

export default Home;
