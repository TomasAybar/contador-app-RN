import React from 'react'
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            
            <View style={ styles.cajaMorada } ></View>
            <View style={ styles.cajaNaranja } ></View>
            <View style={ styles.cajaAzul } ></View>

        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor:'#28425b',
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
        // flexWrap: 'wrap'
    },
    cajaMorada : {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
        // flex: 1
        // alignItems: 'flex-end',
        // alignSelf: 'flex-end'
        // position:'relative',
        // bottom: -100
    },
    cajaNaranja : {
        width: 100,
        height: 100,
        // flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#f0a23b',
        // alignSelf: 'center',
        position:'relative',
        // left: 100
        bottom: -50
    },
    cajaAzul : {
        width: 100,
        height: 100,
        // flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28c4d9',
        // alignSelf:'flex-start',
    },
});