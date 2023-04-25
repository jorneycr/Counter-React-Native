import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, position = 'br', onPress }: Props) => {

    const ios = () => {
        return (
            <View style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const android = () => {
        return (
            <View style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'android') ? android() : ios()

}

const styles = StyleSheet.create({
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
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 8,
    },
    fabText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
