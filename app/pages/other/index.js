import * as React from 'react';
import {View, Text, Button} from 'react-native';

export class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>List Screen</Text>
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({title: 'Updated!'})}
        />
      </View>
    );
  }
}

export default Index;
