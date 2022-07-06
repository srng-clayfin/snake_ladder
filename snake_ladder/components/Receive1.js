import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { userContext } from './MyStack';
import axios from 'axios';
import { Button } from 'react-native-elements';


const Receive1 = ({navigation}) => 
{    
        const {p1,setP1,p2,setP2,pid,setPid} = useContext(userContext) ;
        const [jno,setJno] = useState();          
        const [udata,setUdata]  = useState({});

        const [flag,setFlag] = useState(false)  ;   

        
        const checkData = () =>
        { 
                axios({
                    method: 'get',
                    url: 'https://fakeserversarang.herokuapp.com/player/'+jno,
                }).then((response) => {
                    // console.log(response.data);
                    // setFlag(true);
                    //     setUdata(response.data);
                    //     setPid(jno)

                    if(response.data.player1)
                    {
                        setFlag(true);
                        setUdata(response.data);
                        setPid(jno)
                        // console.log(udata);
                    }
                    // else if(!response.data.player2)
                    // {
                    //     Alert.alert("Invalid Code");
                    // }
                });               
        }

        const startGame = async () =>
        {   
            await axios.patch(`https://fakeserversarang.herokuapp.com/player/${jno}`,
            {                
                "player2" : 1,                
            }); 

            navigation.navigate('Game')
        }

  return (
    <View style={{backgroundColor:"#ebfaf8",height:"100%",padding:20}}>  
        <View style={{alignItems:'center'}}><Text style={{fontSize:20,fontWeight:"bold",marginTop:40}}>Enter Code...</Text></View>          
      
        <TextInput
            style={styles.input}
            onChangeText={(e) => setJno(e) }        
            placeholder="Enter Joining code"
            keyboardType="numeric"
        />

        {!flag ? 
                <TouchableOpacity
                    style={styles.topacity}
                    onPress={() => checkData()} >
                    <Text style={styles.text}>Enter Joining Code...</Text>
                </TouchableOpacity>  

        :    
                <TouchableOpacity
                    style={styles.topacity1}
                    onPress={startGame} >
                    <Text style={styles.text1}>Start Game</Text>
                </TouchableOpacity>  
        }
    </View>
  )
}

export default Receive1

const styles = StyleSheet.create({ 
    input: {
        height: 50,
        marginBottom:7,
        marginTop:50,                
        borderBottomWidth:3,
        paddingLeft: 10,        
    },
    topacity:
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
    topacity1 : 
    {
        borderWidth:2,
        height : 90,      
        borderTopStartRadius:35,
        borderTopEndRadius:35, 
        borderColor: "#00a827",
        backgroundColor: "#d0f7d9",            
        alignItems:'center',
        justifyContent:'center',            
        borderRadius:150,
    },       
    text1 :
    {
      fontSize:18,
      fontWeight:"bold",
      color: "#00a827",
    },   
    text :
    {
      fontSize:18,
      fontWeight:"bold",
      color: "#0488c9",
    },    
})