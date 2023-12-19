import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Button = ({iconName, bRadius, bBackgroundColor}) => {

    return (
        <View style={styles.container}>
            <Pressable backgroundColor={bBackgroundColor} borderRadius={bRadius}>
                <Icon style={styles.button} name={iconName} size={20} color="#FFFFFF" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        width: 28,
        height: 28,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

export default Button