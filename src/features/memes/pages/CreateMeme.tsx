import React, { useState } from "react";
import { NavigationScreenComponent } from "react-navigation";
import {
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Share,
  Image,
  Text,
  Keyboard
} from "react-native";
import { create } from "../api";
import { MemeData } from "../Meme.types";

type CreateMemeProps = {};

export const CreateMeme: NavigationScreenComponent<
  { meme: MemeData },
  {},
  CreateMemeProps
> = props => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const meme = props.navigation.getParam("meme");
  const { id, url } = meme;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>
        Ввод данных для генерации
      </Text>
      <Text style={{ marginTop: 8 }}>Строка 1</Text>
      <TextInput
        value={text1}
        autoFocus
        onChangeText={setText1}
        style={{ borderColor: "black", borderWidth: 1 }}
      />
      <Text style={{ marginTop: 8 }}>Строка 2</Text>
      <TextInput
        value={text2}
        onChangeText={setText2}
        style={{ marginBottom: 8, borderColor: "black", borderWidth: 1 }}
      />
      <Button
        onPress={async () => {
          const url = await create(id, text1, text2);
          setResult(url);
          Keyboard.dismiss();
        }}
        title="Cоздать"
      />
      <View style={{ marginTop: 8 }}>
        <Button onPress={() => props.navigation.goBack()} title="Отмена" />
      </View>

      {result ? (
        <TouchableOpacity
          style={{ flex: 1, marginVertical: 8 }}
          onPress={() => Share.share({ message: result })}
        >
          <Image
            source={{ uri: result }}
            resizeMode="contain"
            style={{ flex: 1, marginVertical: 8 }}
          />
        </TouchableOpacity>
      ) : (
        <Image
          source={{ uri: url }}
          resizeMode="contain"
          style={{ flex: 1, marginVertical: 8 }}
        />
      )}
    </View>
  );
};
