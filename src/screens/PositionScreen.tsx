import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={ styles.container }>

            <View style={ styles.cajaVerde }></View>
            <View style={ styles.cajaMorada }></View>
            <View style={ styles.cajaNaranja }></View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // width: 400,
        // height: 400,
        backgroundColor: '#28c4d9',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // top: 0,
        // right: 0,
        ...StyleSheet.absoluteFillObject
    }

});