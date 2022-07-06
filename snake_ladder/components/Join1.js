import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from './MyStack'


const Join1 = ({navigation}) => 
{   
    const {p1,setP1,p2,setP2,pid,setPid,user1,setUser1} = useContext(userContext) 

    const [rno,setRno] = useState(0);

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
        setPid(no);
        setRno(no);        
        createData(no);
    },[])

  return (
    <View style={{backgroundColor:"#ebfaf8",height:"100%",padding:20}}>  

        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:22,fontWeight:"bold",marginTop:70}}>
                Send This Code To Your Friend
            </Text>
        </View>          
      
        <View style={styles.code}>
            <Text style={{fontWeight:"bold",fontSize:24}}>{rno}</Text>
        </View>       

        <TouchableOpacity
            style={styles.topacity1}
            onPress={() => {
              navigation.navigate('Game');              
            }}
          >
                <Text style={styles.text}>Start Game</Text>
        </TouchableOpacity>  
    </View>

  )
}

export default Join1

const styles = StyleSheet.create({
    code:{              
        height : 50,                
        marginBottom:7,
        paddingLeft:"35%",
        justifyContent:'center',
        marginTop:40,
        borderBottomWidth:2        
    },
   topacity1 : 
    {
        borderWidth:2,
        height : 90,
        borderColor:"#0488c9",
        borderTopStartRadius:35,
        borderTopEndRadius:35, 
        backgroundColor: "#c9edff",              
        alignItems:'center',
        justifyContent:'center',            
        borderRadius:150,
    },
    text :
    {
      fontSize:18,
      fontWeight:"bold",
      color: "#0488c9",
    },
})
