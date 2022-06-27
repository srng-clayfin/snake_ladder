import { StyleSheet, View, Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

const Start = ({navigation}) => {
  return (
    <View style={{padding:30}}>
        <View style={styles.top}>
              <Button
                    title="Create Joining Code ... "            
                    type="clear"
                    onPress={() => navigation.navigate('Join1')}
              />
        </View>

        <View style={styles.middle}>
        </View>

        <View style={styles.bottom}>                
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
  
  top:
  {
    marginTop:100,
    borderWidth:1,
    borderColor:"red",
    borderTopStartRadius:35,
    borderTopEndRadius:35,    
  } ,
  middle : 
  {
    height: "30%",    
    width: "2%", 
    marginLeft:"49%",       
    borderWidth:1,
    borderColor:"red"
  },
  bottom : 
  {
    borderWidth:1,
    borderColor:"red",
    borderBottomLeftRadius:35,
    borderBottomRightRadius:35,
  }    
})