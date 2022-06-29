import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
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
                <View style={styles.bottom}>                
                    <Button
                        title="Enter Joining Code... "
                        type="clear"
                        onPress={() => checkData()}
                      />
                </View>
        :    
                <View style={styles.bottom1}>                
                    <Button                         
                        title="Start Game"                        
                        type="clear"                                 
                        onPress={startGame}

                        titleStyle={{color:"#00a827"}}

                    />
           
                </View>
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
    bottom : 
    {
      borderWidth:2,
      height : 90,
      borderColor:"#0488c9",
      borderBottomLeftRadius:60,
      borderBottomRightRadius:60,
      backgroundColor: "#c9edff",      
      paddingTop:20
   },
   bottom1 : 
    {
      borderWidth:2,
      height : 90,
      borderColor: "#00a827",
      borderBottomLeftRadius:60,
      borderBottomRightRadius:60,
      backgroundColor: "#d0f7d9",      
      paddingTop:20
   },
})