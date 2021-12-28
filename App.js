import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => (
  <SafeAreaView>
    <Button title="Press Me"></Button>
    <StatusBar style="auto"/>
  </SafeAreaView>
);

export default App;