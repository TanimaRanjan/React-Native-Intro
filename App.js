import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ChangeColor2 from './src/screens/ChangeColor2';
import PrintInput from './src/screens/PrintInput';
import BoxScreen from './src/screens/BoxScreen';
import FlexScreen from './src/screens/FlexScreen';
import PositionScreen from './src/screens/PositionScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Change:ChangeColor2,
    Print:PrintInput,
    BoxS:BoxScreen,
    Flex:FlexScreen,
    Pos:PositionScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My App"
    }
  }
);

export default createAppContainer(navigator);
