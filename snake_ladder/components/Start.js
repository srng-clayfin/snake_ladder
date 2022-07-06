import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';
const snake1 = require("./assets/snake.png");

const Start = ({navigation}) => 
{

  //completed 


  return (
    <View style={styles.parent}>
              
        <TouchableOpacity
            style={styles.topacity}
            onPress={() => {
              navigation.navigate('Join1');              
            }}
          >
                <Text style={styles.text}>Create Joining Code ... </Text>
        </TouchableOpacity>  

        <TouchableOpacity
            style={styles.topacity1}
            onPress={() => {
              navigation.navigate('Receive1');              
            }}
          >
                <Text style={styles.text}>Enter Joining Code... </Text>
        </TouchableOpacity>  

        <View  style={styles.imgview}>
            <Image
              style={styles.tinyLogo}    
              source={snake1}
            />
        </View>
    </View>
  )
}

export default Start

const styles = StyleSheet.create(
  {
    parent:
    {
      padding:30,
      paddingTop:100,
      backgroundColor:"#ebfaf8",
      height:"100%"
    },
    topacity : 
    {
      marginTop:100,
      borderWidth:2,    
      borderBottomLeftRadius:35,
      borderBottomRightRadius:35,    
      borderColor:"#0488c9",
      backgroundColor: "#c9edff",
      alignItems:'center',
      justifyContent:'center',    
      height:45,    
      borderRadius:150,
    },
    topacity1 : 
    {
      borderWidth:2,
      marginTop:"35%",
      borderTopStartRadius:35,
      borderTopEndRadius:35, 
      borderColor:"#0488c9",
      backgroundColor: "#c9edff",
      alignItems:'center',
      justifyContent:'center',    
      height:45,    
      borderRadius:150,
    },
    text :
    {
      fontSize:18,
      fontWeight:"bold",
      color: "#0488c9",
    },
    tinyLogo: 
    {
      width: "100%",
      height: "100%",
      resizeMode:'center'
    },    
    imgview:
    {
      height:100,
      width: 80,
      position: 'absolute', 
      top:273,
      left:150,
    }
})