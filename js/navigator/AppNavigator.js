import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
const InitNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    },
  },
});
const MainNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
});

const SwitchNavigator = createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator,
  },
  {defaultNavigationOptions: {header: null}},
);
export default createAppContainer(SwitchNavigator);
