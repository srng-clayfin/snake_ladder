import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Start';
import Join1 from './Join1';
import Receive1 from './Receive1';
import Game from './Game';
import axios from 'axios';
import Main from './Main';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View } from 'react-native';
import OfflineMain from './offlineMode/OflineMain';
import Offline from './offlineMode/Offline';
import OfflineGame from './offlineMode/OfflineGame';
const Stack = createStackNavigator();
export const userContext = React.createContext();



export default function MyStack()
{
  const [p1,setP1] = useState(0);
  const [pid,setPid] = useState();
  const [p2,setP2] = useState(0);   
  const [user1,setUser1] = useState(false); 
  const [name1,setName1] = useState("")
  const [name2,setName2] = useState("")

  const delData = (navigation) =>
  {
    axios.delete('https://fakeserversarang.herokuapp.com/player/'+pid)
    .then(response => console.log(response.data));

    navigation.navigate('Main');
  }
 


  return (

    <userContext.Provider value={{p1,setP1,p2,setP2,pid,setPid,user1,setUser1,name1,setName1,setName2,name2}} >    
      <Stack.Navigator>

          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Offline"
            component={Offline}
            options={{ headerShown: false }}
          />



          <Stack.Screen
            name="Start"
            component={Start}
            options={({ navigation, route }) => ({
              headerLeft: (props) => (
                <View style={{marginLeft:20}}>                  
                  <AntDesign name='retweet'  color={'black'} size={26}  {...props}
                  title="Restart"
                  onPress={() => delData(navigation)} />
                </View>
              ),
          })}/>

          <Stack.Screen name="Join1" component={Join1} 
          options={({ navigation, route }) => ({
            headerLeft: (props) => (               
            <View style={{marginLeft:20}}>                  
                <AntDesign name='retweet'  color={'black'} size={26}  {...props}
                title="Restart"
                onPress={() => delData(navigation)} />
            </View>
            ),
        })}      />

          <Stack.Screen name="Receive1" component={Receive1} 
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <View style={{marginLeft:20}}>                  
                <AntDesign name='retweet'  color={'black'} size={26}  {...props}
                title="Restart"
                onPress={() => delData(navigation)} />
              </View>
            ),
        })}/>

        <Stack.Screen name='Game' component={Game} 
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
            <View style={{marginLeft:20}}>                  
                <AntDesign name='retweet'  color={'black'} size={26}  {...props}
                title="Restart"
                onPress={() => delData(navigation)} />
            </View>
            ),
        })}/>    

        <Stack.Screen name='OfflineMain' component={OfflineMain} 
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
            <View style={{marginLeft:20}}>                  
                <AntDesign name='retweet'  color={'black'} size={26}  {...props}
                title="Restart"
                onPress={() => delData(navigation)} />
            </View>
            ),
          })}/>    

          <Stack.Screen name='OfflineGame' component={OfflineGame} 
              options={({ navigation, route }) => ({
                headerLeft: (props) => (
                <View style={{marginLeft:20}}>                  
                    <AntDesign name='retweet'  color={'black'} size={26}  {...props}
                    title="Restart"
                    onPress={() => delData(navigation)} />
                </View>
                ),
            })}/>    

      </Stack.Navigator>



        {/* <OfflineMain /> */}
      
    </userContext.Provider>

  );
};