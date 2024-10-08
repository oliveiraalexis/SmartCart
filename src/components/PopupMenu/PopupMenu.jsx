import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { deleteItem } from '../../hooks/useStorageManager'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

export const PopupMenu = ({item, storageKey = 'Lists', refreshItemArray, toggleForm}) => {

    const confirmAction = () => {
        Alert.alert(
            'Atenção!',
            'Deseja realmente excluir este item? Esta ação não poderá ser revertida.',
            [
                {
                    text: 'Cancelar',
                    onPress: null,
                    style: 'cancel',
                },
                {
                    text: 'Excluir',
                    onPress: () => deleteItem(storageKey, item, refreshItemArray),
                }
            ]
        )
    }

    return (
        <View>
            <Menu>
                <MenuTrigger customStyles={triggerStyles}>
                    <Icon name='ellipsis-v' size={15} color="#FFFFFF" />
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                    <MenuOption style={styles.MenuOption} onSelect={toggleForm} >
                        <Icon name='pencil' size={15} color="#ffffff" />
                        <Text style={styles.text}>Editar</Text>
                    </MenuOption>

                    <MenuOption style={styles.MenuOption} onSelect={confirmAction} >
                        <Icon name='trash' size={15} color="#ffffff" />
                        <Text style={styles.text}>Excluir</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    )
}

const styles = StyleSheet.create({
    MenuOption:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    text: {
        paddingStart: 8,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    }

})

const triggerStyles = {
    triggerWrapper: {
        paddingHorizontal: 10,
    }
}

const optionsStyles = {
    optionsContainer: {
        width: 'auto',
        backgroundColor: '#26355e',
    }
}
