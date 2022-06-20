import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Join1 = () => 
{    
    const no = Math.floor((Math.random()*10000000)+1); 

  return (
    <View>
      <Text>{no}</Text>
    </View>
  )
}

export default Join1

const styles = StyleSheet.create({})