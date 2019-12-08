/**
 * 主页面
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class FavoritePage extends React.Component {
  render() {
    return (
      <View style={styles.Contanier}>
        <Text>FavoritePage</Text>
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
