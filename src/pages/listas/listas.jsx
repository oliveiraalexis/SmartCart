import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../../components/header/header'
import AddButton from '../../components/buttons/addButton'
import ListButton from '../../components/buttons/listButton'

const Listas = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.body}>
                <ListButton />
                <ListButton />
                <ListButton />
                <Text style={styles.text}>
                    Nenhuma lista criada. {'\n'}Crie uma lista utilizando {'\n'}o botão “+” abaixo.
                </Text>
                <AddButton/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        
    },
    body: {
        backgroundColor: '#0A0E17',
        alignItems: 'center',
        flex: 1,
        padding: 20
    },
    text: {
        color: '#717785',
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        margin: 20,
        textAlign: 'center'
    }
})

export default Listas