import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Board } from '../Board';
import { userContext } from '../MyStack';
import LottieView from 'lottie-react-native';
import Sound from 'react-native-sound';

const diceSong = require('../assets/dicerolling.mp3');
const clickSong = require('../assets/click01.wav');
// const winbeep = require('../assets/winbeep.mp3');

const dicelist = [require("../assets/1.png"), require("../assets/2.png"), require("../assets/3.png"),
                 require("../assets/4.png"), require("../assets/5.png"), require("../assets/6.png")];

const OfflineGame = ({navigation}) => 
{
    const srng = useRef(1);

    const {name1,name2} = useContext(userContext);
    const [diceno,setDiceno] = useState(0);
    const [flag,setFlag] = useState(false);  
    const [place1,setPlace1] = useState(1);
    const [place2,setPlace2] = useState(1);
    const [snakeuser,setSnakeuser]  = useState(false);   
    const [handlesnakeladder,setHandleSnakeLadder] = useState(false);    
    const [diceflag,setDiceflag] = useState(true);

    Sound.setCategory('Playback');
    
    const dicesound = new Sound(diceSong , Sound.MAIN_BUNDLE);
    const clicksound = new Sound(clickSong , Sound.MAIN_BUNDLE);
    // const winsound = new Sound(winbeep , Sound.MAIN_BUNDLE);    

    const handleDice = () => 
    {
        const num = Math.floor(Math.random() * (6 - 1 + 1) + 1);       
        if(num===diceno)
        {
            handleDice();            
        }
        else
        {
            dicesound.play();    
            setDiceno(num);              
            setFlag(!flag);      
            setDiceflag(false);                
            setSnakeuser(!snakeuser);            
        }       
    } 

    const player1 = () =>
    {
        if(place1 === 7)
        {
            setPlace1(56);
        }
        else if(place1 === 12)
        {
            setPlace1(41);
        }
        else if(place1 === 37)
        {
            setPlace1(8);
        }
        else if(place1 === 29)
        {
            setPlace1(58);
        }
        else if(place1 === 23)
        {
            setPlace1(1);
        }
        else if(place1 === 50)
        {
            setPlace1(79);
        }
        else if(place1 === 54)
        {
            setPlace1(83);
        }
        else if(place1 === 75)
        {
            setPlace1(32);
        }
        else if(place1 === 94)
        {
            setPlace1(71);
        }
        else if(place1 === 96)
        {
            setPlace1(49);
        }
    }

    const player2 = () =>
    {
        if(place2 === 7)
        {
            setPlace2(56);
        }
        else if(place2 === 12)
        {
            setPlace2(41);
        }
        else if(place2 === 37)
        {
            setPlace2(8);
        }
        else if(place2 === 29)
        {
            setPlace2(58);
        }
        else if(place2 === 23)
        {
            setPlace2(1);
        }
        else if(place2 === 50)
        {
            setPlace2(79);
        }
        else if(place2 === 54)
        {
            setPlace2(83);
        }
        else if(place2 === 75)
        {
            setPlace2(32);
        }
        else if(place2 === 94)
        {
            setPlace2(71);
        }
        else if(place2 === 96)
        {
            setPlace2(49);
        }
    }

    const playerWin = (p) =>
    {
        // winsound.play();
        Alert.alert(
            'Winner',
            p+" Win ????",
            [
              {text: 'OK', onPress: () => {
                    navigation.navigate('OfflineMain');
                    return;
                }},
            ],
            {cancelable: false},
        );
        // console.log(p+" Win ????");
    }    

    (() => {
        if(place1 === 100)
        {
            playerWin(name1); 
        }
        else if(place2 === 100)
        {
            playerWin(name2);
        }
    })()

    useEffect(() =>
    {
        if(snakeuser)
        {
            player2();
        }
        else
        {
            player1();
        }
    },[handlesnakeladder])
    
    useEffect(() =>
    {   
        if(snakeuser)
        {   
            const interval = setInterval(() =>
            {
                if(srng.current === diceno+1)
                {
                    setHandleSnakeLadder(!handlesnakeladder)
                    srng.current = 1;
                    clicksound.stop();
                    clearInterval(interval);
                    setDiceflag(true);
                    return;
                }
                setPlace1(place1+srng.current);         
                clicksound.play(); 
                srng.current = srng.current+1;             
            },150)   
        }
        else
        {
            const interval = setInterval(() =>
            {   
                if(srng.current === diceno+1)
                {
                    setHandleSnakeLadder(!handlesnakeladder)
                    srng.current = 1;
                    clicksound.stop();
                    clearInterval(interval);
                    setDiceflag(true);
                    return;
                }
                setPlace2(place2+srng.current);         
                clicksound.play();                                          
                srng.current = srng.current+1;             
            },150)   
        }
    },[flag]);

  return (
    <View style={{backgroundColor:"#ebfaf8",height:"100%", alignItems:'center'  }}>  
        <View style={styles.ppdetails}>
            <View style={styles.pdetails}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Score Board</Text>
                <View style={{flexDirection:'row'}}>           
                    <Text style={{fontSize:14,fontWeight:"bold",color:'red'}}>{`${name1}  : ${place1}`}</Text>                    
                </View>                
                <View style={{flexDirection:'row'}}>                     
                    <Text style={{fontSize:14,fontWeight:"bold",color:'#3e7ee6'}}>{`${name2}  : ${place2}`}</Text>                                    
                </View>                
            </View>  
        </View>
        {/* <></> */}
        <View style={{marginTop:20}}>                
                <Board pl1={place1} pl2={place2}/>
        </View>

            <View style={styles.line}>
            </View>
            
            <View style={ styles.diceparent }>                 
            </View>
        {/* <></> */}
        <View style={ styles.diceparent2 }>  
        {diceflag ?
            <TouchableOpacity style={styles.button} onPress={handleDice} >
                        <ImageBackground
                            source={ diceno === 0 ? dicelist[1] : dicelist[diceno - 1] }                                
                            style={styles.img} />           
            </TouchableOpacity>
        :
            <View style={styles.button} >
                <ImageBackground
                    source={ diceno === 0 ? dicelist[1] : dicelist[diceno - 1] }                                
                    style={styles.img} />           
                                
                <LottieView
                    style={styles.bgsping}
                    source={require('../assets/spin.json')}
                    autoPlay 
                    duration={1200}
                    loop />                                        
            </View>
        }
        </View>
        <View style={styles.playername}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>
                {flag? `${name2}'s turn` : `${name1}'s turn`}
            </Text>
        </View>
    </View>
  )
}

export default OfflineGame

const styles = StyleSheet.create({
    img:
    {
      height: "100%",
      width: "100%",
      borderRadius: 6,
    },
    pdetails:
    {
        alignItems:"center",        
        paddingTop:10,
        borderWidth:2,        
        width: 'auto',
        height: 100,
        borderColor:'red',
        padding: 7,
        backgroundColor:"#ebfaf8"        
    },
    ppdetails:
    {        
        borderWidth:3,
        marginTop:15,        
        padding:2,
        width: "auto",        
        marginBottom:5,
        backgroundColor:"#7cadfc"
    },
    button: 
    {
        alignItems: "center",
        backgroundColor: "grey",
        width:100,
        height:100,
        borderRadius: 13
    },
    line :
    {
        marginTop:75,
        borderWidth:4,
        width: "100%",      
        height: 310,
        width: 330,
        borderRadius:190,                      
        backgroundColor:"#b9eefa",        
        borderColor:"#a7ebfa"        ,
    },
    diceparentwait:
    {
        alignItems: "center",             
        paddingTop:50
    },
    diceparent:
    {        
        alignItems: "center",        
        borderWidth:2,                
        width: '100%',
        height: "100%",        
        position: 'absolute',
        top: 630,
        borderColor:"#b9eefa",        
        backgroundColor:"#b9eefa",        
    },
    diceparent2:
    {        
        alignItems: "center",         
        position: 'absolute',        
        top: 560,
    },
    playername:
    {
        alignItems: "center",                        
        position: 'absolute',        
        top: 670,
    },
    bgsping : 
    {
        alignItems: "center",
        width:80,
        height:80,                
        position: 'absolute',
        top:5,
    }

    
})