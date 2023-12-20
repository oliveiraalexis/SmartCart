import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Button } from '../Button/Button'

export const CardList = () => {

    return (
        <Pressable style={styles.container}>
                <Pressable style={styles.buttonList} backgroundColor='red'>
                    <Text style={styles.text}>Lista de compras de AGO/2023</Text>
                </Pressable>
                <Pressable style={styles.trash}>
                    <Button  iconName='trash' bRadius={10} bBackgroundColor='#2357da' height={60}/>
                </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#4dc01f',
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