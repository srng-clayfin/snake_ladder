import React, {useState } from 'react'
import { StyleSheet, ImageBackground, Dimensions, View } from 'react-native';
import { Block } from "./Block";

const windowWidth = Dimensions.get('window').width;
//const image = require('../assets/snake1.jpeg');
const image = require('./assets/snake-imp.jpg');

export const Board = (p) =>
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
                                <Block value={100-i} place1={p.pl1} place2={p.pl2} />
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
      borderWidth:2,
      borderColor:"red", 
    },
    image: {
        height: windowWidth - 25,
        width: windowWidth - 25,
    },
    
});