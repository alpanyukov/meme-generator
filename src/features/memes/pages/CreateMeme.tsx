import React, { useState } from 'react';
import {
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Share,
  Image,
  Text
} from 'react-native';
import { create } from '../api';

type CreateMemeProps = {
  close: () => void;
  id: string;
};

export const CreateMeme: React.FC<CreateMemeProps> = props => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* <TouchableOpacity
        onPress={props.close}
        style={{ position: 'absolute', top: 16, right: 16 }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>X</Text>
        </View>
      </TouchableOpacity> */}
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
        Ввод данных для генерации
      </Text>
      <Text style={{ marginTop: 8 }}>Строка 1</Text>
      <TextInput
        value={text1}
        autoFocus
        onChangeText={setText1}
        style={{ borderColor: 'black', borderWidth: 1 }}
      />
      <Text style={{ marginTop: 8 }}>Строка 1</Text>
      <TextInput
        value={text2}
        onChangeText={setText2}
        style={{ marginBottom: 8, borderColor: 'black', borderWidth: 1 }}
      />
      <Button
        onPress={async () => {
          const url = await create(props.id, text1, text2);
          setResult(url);
        }}
        title="Cоздать"
      />
      <View style={{ marginTop: 8 }}>
        <Button onPress={props.close} title="Отмена" />
      </View>
      {result && (
        <TouchableOpacity
          style={{ flex: 1, marginVertical: 8 }}
          onPress={() => Share.share({ message: result })}
        >
          <Image
            source={{ uri: result }}
            resizeMode="contain"
            style={{ flex: 1, height: 300 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
