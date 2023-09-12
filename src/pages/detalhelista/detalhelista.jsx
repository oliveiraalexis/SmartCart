import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Product from '../../components/cards/product'

const DetalheLista = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.body}>
                <View style={styles.products}>
                    <Product/>
                    <Product/>
                    <Product/>
                </View>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0f4cda',
        alignItems: 'center',
        flex: 1
        
    },
    body: {
        width: '100%',
        backgroundColor: '#940e61',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 40,
        marginVertical: 40,
        paddingTop: 0,
        paddingHorizontal: 20

    },
    products: {
        width: '100%',
        backgroundColor: '#9afa00',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingTop: 15
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

export default DetalheLista