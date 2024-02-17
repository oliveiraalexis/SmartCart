import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Button = ({iconName, bRadius, bBackgroundColor, width, height, onPress, size=17}) => {

    return (
        <Pressable onPress={onPress} style={{width: width, height: height, ...styles.container}} backgroundColor={bBackgroundColor} borderRadius={bRadius}>
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