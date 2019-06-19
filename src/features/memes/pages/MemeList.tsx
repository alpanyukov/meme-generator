import React from 'react';
import { FlatList, TouchableOpacity, Image } from 'react-native';
import { MemeData } from '../Meme.types';

type MemeListProps = {
  onMemePress: (item: MemeData) => unknown;
  memes: MemeData[];
};

function keyExtractor(item: MemeData) {
  return item.id;
}

export const MemeList: React.FC<MemeListProps> = props => (
  <FlatList
    style={{ flex: 1 }}
    contentContainerStyle={{ padding: 8 }}
    data={props.memes}
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
