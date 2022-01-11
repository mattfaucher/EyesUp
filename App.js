import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home.js';
import Settings from './screens/Settings.js';
import UserCalendar from './screens/UserCalendar.js';

// Create the navigation stack
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="UserCalendar" component={UserCalendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;