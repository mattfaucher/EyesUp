import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home.js';
import Settings from './screens/Settings.js';
import UserCalendar from './screens/UserCalendar.js';
import { tintColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto'></StatusBar>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: false,
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
          name="Calendar"
          component={UserCalendar}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color }) => (
              <Icon name="calendar" size={30} color={color} />
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
  );
}

export default App;