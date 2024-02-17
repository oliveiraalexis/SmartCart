import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { Button } from '../Button/Button'

export const CardList = ({title, onPress, deleteList}) => {

    return (
        <Pressable style={styles.container}>
                <Pressable onPress={onPress} style={styles.buttonList}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
                <Pressable style={styles.trash}>
                    <Button onPress={deleteList}  iconName='trash' bRadius={10} bBackgroundColor='#161E33' height={60}/>
                </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#161E33',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 20
        
    },
    buttonList: {
        flex: 5,
        borderRadius: 10
    },
    trash:{
        flex: 1
    }
})