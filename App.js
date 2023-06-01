import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import React from 'react';
import { Text, View } from 'react-native';

function App() {
  return (
  <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-gray-800 text-md font-bold mt-2">
          Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}


export default withExpoSnack(App);