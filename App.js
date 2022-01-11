import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home.js';
import Settings from './screens/Settings.js';
import UserCalendar from './screens/UserCalendar.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto'></StatusBar>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Icon name="hourglass" size={24} color={tintColor} />
            ),
            tabBarActiveTintColor: '#007AFF'
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={UserCalendar}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: () => (
              <Icon name="calendar" size={24} color="grey" />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
              <Icon name="cog" size={24} color="grey" />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;