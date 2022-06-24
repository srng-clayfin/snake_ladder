import { StyleSheet, View, Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

const Start = ({navigation}) => {
  return (
    <View>

      {/* <View style={{padding:30,marginTop:100}}>        
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
        </View> */}  

      <View style={{marginTop:30}}>                
                  <Button
                  title="Create Joining Code ... "            
                  type="clear"
                  onPress={() => navigation.navigate('Join1')}
                  />
      </View>

      <View style={{marginTop:30}}>                
                  <Button
                  title="Enter Joining Code... "
                  type="clear"
                  onPress={() => navigation.navigate('Receive1')}
                  />
      </View>


    </View>
  )
}

export default Start

const styles = StyleSheet.create({     
})