import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './components/MyStack'

const App = () =>   
{  
  return (
        
      <NavigationContainer>
            <MyStack />  
      </NavigationContainer>    
    
      // <Game />
  )
}

export default App

const styles = StyleSheet.create({})