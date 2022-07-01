import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Board } from '../Board';
import { userContext } from '../MyStack';

const dicelist = [require("../assets/1.png"), require("../assets/2.png"), require("../assets/3.png"),
                  require("../assets/4.png"), require("../assets/5.png"), require("../assets/6.png")];

const OfflineGame = () => {

    const {p1,setP1,p2,setP2,name1,name2} = useContext(userContext);
    
    const diceno = 5



  return (
    <View style={{backgroundColor:"#ebfaf8",height:"100%", alignItems:'center'  }}>  
        <View style={styles.ppdetails}>
            <View style={styles.pdetails}>          
                    <Text style={{fontSize:22,fontWeight:"bold"}}>Score Board</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>{`${name1} 😈 : ${p1}`}</Text>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>{`${name2} 🎅 : ${p2}`}</Text>                
            </View>  
        </View>
        {/* <></> */}
        <View style={{marginTop:20}}>
                <Board pl1={p1} pl2={p2}/>
            </View>

            <View style={styles.line}>
            </View>
            
            <View style={ styles.diceparent }>                 
            </View>
        {/* <></> */}
        <View style={ styles.diceparent2 }>  
            <TouchableOpacity
                    style={styles.button}
                        onPress={() => console.log("Handle Dice Srng")} 
                        >
                        <ImageBackground
                            source={
                                diceno === 0 ?
                                    dicelist[1]
                                    :
                                    dicelist[diceno - 1]
                            }                                
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

export default OfflineGame

const styles = StyleSheet.create({
    pdetails:
    {
        alignItems:"center",        
        paddingTop:10,
        borderWidth:2,        
        width: "auto",
        height: 100,
        borderColor:'red',

        padding: 7,
    },
    ppdetails:
    {        
        borderWidth:3,
        marginTop:15,        
        padding:2,
        width: "auto",        
        marginBottom:5,
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
        marginTop:25,
        borderWidth:4,
        width: "100%",       

        height: 310,
        width: 330,
        borderRadius:190,        

        borderColor:'#b9eefa',
        backgroundColor:"#b9eefa",        
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

        borderColor:'#b9eefa',
        backgroundColor:"#b9eefa",        
    },
    diceparent2:
    {        
        alignItems: "center",        
                  
        position: 'absolute',
        top: 580,
    },
})