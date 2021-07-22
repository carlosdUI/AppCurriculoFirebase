import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { startClock } from 'react-native-reanimated';

import Task from "./src/pages/Task/"
import NewTask from "./src/pages/NewTask/"
import Details from "./src/pages/Details/"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen
          name="Task"
          component={Task}
        />

        <Stack.Screen
          name="NewTask"
          component={NewTask}
        />

        <Stack.Screen
          name="Details"
          component={Details}
        />

      </Stack.Navigator>
    </NavigationContainer>
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
