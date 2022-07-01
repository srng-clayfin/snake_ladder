import React, {useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const blockwidth = windowWidth-20

export const Block = (p) =>
{
      let user = 1;     

    return(
            <>
                <View style={styles.parent}>                   
                   {         
                    p.value === p.place1 && p.value === p.place2 ?                                        
                    <View style={styles.child1}>                        
                        <MaterialCommunityIcons name='emoticon-devil'  
                                color={'blue'} 
                                size={15}
                        />
                        <MaterialCommunityIcons name='emoticon-devil'  
                            color={'red'} 
                            size={15}
                        />            
                    </View>
                        :
                    p.value === p.place1 ?                
                    <View style={styles.child}>                        
                        <MaterialCommunityIcons name='emoticon-devil'  
                            color={'red'} 
                            size={20}
                        />            
                    </View>
                        :                    
                    p.value === p.place2 ?                
                    <View style={styles.child}>                        
                        <MaterialCommunityIcons name='emoticon-devil'  
                                color={'blue'} 
                                size={20}
                        />
                    </View>
                        :                      
                    <Text style={styles.child0}>
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
    child0:{
        textAlign: 'center',
        marginTop: 6,
        fontWeight: 'normal',        
    },
    child1:{            
        alignItems:'center',        
    } ,
    child:
    {
        alignItems:'center',
        paddingTop:"25%",        
    }   
 })