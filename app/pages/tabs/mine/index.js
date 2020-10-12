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
        <Text style={{fontSize: 30}}>This is the mine screen!</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Open Modal"
        />
      </View>
    );
  }
}

export default Index;
