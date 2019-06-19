import React, { useEffect, useState } from 'react';
import { Text, Modal } from 'react-native';
import { Screen } from './components/Screen';
import { CreateMeme, MemeList, MemeData } from './features/memes';

export function App() {
  const [selectedMeme, selectMeme] = useState<MemeData | null>(null);

  return (
    <Screen>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
        Выберите 1 шаблон из списка
      </Text>

      <MemeList onMemePress={selectMeme} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={selectedMeme !== null}
        onRequestClose={() => {
          selectMeme(null);
        }}
        presentationStyle="fullScreen"
      >
        {selectedMeme && (
          <CreateMeme close={() => selectMeme(null)} id={selectedMeme.id} />
        )}
      </Modal>
    </Screen>
  );
}
