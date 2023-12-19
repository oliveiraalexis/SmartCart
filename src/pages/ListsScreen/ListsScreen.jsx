import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { CardList } from '../../components/CardList/CardList'

export const ListsScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.body}>
                <CardList />
                <CardList />
                <CardList />
                <Text style={styles.text}>
                    Nenhuma lista criada. {'\n'}Crie uma lista utilizando {'\n'}o botão “+” abaixo.
                </Text>
                <Button iconName='plus' bRadius={30} bBackgroundColor='#161E33'/>
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
        fontSize: 15,
        alignItems: 'center',
        margin: 20,
        textAlign: 'center'
    }
})