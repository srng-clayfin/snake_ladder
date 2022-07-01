import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';
const snake1 = require("../assets/snake.png");

const Offline = ({navigation}) => 
{

  //completed 

  return (
    <View style={{padding:30,backgroundColor:"#ebfaf8",height:"100%"}}>
        <View style={styles.top}>
            <Button
                  title="Online Mode"            
                  type="clear"
                  titleStyle={{color:"#00a827"}}
                  onPress={() => navigation.navigate('Start')}
            />
        </View>        
        <View style={styles.bottom}>                
            <Button
              title="Offline Mode"
              type="clear"
              titleStyle={{color:"#00a827"}}
              onPress={() => navigation.navigate('OfflineMain')}
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

export default Offline

const styles = StyleSheet.create({
  
  top:
  {
    marginTop:100,
    borderWidth:2,    
    borderTopStartRadius:35,
    borderTopEndRadius:35, 
    borderColor: "#00a827",
    backgroundColor: "#d0f7d9",      
  } ,  
  bottom : 
  {
    borderWidth:2,
    marginTop:"35%",
    borderBottomLeftRadius:35,
    borderBottomRightRadius:35,
    borderColor: "#00a827",
    backgroundColor: "#d0f7d9",      
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