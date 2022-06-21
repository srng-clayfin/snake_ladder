import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from './MyStack'

const Game = () => 
{  
    const {p1,setP1,p2,setP2,pid,setPid,
        user1,setUser1} = useContext(userContext) ;
    
    const [flag,setFlag] = useState(false);


        var refreshId = setInterval(function() 
        {
            axios({
                method: 'get',
                url: `https://srngjson.herokuapp.com/products/${pid}`,
            }).then((response) => {       
                const pdata = response.data;                               
                setP1(pdata.player1);
                setP2(pdata.player2);                
            });
            if(p1>0 && p2>0)
            {
                setFlag(true)
                clearInterval(refreshId);
            }
        }, 3000);

        
    

  return (

    <View>
      {flag ?
        <View>
            <Text style={{fontSize:32,fontWeight:"bold"}}>Players</Text>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Player1 : {p1}</Text>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Player2 : {p2}</Text>
        </View>  
        :
        <View>
            <Text>Waiting for player...</Text>
        </View>
    }
    </View>
  )
}

export default Game

const styles = StyleSheet.create({})