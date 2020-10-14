import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { getTablist, getSpuList } from '../../../servers/home.server';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    // console.log(process.env.configuration + '1212');
  }

  async test() {
    const res = await getTablist();
    console.log('请求结果：', res);

    const spu = await getSpuList(
      {
        'categoryId': '',
        'categoryNameKey': '',
        'keywords': '',
      },
      {
        'pageNum': 1,
        'pageSize': 10,
      });
    console.log('请求结果spu：', spu);
  }

  render() {
    const { navigation, route } = this.props;
    const { itemId } = route.params;
    console.log(route.params, 'route.params');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
