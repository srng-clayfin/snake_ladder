
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const Start = () => {
  return (
    <View>
      <View style={styles.container}>        
        <Button
            title="Send Joining Code ... "
            color="#f194ff"
            onPress={() => Alert.alert('Send Joining Code...:-)')}
        />


        <Button
            title="Receive Code... "
            color="#f194ff"
            onPress={() => Alert.alert('Receive Code...')}
        />
        </View>

    </View>
  )
}

export default Start

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
})