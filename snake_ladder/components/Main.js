import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native';

const Main = ({navigation}) => 
{

  const [flag,setFlag] = useState(false);

  return (
    <View style={styles.parent}>
      
      {!flag ?
        <View style={styles.background}>
          <LottieView
            style={{ width: 300, height: 300, }}
            source={require('./assets/79535-snake-ladders-game.json')}
            autoPlay loop={false}
            onAnimationFinish={() => setFlag(!flag)} 
            />
        </View>

      :

        <TouchableOpacity
          style={styles.topacity}
          onPress={() => navigation.navigate('Start')}
        >
            <Text style={styles.text}>Start Game</Text>
        </TouchableOpacity>       

      }

    </View>
  )
}

export default Main

const styles = StyleSheet.create({  
  parent : 
  {
    paddingTop:170,
    height: "100%",
    backgroundColor:"#ebfaf8",
  },
  background: {
    width: '100%',
    height: '100%',        
    alignItems: "center",   
    marginLeft:"5%" 
  },
  logo: {
    width: 100,
    height: 150,
  },

  topacity : 
  {
    borderWidth:2,
    marginLeft:100,
    borderColor:'#ff2929',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,
    backgroundColor:'#ffc8bf',
    borderRadius:150,
  },
  text :
  {
    fontSize:22,
    fontWeight:"bold",
    color: "#ff2929",
  }
})