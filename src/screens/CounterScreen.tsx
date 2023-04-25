import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.containerCounter}>
                Counter  {count}
            </Text>

            <Fab onPress={() => setCount(count + 1)} title={'+1'} />
            <Fab onPress={() => setCount(count - 1)} position={'bl'} title={'-1'} />

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
    }
});