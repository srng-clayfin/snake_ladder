import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Start';
import Join1 from './Join1';

const Stack = createNativeStackNavigator();

export default function MyStack(){
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Start' }}
        />
        <Stack.Screen name="Join1" component={Join1} />
      </Stack.Navigator>
  );
};