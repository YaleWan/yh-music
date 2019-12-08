/**
 * 主页面
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class MyPage extends React.Component {
  render() {
    return (
      <View style={styles.Contanier}>
        <Button
          title="点击跳转到主页"
          onPress={() => {
            this.props.navigation.navigate('FavoritePage');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Contanier: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
