import { ImageBackground, TouchableOpacity, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { userContext } from './MyStack';
import { Board } from './Board';
const image = require('./assets/score-bkgimg.png');

const dicelist = [require("./assets/1.png"), require("./assets/2.png"), require("./assets/3.png"),
                  require("./assets/4.png"), require("./assets/5.png"), require("./assets/6.png")];

const Game = () => 
{     
    // const [flag,setFlag] = useState(false);

    // const {p1,setP1,p2,setP2,pid,user1,setUser1} = useContext(userContext);      
    // const [diceno, setDiceno] = useState(0);          

    const p1 = 0;
    const p2 = 0;
    const diceno = 1;

    const [plyr1,setPlyr1] = useState(1);
    const [plyr2,setPlyr2] = useState(1);


    // // const getData = () =>
    // // {
    // //     axios({
    // //         method: 'get',
    // //         url: `https://fakeserversarang.herokuapp.com/player/${pid}`,
    // //     }).then((response) => {       
    // //         const pdata = response.data;                               
    // //         setP1(pdata.player1);
    // //         setP2(pdata.player2);                               
    //         // setPlyr1(pdata.player1);
    //         // setPlyr2(pdata.player2);
    // //         // console.log("Player No. : ",p1,p2,"Srng  : ",pdata.player1,pdata.player1)
    // //     });        
    // //     if(p1>0 && p2>0)
    // //     {
    // //         setFlag(true)                             
    // //     }
    // // }    
    // // useEffect(() =>
    // // {
    // //     getData()
    // // })    
    // // useEffect(() =>
    // // {
    // //     getData()
    // // },[])    
    // // useEffect(() =>
    // // {
    // //     getData()
    // // },[p1,p2])
        
    //     setInterval( () =>
    //     {
    //         axios({
    //             method: 'get',
    //             url: `https://fakeserversarang.herokuapp.com/player/${pid}`,
    //         }).then((response) => {       
    //             const pdata = response.data;                               
    //             setP1(pdata.player1);
    //             setP2(pdata.player2);  
    //             setPlyr1(pdata.player1);
    //             setPlyr2(pdata.player2);                             
    //         });
    //         if(p1>0 && p2>0)
    //         {
    //             setFlag(true)                             
    //         }
    //     }, 2500);        

 
    // const handleDice = () =>
    // {
    //     const count = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    //     if(diceno == count)
    //     {
    //         handleDice()
    //     }
    //     else
    //     {
    //         setDiceno(count);
    //     }         
    //     handleuser(diceno)
    // }
    
    // const handleuser = (dno) =>
    // {
    //     if(user1)
    //     {            
    //         const updatePlayer = async () => {
    //             const { data } = await axios.patch(`https://fakeserversarang.herokuapp.com/player/${pid}`,
    //             {
    //                 "player1": p1+dno,
    //                 // "player2": p2,
    //                 // "id": pid
    //             });            
    //             return data;
    //         }
    //         updatePlayer()            
    //     }
    //     else
    //     {
    //         const updatePlayer = async () => {
    //             const { data } = await axios.patch(`https://fakeserversarang.herokuapp.com/player/${pid}`,
    //             {
    //                 // "player1": p1,
    //                 "player2": p2+dno,
    //                 // "id": pid
    //             });
    //             return data;
    //         }            
    //         updatePlayer()
    //     }        

    // }


return (
    <View style={{backgroundColor:"#ebfaf8",height:"100%", alignItems:'center',
    marginTop:60
    }}>  
        {/* {flag ? */}
        <View style={styles.ppdetails}>
            <View style={styles.pdetails}>          
                    <Text style={{fontSize:22,fontWeight:"bold"}}>Point's</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Player1 : {p1}</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Player2 : {p2}</Text>                
            </View>  
        </View>

            {/* :
            <View  style={ styles.diceparent }>  
                <Text style={{fontSize:25,fontWeight:"bold",marginTop:15,marginBottom:20}}>Waiting for player...</Text>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        }        

        {flag ?  */}

        <>
            <View style={{marginTop:20}}>
                <Board pl1={plyr1} pl2={plyr2}/>
            </View>

            <View style={styles.line}>
            </View>
            
            <View style={ styles.diceparent }>                 
            </View>

            {/* <View style={ styles.diceparent2 }>  
                <TouchableOpacity
                        style={styles.button}
                            // onPress={handleDice} 
                            >
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
            </View> */}

    </>
        {/* : 
        null

        } */}
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
    line :
    {
        marginTop:55,
        borderWidth:4,
        width: "100%",       

        height: 310,
        width: 330,
        borderRadius:190,        

        borderColor:'red',
        backgroundColor:"red",
    },
    diceparent:
    {        
        alignItems: "center",        
        borderWidth:2,        
        borderColor:'red',
        width: '100%',
        height: "100%",        

        position: 'absolute',
        top: 650,

        backgroundColor:"red",
    },
    diceparent2:
    {        
        alignItems: "center",        
        borderWidth:2,        
        borderColor:'green',        
    },
    waiting :
    {
        gap:100
    },
    pdetails:
    {
        alignItems:"center",
        paddingTop:10,
        borderWidth:2,        
        width: 130,
        height: 100,
        borderColor:'red',
    },
    ppdetails:
    {
        borderWidth:3,
        marginTop:5,        
        padding:2,
        width: 140,        
        marginBottom:5,
    }

});


