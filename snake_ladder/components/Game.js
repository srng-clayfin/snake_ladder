import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from './MyStack'



const Game = () => 
{
  
    const {p1,setP1,p2,setP2,pid,setPid,
        user1,setUser1} = useContext(userContext) ;

    const [pl1,setPl1] = useState(0)
    const [pl2,setPl2] = useState(0)
    
    const showData = () =>
    {
        try{
            axios({
                method: 'get',
                url: `https://srngjson.herokuapp.com/products/${pid}`,
            }).then((response) => {
                const pdata = JSON.stringify(response.data);
                setPl1(pdata.player1)
                setPl2(pdata.player2)
            });
        }
        catch
        {
            null
        }
    }

    showData();


    

  return (
    <View>
      <Text style={{fontSize:32,fontWeight:"bold"}}>Waiting for your Apponent</Text>
    </View>
  )
}

export default Game

const styles = StyleSheet.create({})