/**
 * 主页面
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';

export default class HomePage extends React.Component {
  _tabNavigator() {
    return createAppContainer(
      createBottomTabNavigator({
        FavoritePage: {
          screen: FavoritePage,
          navigationOptions: {
            tabBarLabel: '喜欢',
          },
        },
        MyPage: {
          screen: MyPage,
          navigationOptions: {
            tabBarLabel: '我的',
          },
        },
        PopularPage: {
          screen: PopularPage,
          navigationOptions: {
            tabBarLabel: '最热',
          },
        },
        TrendingPage: {
          screen: TrendingPage,
          navigationOptions: {
            tabBarLabel: '趋势',
          },
        },
      }),
    );
  }
  render() {
    const Tab = this._tabNavigator();
    return <Tab />;
  }
}
