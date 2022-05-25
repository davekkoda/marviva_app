import { 
  TransitionSpecs,
  createStackNavigator } 
  from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginPage from "../screens/LoginPage";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const screens = {
  // WelcomeScreen: {
  //     screen: WelcomeScreen,
  // },
  LoginPage: {
    screen: LoginPage,
  },
  SignUp: {
    screen: SignUp,
  },
  Home: {
    screen: Home,
    // screenOptions: {
    //   animationEnabled: false,
    // },
    navigationOptions: {
      gestureEnabled: false,
    },
  },
  Profile: {
    screen: Profile,
    // screenOptions: {
    //   animationEnabled: false,
    // },
    navigationOptions: {
      gestureEnabled: false,
    },
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  }
});

export default createAppContainer(HomeStack);
