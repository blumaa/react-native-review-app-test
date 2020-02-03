import { createStackNavigator } from "react-navigation-stack";
import Info from "../screens/info";

const screens = {
  Info: {
    screen: Info,
    navigationOptions: {
      title: "Welcome to the INFO PAGE",
    }
  },
};

const InfoStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: "#eee",
      height: 60
    }
  }
});

export default InfoStack;
