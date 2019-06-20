import { CreateMeme, MemeList } from './features/memes';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: MemeList,
      navigationOptions: {
        title: 'Список шаблонов'
      }
    },
    Creator: {
      screen: CreateMeme,
      navigationOptions: {
        title: 'Генерация'
      }
    }
  },
  {
    initialRouteName: 'List'
  }
);

export const App = createAppContainer(AppNavigator);
