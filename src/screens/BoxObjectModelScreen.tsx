import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Box Object Module</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flex: 1,
    },
    title: {
      backgroundColor: 'blue',
      borderWidth: 10,
      fontSize: 20,
      marginHorizontal: 10,
      paddingHorizontal: 100,
      paddingVertical: 20,

    }
});

