import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button } from 'react-native-elements'
import { userContext } from '../MyStack'
import { Formik } from 'formik'



const OfflineMain = ({navigation}) => {

    
    const {name1,name2,setName1,setName2} = useContext(userContext);

    console.log(name1,name2)

//   return (
//     <View style={{padding:30,paddingTop:150}}>
        
//         <TextInput
//             style={styles.input}
//             onChangeText={(e) => setName1(e) }        
//             placeholder="Enter Player1 Name :"                        
//         />

//         <TextInput
//             style={styles.input}
//             onChangeText={(e) => setName2(e) }        
//             placeholder="Enter Player2 Name :"            
//         />

//         <View style={styles.bottom1}>                
//             <Button                         
//                 title="Start Game"                        
//                 type="clear"                                 
//                 onPress={() => navigation.navigate("OfflineGame")}
//                 titleStyle={{color:"#00a827"}}
//             />
//         </View>
//     </View>
    
//   )

    return (
        <Formik>
            <View>
                <Text>Username</Text>
                <TextInput style={styles.ikinput}/>
                <Text>Password</Text>
                <TextInput style={styles.iknput}/>
                <Button title="Submit"/>
            </View>
        </Formik>
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
  }
})