import { ImageBackground, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userContext } from './MyStack'
import { Board } from './Board'

const dicelist = [require("./assets/1.png"), require("./assets/2.png"), require("./assets/3.png"),
    require("./assets/4.png"), require("./assets/5.png"), require("./assets/6.png")]

const Game = () => 
{     
    // const {p1,setP1,p2,setP2,pid,setPid,
    //     user1,setUser1} = useContext(userContext) ;
    
    const [flag,setFlag] = useState(false);
    const [diceno, setDiceno] = useState(5);

    //     var refreshId = setInterval(function() 
    //     {
    //         axios({
    //             method: 'get',
    //             url: `https://srngjson.herokuapp.com/products/${pid}`,
    //         }).then((response) => {       
    //             const pdata = response.data;                               
    //             setP1(pdata.player1);
    //             setP2(pdata.player2);                
    //         });
    //         if(p1>0 && p2>0)
    //         {
    //             setFlag(true)
    //             clearInterval(refreshId);
    //         }
    //     }, 3000);


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
    }


return (
    <View style={{marginTop:20}}>
        {flag ?
            <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Players</Text>
                <Text style={{fontSize:12,fontWeight:"bold"}}>Player1 : {p1}</Text>
                <Text style={{fontSize:12,fontWeight:"bold"}}>Player2 : {p2}</Text>
            </View>  
            :
            <View>
                <Text>Waiting for player...</Text>
            </View>
        }        

        <View style={{marginTop:20}}>
            <Board />
        </View>

        {/* <View style={{marginTop:20}}>

        </View> */}
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
    }
});