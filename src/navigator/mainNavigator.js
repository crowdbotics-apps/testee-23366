import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList185207Navigator from '../features/NotificationList185207/navigator';
import Settings185206Navigator from '../features/Settings185206/navigator';
import Settings185198Navigator from '../features/Settings185198/navigator';
import UserProfile185196Navigator from '../features/UserProfile185196/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList185207: { screen: NotificationList185207Navigator },
Settings185206: { screen: Settings185206Navigator },
Settings185198: { screen: Settings185198Navigator },
UserProfile185196: { screen: UserProfile185196Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
