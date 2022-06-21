import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './components/MyStack'
import Game from './components/Game'

const App = () => 
{

  const [p1,setP1] = useState("srng");
  const [p2,setP2] = useState(0);
  
  return (
    
      <NavigationContainer>
  
            <MyStack />
  
      </NavigationContainer>    
      
      
      // <View>        
      //   <Game />
      // </View>
      

  )
}

export default App

const styles = StyleSheet.create({})