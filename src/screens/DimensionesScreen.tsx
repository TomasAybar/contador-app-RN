import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const { width, height } = Dimensions.get('window');



export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>

                <View style={{
                    ...styles.cajaMorada,
                    width: width * 2
                }} />
                <View style={styles.cajaNaranja} />

            </View>

            <Text style={styles.title} >W:{width}, H:{height}</Text>
            <Text style={styles.title} > asdadsada asda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        width: '20%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#f0a23b'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});
