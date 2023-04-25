import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const CounterScreen = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.containerCounter}>
                Counter  {count}
            </Text>

            <TouchableOpacity
                style={styles.fabLocationBR}
                onPress={() => setCount(count + 1)}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>+ 1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => setCount(count - 1)}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>- 1</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    containerCounter: {
        fontSize: 45,
        textAlign: 'center',
        top: -15
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    button: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});