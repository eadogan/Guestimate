import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/color';

const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.titleContainer} >Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={() => {}} color={Colors.primary}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={() => {}} color={Colors.accent}/>
                    </View>
                    
                    
                </View>
            </Card>
        </View>
    );
};

const styles =StyleSheet.create({
    screen: {
        flex:1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    titleContainer: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { 
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    }
});

export default StartGameScreen;
