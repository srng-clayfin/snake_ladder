import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './components/MyStack'
import OfflineGame from './components/offlineMode/OfflineGame'

const App = () =>   
{  
  return (    

      <NavigationContainer>
            <MyStack />  
      </NavigationContainer>    

      
    
      // <OfflineGame />

      

  )
}

export default App

const styles = StyleSheet.create({})