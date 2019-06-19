import React from 'react';
import {
  SafeAreaView,
  ViewProps,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';

export const Screen: React.FC<ViewProps> = ({ style, ...props }) => (
  <SafeAreaView style={[styles.container, style]} {...props} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
