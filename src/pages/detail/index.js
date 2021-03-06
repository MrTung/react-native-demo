import * as React from 'react';
import {View, Text, Button, ActionSheetIOS} from 'react-native';
import {WToast as Toast} from 'react-native-smart-tip';

export class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  show() {
    const toastOpts = {
      data: 'Hello World',
      position: Toast.position.CENTER,
    };
    Toast.show(toastOpts);
  }

  showLoading() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['取消', '删除'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
        } else if (buttonIndex === 2) {
        }
      },
    );
  }

  hideLoading() {}

  render() {
    const {navigation, route} = this.props;
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
        <Button title="show toast" onPress={() => this.show()} />
        <Button title="show loading" onPress={() => this.showLoading()} />
        <Button title="hide loading" onPress={() => this.hideLoading()} />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home', {post: 'postText'})}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default Index;
