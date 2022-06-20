import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Start';
import Join1 from './Join1';
import Receive1 from './Receive1';

const Stack = createStackNavigator();

export default function MyStack(){
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Start' }}
        />
        <Stack.Screen name="Join1" component={Join1} />
        <Stack.Screen name="Receive1" component={Receive1} />
      </Stack.Navigator>
  );
};