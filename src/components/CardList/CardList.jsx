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
                    <Button onPress={deleteList}  iconName='trash' bRadius={10} bBackgroundColor='#161E33' height={28} size={15}/>
                    <Button onPress={deleteList}  iconName='pencil' bRadius={10} bBackgroundColor='#161E33' height={28} size={15}/>
                </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#161E33',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 20
        
    },
    buttonList: {
        flex: 7,
        borderRadius: 10,
        alignSelf: 'center'
    },
    trash:{
        flex: 1,
        alignSelf: 'center'
    }
})