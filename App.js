import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Canvas from './Canvas'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app AAAAAAAA22!</Text>
      <Canvas
        className="Canvas"
        width = {100}
        height = {100}
        draw = {(ctx) => {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(100, 100);
          ctx.stroke();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
