import { StyleSheet, View, Button, Alert } from 'react-native'
import React from 'react'

const Start = ({navigation}) => {
  return (
    <View>
      <View style={{padding:30,marginTop:100}}>        
        <Button
            title="Create Joining Code ... "            
            color="#f194ff"
            onPress={() => navigation.navigate('Join1')}
            />
        </View>
        <View style={{padding:30}}>        
        <Button
            title="Enter Joining Code... "
            color="#f194ff"
            onPress={() => navigation.navigate('Receive1')}
        />
        </View>

    </View>
  )
}

export default Start

const styles = StyleSheet.create({     
})