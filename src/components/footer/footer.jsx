import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Footer = () => {

    return (
        <View style={styles.container}>
            <View style={styles.qtde}>
                <Text style={styles.text}>Qtde: 10</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.text}>Total: 1000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 66
    },
    qtde: {
        backgroundColor: '#161E33',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    total: {
        backgroundColor: '#2B6D46',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    }
})