import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Product } from '../../components/Product/Product'
import { FlatList } from 'react-native'
import { Button } from '../../components/Button/Button'

export const DetalheLista = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.body}>
                <View style={styles.products}>
                    <FlatList
                        data={
                            [
                                <Product/>,
                                <Product/>,
                                <Product/>,
                            ]
                        }
                        renderItem={({item}) => item}
                    >
                    </FlatList>
                </View>
                <Button/>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        
    },
    body: {
        width: '100%',
        backgroundColor: '#0A0E17',
        flex: 1,
        padding: 20

    },
    products: {
        backgroundColor: '#161E33',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingBottom: 15,
        marginBottom: 40
    }
})