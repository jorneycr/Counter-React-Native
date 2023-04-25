import React, { useEffect, useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 45,
                textAlign: 'center',
                top: -15
            }}>
                Counter  {count}
            </Text>

            <TouchableOpacity
                onPress={() => setCount(count + 1)}
                style={{
                    bottom: 10
                }}
            >
                <View
                    style={{
                        backgroundColor: 'green',
                        borderRadius: 100,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25
                        }}
                    >+ 1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setCount(count - 1)}
            >
                <View
                    style={{
                        backgroundColor: 'orange',
                        borderRadius: 100,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25
                        }}
                    >- 1</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}
