import React, { useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  Image,
  View,
  StyleSheet
} from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { MemeData } from "../Meme.types";
import { getList } from "../api";

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
        data={memes}
        keyExtractor={keyExtractor}
        renderItem={({ item: meme }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Creator", { meme })}
          >
            <View style={styles.card}>
              <Image
                style={{ height: 300 }}
                resizeMode="contain"
                source={{ uri: meme.url }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});
