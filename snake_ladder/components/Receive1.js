import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { userContext } from './MyStack';
import axios from 'axios';


const Receive1 = ({navigation}) => 
{    
        const {p1,setP1,p2,setP2,pid,setPid} = useContext(userContext) ;
        const [jno,setJno] = useState();  

        const [flag,setFlag] = useState(false)  ;   

        
        const checkData = () =>
        { 
                axios({
                    method: 'get',
                    url: 'http://srngjson.herokuapp.com/products/'+jno,
                }).then((response) => {
                    // console.log(response.data.player1);
                    if(response.data.player1)
                    {
                        setFlag(true);
                        setPid(jno)
                    }
                    else if(!response.data.player2)
                    {
                        Alert.alert("INvalid Code");
                    }
                });
        }

        const startGame = () =>
        {   
            
            
            navigation.navigate('Game')
        }



          

    



    // console.log(jno)

  return (
    <View>
        <View><Text>Receive1</Text></View>
        <View><Text>{p1}</Text></View>      
      
        <TextInput
            style={styles.input}
            onChangeText={(e) => setJno(e) }        
            placeholder="Enter Joining code"
            keyboardType="numeric"
        />
        {!flag ? 
            <Button
                title="Check Joining "            
                onPress={() => checkData()}
            />    
        :    
            <Button
                title="Start Game"   
                color="#f194ff"         
                onPress={startGame}
            />
        }
    </View>
  )
}

export default Receive1

const styles = StyleSheet.create({ input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})