import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Button } from '../Button/Button'

export const CardList = () => {

    return (
        <TouchableHighlight style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Lista de compras de AGO/2023</Text>
                <Button iconName='trash' bRadius={5} bBackgroundColor='#8F0000'/>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#161E33',
        borderRadius: 10,
        marginTop: 20,
        padding: 15
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 20
        
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1
    }
})