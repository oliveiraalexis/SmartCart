import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const AddButton = () => {

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.button}>
                    <Text style={styles.text}>+</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#161E33',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 5
        
    }
})

export default (AddButton)