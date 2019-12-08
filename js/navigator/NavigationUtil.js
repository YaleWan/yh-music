/**
 * 全局导航工具类
 *
 * @export
 * @class NavigationUtil
 */
export default class NavigationUtil {
  /**
   *
   * 返回首页
   * @static
   * @param {*} params
   * @memberof NavigationUtil
   */
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }

  /**
   *
   * 返回上一页
   * @static
   * @param {*} params
   * @memberof NavigationUtil
   */
  static goBack(params) {
    const {navigation} = params;
    navigation.goBack();
  }
}
