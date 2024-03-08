import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

export const PopupMenu = ({title, deleteList, toggleListForm}) => {

    return (
        <View>
            <Menu>
                <MenuTrigger customStyles={triggerStyles}>
                    <Icon name='ellipsis-v' size={15} color="#FFFFFF" />
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                    <MenuOption style={styles.MenuOption} onSelect={toggleListForm} >
                        <Icon name='pencil' size={15} color="#ffffff" />
                        <Text style={styles.text}>Editar</Text>
                    </MenuOption>

                    <MenuOption style={styles.MenuOption} onSelect={() => deleteList(title)} >
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
        padding: 15,
    }
}

const optionsStyles = {
    optionsContainer: {
        width: 'auto',
        backgroundColor: '#2f416d',
    }
}
