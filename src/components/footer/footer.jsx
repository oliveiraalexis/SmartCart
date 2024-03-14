import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { usePriceMask } from '../../hooks/usePriceMask'

export const Footer = ({amount, count}) => {

    amount = usePriceMask(amount)

    return (
        <View style={styles.container}>
            <View style={styles.qtde}>
                <Text style={styles.text}>QTDE DE ITENS</Text>
                <Text style={styles.text}>{count}</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.text}>PREÇO TOTAL</Text>
                <Text style={styles.text}>{amount}</Text>
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
        fontSize: 15,
    }
})