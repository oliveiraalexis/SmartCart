import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Product from '../../components/cards/product'
import { FlatList } from 'react-native'
import AddButton from '../../components/buttons/addButton'

const DetalheLista = () => {

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
                <AddButton/>
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

export default DetalheLista