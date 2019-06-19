import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Image } from 'react-native';
import { MemeData } from '../Meme.types';
import { getList } from '../api';

type MemeListProps = {
  onMemePress: (item: MemeData) => unknown;
};

function keyExtractor(item: MemeData) {
  return item.id;
}

export const MemeList: React.FC<MemeListProps> = props => {
  const [memes, setMemes] = useState<MemeData[]>([]);

  useEffect(() => {
    getList().then(setMemes);
  }, []);

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 8 }}
      data={memes}
      keyExtractor={keyExtractor}
      renderItem={({ item: meme }) => (
        <TouchableOpacity onPress={() => props.onMemePress(meme)}>
          <Image
            style={{ flex: 1, height: 300 }}
            resizeMode="contain"
            source={{ uri: meme.url }}
          />
        </TouchableOpacity>
      )}
    />
  );
};
