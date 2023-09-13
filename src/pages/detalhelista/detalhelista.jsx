import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Product from '../../components/cards/product'

const DetalheLista = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.body}>
                <View style={styles.products}>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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

export default DetalheLista