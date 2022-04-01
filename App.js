import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/Home.js';
import Settings from './src/screens/Settings.js';


const Tab = createBottomTabNavigator();
//starts the timer beginning with the ios blue color
global.currentColor = ["#007AFF"];
global.selectedDate = ["xxx"];


const App = () => {
  return (
    <>
      <StatusBar style='auto'></StatusBar>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'grey',
            tabBarActiveBackgroundColor: '#e8e8e8',
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 100,
              paddingBottom: 30
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="hourglass" size={30} color={color} />
              )
            }}
          />
          
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <Icon name="sliders" size={30} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;