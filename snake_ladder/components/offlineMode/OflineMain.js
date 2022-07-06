import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext} from 'react'
import { userContext } from '../MyStack'




const OfflineMain = ({navigation}) => {

    
    const {name1,name2,setName1,setName2} = useContext(userContext);   

    const handlesubmit = () =>
    {
        if (name1.trim() != ""  && name2.trim() != "") 
        {
            navigation.navigate("OfflineGame");
        }
        else 
        {
            Alert.alert("Error","Please Enter Player's Name... :) ");            
        }     
    }

  return (
    <View style={{padding:30,paddingTop:150}}>
        
        <TextInput
            style={styles.input}
            onChangeText={(e) => setName1(e) }        
            placeholder="Enter Player1 Name :"                        
        />

        <TextInput
            style={styles.input}
            onChangeText={(e) => setName2(e) }        
            placeholder="Enter Player2 Name :"            
        />
        
        <TouchableOpacity
            style={styles.topacity1}
            onPress={handlesubmit} >
            <Text style={styles.text1}>Start Game</Text>
        </TouchableOpacity>  
    </View>
    
  )

}

export default OfflineMain

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginBottom:7,
        marginTop:10,                
        borderBottomWidth:3,
        paddingLeft: 10,        
    },
    bottom1 : 
    {
        borderWidth:2,
        height : 90,
        borderColor: "#00a827",
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
        backgroundColor: "#d0f7d9",      
        paddingTop:20,
        marginTop:10
   },
   ikinput: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  topacity1 : 
    {
        borderWidth:2,
        height : 90,      
        borderTopStartRadius:35,
        borderTopEndRadius:35, 
        borderColor: "#00a827",
        backgroundColor: "#d0f7d9",            
        alignItems:'center',
        justifyContent:'center',            
        borderRadius:150,
    },       
    text1 :
    {
      fontSize:18,
      fontWeight:"bold",
      color: "#00a827",
    },   
})