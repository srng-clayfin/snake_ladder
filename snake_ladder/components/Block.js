import React, {useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const blockwidth = windowWidth-20

export const Block = (p) =>
{
      let user = 1;     
      
      const user1 = "😈";
      const user2 = "🎅";


    return(
            <>
                <View style={styles.parent}>                   
                   {         
                    p.value === p.place1 && p.value === p.place2 ?
                    <Text style={styles.child1}>
                        {user1+user2}
                    </Text>
                        :
                    p.value === p.place1 ?                
                    <Text style={styles.child}>
                        {user1}
                    </Text>
                        :                    
                    p.value === p.place2 ?                
                    <Text style={styles.child}>
                        {user2}
                    </Text>
                        :                      
                    <Text style={styles.child}>
                       {p.value}
                    </Text>
                   }                 
                </View>
            </>
    )
}

const styles = StyleSheet.create ({
    parent:{
            height:(blockwidth/10)-1,
            width: (blockwidth/10)-1,
            borderWidth:1
        },
    child:{
            textAlign: 'center',
            marginTop: 6,
            fontWeight: 'normal',
        },
        child1:{
            textAlign: 'center',  
        }    
 })