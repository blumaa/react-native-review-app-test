import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import InfoStack from './infoStack'

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack
  },
  Info: {
    screen: InfoStack
  }
})

export default createAppContainer(RootDrawerNavigator)
