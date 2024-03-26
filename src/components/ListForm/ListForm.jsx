import React, {useState} from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { Button } from '../Button/Button';
import { search, save } from '../../services/Storage'

export const ListForm = ({listToBeEdited, toggleListForm}) => {

    const [listName, setListName] = useState(listToBeEdited);

    const addList = (listName) => {
        const storageLists = search('Lists') 
        let newStorageLists = [...storageLists]
        newStorageLists.push(listName)
        save('Lists', newStorageLists)
        toggleListForm()
    }

    const editList = (listName, newListName) => {
        const storageLists = search('Lists')
        let newStorageLists = [...storageLists]
        const index = newStorageLists.indexOf(listName)
        newStorageLists[index] = newListName
        save('Lists', newStorageLists)
        toggleListForm()
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewinputs}>
                <Text style={styles.text}>Nome da lista</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setListName}
                    value={listName}
                    defaultValue={listName}
                    autoFocus={true}
                    maxLength={34}
                />
            </View>
            <View style={styles.button}>
                <Button onPress={listToBeEdited == '' ? () => addList(listName) : () => editList(listToBeEdited, listName)} iconName={'check'} bRadius={10} bBackgroundColor={'#178b4c'} width={118} height={33}/>
                <Button onPress={() => toggleListForm()} iconName={'remove'} bRadius={10} bBackgroundColor={'#8b1717'} width={118} height={33}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        height: 35,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 7
    },
    viewinputs: {
        marginVertical: 20,
        marginHorizontal: 25
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})
