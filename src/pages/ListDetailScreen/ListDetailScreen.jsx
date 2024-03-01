import React, { useState, useMemo, useRef } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { FlatList } from 'react-native'
import { Button } from '../../components/Button/Button'
import { Product } from '../../components/Product/Product'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '@gorhom/bottom-sheet'
import { ProductForm } from '../../components/ProductForm/ProductForm'
import { search, save } from '../../services/Storage'

export const ListDetailScreen = ({route, navigation}) => {

    const title = route.params.title

    const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['70%'], []);
    
    const [productFormVisible, setProductFormVisible] = useState(false)
    const [productForm, setProductForm] = useState({})
    
    const productsStorage = search(title)
    const [produtos, setProdutos] = useState(productsStorage || [])

    const toggleProductForm = (product = {}) => {
        setProductForm(product)
        setProductFormVisible((prev) => (!prev))
    }

    const navigationToListsScreen = () => {
        navigation.goBack()
    }

    const addProduct = (product) => {
        const newProductArray = [...produtos, {...product}]
        setProdutos(newProductArray)
        save(title, newProductArray)
        setProductFormVisible((prev) => (!prev))
    }

    const editProduct = (listName, product, newProduct) => {

        const newProductArray = [...produtos]
        const index = newProductArray.indexOf(product)
        newProductArray[index] = newProduct
        setProdutos(newProductArray)
        save(listName, newProductArray)
        setProductFormVisible((prev) => (!prev))
    }

    const deleteProduct = (product) => {
        const newProductArray = [...produtos].filter(item => item != product)
        setProdutos(newProductArray)
        save(title, newProductArray)
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Header goBack={navigationToListsScreen} title={title}/>
                <View style={styles.body}>
                   { produtos.length > 0 && ( <View style={styles.products}>
                        <FlatList
                            data={
                                [
                                    produtos.map((p, index)=>{
                                        return <Product product={p} toggleProductForm={() => toggleProductForm(p)} deleteProduct={deleteProduct} key={index}/>
                                    })
                                ]
                            }
                            renderItem={({item}) => item}
                        >
                        </FlatList>
                    </View>)}
                    { produtos.length == 0 && (<Text style={styles.text}>
                        Nenhum produto na lista. {'\n'}Inclua um produto utilizando {'\n'}o botão “+” abaixo.
                    </Text>)}
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <Button onPress={toggleProductForm} iconName='plus' bRadius={30} bBackgroundColor='#161E33' width={50} height={50}/>
                    </View>
                </View>
                <Footer />
                {productFormVisible && (<BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={() => {}}
                    backgroundStyle={{backgroundColor: '#253153'}}
                >
                    <ProductForm listName={title} productForm={productForm} addProduct={addProduct} editProduct={editProduct} toggleProductForm={toggleProductForm}/>
			    </BottomSheet>)}
            </SafeAreaView>
        </GestureHandlerRootView>
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
        paddingBottom: 15
    },
    text: {
        color: '#717785',
        fontWeight: 'bold',
        fontSize: 15,
        alignItems: 'center',
        marginTop: 20,
        textAlign: 'center'
    }
})