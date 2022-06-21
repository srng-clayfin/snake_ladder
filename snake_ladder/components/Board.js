import React, {useState } from 'react'
import { StyleSheet, ImageBackground, Dimensions, View } from 'react-native';
import { Block } from "./Block";

const windowWidth = Dimensions.get('window').width;
//const image = require('../assets/snake1.jpeg');
const image = require('./assets/snake-imp.jpg');

export const Board = () =>
{


    return(

        <View style={styles.container}>                     
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    padding: 2,
                }}>
                    
                    {
                        [...Array(100)].map((el, i) =>
                            <View key={i}>
                                <Block value={100-i} place1={1}/>
                            </View>
                        )
                    }

                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: windowWidth-20,
        width : windowWidth-20,
      borderWidth:3,
      borderColor:"red",
      marginLeft:"2.5%"

    },
    image: {
        height: windowWidth - 25,
        width: windowWidth - 25,

    },
    
});