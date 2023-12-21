import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Button = ({iconName, bRadius, bBackgroundColor, width, height}) => {

    return (
        <Pressable style={{width: width, height: height, ...styles.container}} backgroundColor={bBackgroundColor} borderRadius={bRadius}>
            <Icon style={styles.button} name={iconName} size={17} color="#FFFFFF" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})