import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';
import  Colors  from '../constants/color';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/success.jpeg')} 
                    resizeMode="cover"
                />
            </View>
            <Text>Your phone needed {props.roundsNumber} rounds to</Text>
            <Text>guess the number {props.userNumber}</Text>
            <View style={styles.button}>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 500,
        borderWidth: 2,
        borderColor: Colors.black,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
       width: '100%',
       height: '100%'
    },
    button: {
        padding: 30
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default GameOverScreen;