import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Start';
import Join1 from './Join1';
import Receive1 from './Receive1';
import Game from './Game';
import { Button } from 'react-native';
import axios from 'axios'

const Stack = createStackNavigator();

export const userContext = React.createContext();

export default function MyStack()
{

  const [p1,setP1] = useState();
  const [pid,setPid] = useState();
  const [p2,setP2] = useState();   
  const [user1,setUser1] = useState(false); 

  const delData = (navigation) =>
  {
    axios.delete('https://fakeserversarang.herokuapp.com/player/'+pid)
    .then(response => console.log(response.data));

    navigation.navigate('Start');
  }
 


  return (

    <userContext.Provider value={{p1,setP1,p2,setP2,pid,setPid,
      user1,setUser1}} >
    
      <Stack.Navigator>        
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ title: 'Start' }}
          />
          <Stack.Screen name="Join1" component={Join1} 
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
                <Button
                    {...props}
                    title="Restart"
                    onPress={() => delData(navigation)}
                />
            ),
        })}      />

          <Stack.Screen name="Receive1" component={Receive1} 
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
                <Button
                    {...props}
                    title="Restart"
                    onPress={() => delData(navigation)}
                />
            ),
        })}/>

          <Stack.Screen name='Game' component={Game} 
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
                <Button
                    {...props}
                    title="Restart"
                    // onPress={() => navigation.navigate('Start')}
                    onPress={() => delData(navigation)}
                />
            ),
        })}/>    

      </Stack.Navigator>

    </userContext.Provider>

  );
};