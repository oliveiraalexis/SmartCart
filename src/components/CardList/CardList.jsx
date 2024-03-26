import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { Button } from '../Button/Button'
import { PopupMenu } from '../PopupMenu/PopupMenu'

export const CardList = ({title, onPress, deleteList, toggleListForm}) => {

    return (
        <Pressable style={styles.container}>
                <Pressable onPress={() => onPress(title)} style={styles.buttonList}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
                <Pressable style={styles.buttonMenu}>
                    <PopupMenu param={title} deleteItem={deleteList} toggleForm={toggleListForm}/>
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
        flex: 1,
        borderRadius: 10,
        alignSelf: 'center'
    },
    buttonMenu:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})