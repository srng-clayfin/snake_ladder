import React from 'react';  
import { View, Text, StyleSheet, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';

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
                        <LottieView
                            style={{ width:20, height:40,bottom:6,right:6}}
                            source={require('./assets/blue.json')}
                            autoPlay 
                            duration={1000}
                            loop                        
                        />
                        <LottieView
                            style={{ width:20, height:40,bottom:2,right:6}}
                            source={require('./assets/red.json')}
                            autoPlay 
                            duration={1000}
                            loop                        
                        />
                    </View>
                        :
                    p.value === p.place1 ?                
                    <View style={styles.child}>                                                
                        <LottieView
                            style={{ width:45, height:45, bottom:6, right:3}}
                            source={require('./assets/red.json')}
                            autoPlay 
                            duration={1000}
                           loop                        
                        />
                    </View>
                        :                    
                    p.value === p.place2 ?                
                    <View style={styles.child}>                                                               
                            <LottieView
                                style={{ width:45, height:45, bottom:6, right:3}}
                                source={require('./assets/blue.json')}
                                autoPlay 
                                duration={1000}
                                loop                        
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
        position: 'absolute',   
        flexDirection:'row',     
    } ,
    child:
    {
        alignItems:'center',               
        position: 'absolute',           
    },
    innerchild: 
    {
        // Nothing
    }

 })