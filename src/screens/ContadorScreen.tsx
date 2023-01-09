import React, { useState } from 'react'
import { Text, View, Button } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 40,
                top: -15
            }}>Contador: {contador}</Text>

            <Button
                onPress={ () => setContador( contador + 1) }
                title="Click"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

            <Button
                onPress={ () => setContador( contador - 1) }
                title="Click"
                color="#000"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    )
}
