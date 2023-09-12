import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const DeleteButton = () => {

    return (
        <TouchableHighlight style={styles.container}>
            <View>
            <Icon name="trash" size={25} color="#FFFFFF" />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: '#8F0000',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DeleteButton