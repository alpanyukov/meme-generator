import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Image, View, Text } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';
import { MemeData } from '../Meme.types';
import { getList } from '../api';

type MemeListProps = {};

function keyExtractor(item: MemeData) {
  return item.id;
}

export const MemeList: NavigationScreenComponent<
  {},
  {},
  MemeListProps
> = props => {
  const [memes, setMemes] = useState<MemeData[]>([]);

  useEffect(() => {
    getList().then(setMemes);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 8 }}
        data={memes}
        keyExtractor={keyExtractor}
        renderItem={({ item: meme }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Creator', { meme })}
          >
            <Image
              style={{ flex: 1, height: 300 }}
              resizeMode="contain"
              source={{ uri: meme.url }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
