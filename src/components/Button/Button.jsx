import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Button = ({iconName, bRadius, bBackgroundColor, width, height, disabled, onPress, size=17}) => {

    const buttonOpacity = disabled ? 0.3 : 1

    return (
        <Pressable disabled={disabled} onPress={onPress} style={{opacity: buttonOpacity, width: width, height: height, ...styles.container}} backgroundColor={bBackgroundColor} borderRadius={bRadius}>
            <Icon style={styles.button} name={iconName} size={size} color="#FFFFFF" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})