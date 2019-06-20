import React, { useState } from 'react';
import { Text, Modal } from 'react-native';
import { Screen } from './components/Screen';
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

// export function App() {
//   const [selectedMeme, selectMeme] = useState<MemeData | null>(null);

//   return (
//     <Screen>

//       <MemeList onMemePress={selectMeme} />

//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={selectedMeme !== null}
//         onRequestClose={() => {
//           selectMeme(null);
//         }}
//         presentationStyle="fullScreen"
//       >
//         {selectedMeme && (
//           <CreateMeme close={() => selectMeme(null)} id={selectedMeme.id} />
//         )}
//       </Modal>
//     </Screen>
//   );
// }
