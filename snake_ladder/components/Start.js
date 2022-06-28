import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';
const snake1 = require("./assets/snake.png");

const Start = ({navigation}) => 
{

  //completed 


  return (
    <View style={{padding:30,backgroundColor:"#ebfaf8",height:"100%"}}>
        <View style={styles.top}>
              <Button
                    title="Create Joining Code ... "            
                    type="clear"
                    onPress={() => navigation.navigate('Join1')}
              />
        </View>        
        <View style={styles.bottom}>                
                  <Button
                    title="Enter Joining Code... "
                    type="clear"
                    onPress={() => navigation.navigate('Receive1')}
                  />
        </View>
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

const styles = StyleSheet.create({
  
  top:
  {
    marginTop:100,
    borderWidth:2,
    borderColor:"#0488c9",
    borderTopStartRadius:35,
    borderTopEndRadius:35, 
    backgroundColor: "#c9edff",
  } ,
  middle : 
  {
    height: "15%",    
    width: "4%", 
    marginLeft:"49%",       
    borderWidth:1,
    borderColor:"#0488c9",
    backgroundColor: "#c9edff",
  },
  bottom : 
  {
    borderWidth:2,
    marginTop:"35%",
    borderColor:"#0488c9",
    borderBottomLeftRadius:35,
    borderBottomRightRadius:35,
    backgroundColor: "#c9edff",
    
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
    top:200,
    left:150,
  }
})