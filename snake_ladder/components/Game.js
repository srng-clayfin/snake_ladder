import { ImageBackground, TouchableOpacity, StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from './MyStack'
import { Board } from './Board'

const dicelist = [require("./assets/1.png"), require("./assets/2.png"), require("./assets/3.png"),
    require("./assets/4.png"), require("./assets/5.png"), require("./assets/6.png")]

const Game = () => 
{     
    const [flag,setFlag] = useState(false);

    const {p1,setP1,p2,setP2,pid,user1,setUser1} = useContext(userContext);      
    const [diceno, setDiceno] = useState(0);  

    const getData = () =>
    {
        axios({
            method: 'get',
            url: `https://fakeserversarang.herokuapp.com/player/${pid}`,
        }).then((response) => {       
            const pdata = response.data;                               
            setP1(pdata.player1);
            setP2(pdata.player2);                               
        });
        if(p1>0 && p2>0)
        {
            setFlag(true)                             
        }
    }

    useEffect(() =>
    {
        getData()
    },[])

        
        // setInterval( () =>
        // {
        //     axios({
        //         method: 'get',
        //         url: `https://fakeserversarang.herokuapp.com/player/${pid}`,
        //     }).then((response) => {       
        //         const pdata = response.data;                               
        //         setP1(pdata.player1);
        //         setP2(pdata.player2);                               
        //     });
        //     if(p1>0 && p2>0)
        //     {
        //         setFlag(true)                             
        //     }
        // }, 1000);  
    

    }

 
    const handleDice = () =>
    {
        const count = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        if(diceno == count)
        {
            handleDice()
        }
        else
        {
            setDiceno(count);
        }         
        handleuser(diceno)
    }
    
    const handleuser = (dno) =>
    {
        if(user1)
        {            
            const updatePlayer = async () => {
                const { data } = await axios.patch(`https://fakeserversarang.herokuapp.com/player/${pid}`,
                {
                    "player1": p1+dno,
                    "player2": p2,
                    "id": pid
                });            
            }
            updatePlayer();        
            // getData();
        }
        else
        {
            const updatePlayer = async () => {
                const { data } = await axios.patch(`https://fakeserversarang.herokuapp.com/player/${pid}`,
                {
                    "player1": p1,
                    "player2": p2+dno,
                    "id": pid
                });

            }
            updatePlayer();
            // getData();
        }        
    }


return (
    <View style={{marginTop:20}}>
        {flag ?
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Players</Text>
                <Text style={{fontSize:12,fontWeight:"bold"}}>Player1 : {p1}</Text>
                <Text style={{fontSize:12,fontWeight:"bold"}}>Player2 : {p2}</Text>
            </View>  
            :
            <View  style={ styles.diceparent }>  
                <Text style={{fontSize:25,fontWeight:"bold",marginTop:15,marginBottom:20}}>Waiting for player...</Text>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        }        

        <View style={{marginTop:20}}>
            <Board pl1={p1} pl2={p2}/>
        </View>

        <View style={{marginTop:20}}>
        </View>
        
        <View style={ styles.diceparent }>  
          <TouchableOpacity
                style={styles.button}
                    onPress={handleDice} >

                    <ImageBackground
                        source={
                            diceno === 0 ?
                                dicelist[1]
                                :
                                dicelist[diceno - 1]
                        }
                        // source={diceImg}
                        style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 6,
                        }}
                />           
            </TouchableOpacity>
        </View>


    </View>
  )
}

export default Game

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "grey",
        width:100,
        height:100,
        borderRadius: 13
    },
    diceparent:
    {
        marginTop:10,
        alignItems: "center",        
    },
    waiting :
    {
        gap:100
    }
});