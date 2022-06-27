import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from './MyStack'


const Join1 = ({navigation}) => 
{   
    const {p1,setP1,p2,setP2,pid,setPid,
        user1,setUser1} = useContext(userContext) 

    const [rno,setRno] = useState(0)  ;

    const createData = async (no) => {        
        try {
        const response = await axios.post(`https://fakeserversarang.herokuapp.com/player`, 
        {
            "player1":1,  
            "id" : no
        });
        if (response.status === 201) {
            console.log(` You have created: ${JSON.stringify(response.data)}`);
        
        } else {
            throw new Error("An error has occurred");
        }
        } catch (error) {
            console.log("Error : ",error)
        }
    }

    useEffect(() => 
    {
        const no = Math.floor((Math.random()*10000000)+1);
        setPid(no)
        setRno(no);
        createData(no);
    },[])
  


  return (
    <View style={{backgroundColor:"#ebfaf8",height:"100%"}}>        
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:24}}>Send this code to your friend</Text>
            <Text style={{fontWeight:"bold",fontSize:24}}>{rno}</Text>
        </View>
        <Button
            title="Send This Code & Start Game"
            color="#f194ff"
            onPress={() => 
                {
                    setUser1(true)
                    navigation.navigate('Game')
                }}
        />
    </View>
  )
}

export default Join1

const styles = StyleSheet.create({})