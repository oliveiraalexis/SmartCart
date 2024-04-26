import React, { useState, useMemo, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { FlatList } from 'react-native'
import { Button } from '../../components/Button/Button'
import { Product } from '../../components/Product/Product'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { ProductForm } from '../../components/ProductForm/ProductForm'
import { search } from '../../services/Storage'

export const ListDetailScreen = ({route, navigation}) => {

    const title = route.params.title

    const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['55%'], []);
    
    const [productFormVisible, setProductFormVisible] = useState(false)
    const [productToBeEdited, setProductToBeEdited] = useState({})
    
    const [productsArray, setProductsArray] = useState([])
    const [productsAmount, setProductsAmount] = useState(0)

    useEffect(() => {
        const products = search(title)
        if (products.length >= 0) setProductsArray([...products])

    }, [productFormVisible])

    useEffect(() => {
        let amount = 0
        productsArray.map((p, index)=>{
            amount += (p.price * p.quantity)
        })
        setProductsAmount(amount)
    }, [productsArray])

    const toggleProductForm = (product = {}) => {
        setProductToBeEdited(product)
        setProductFormVisible((prev) => (!prev))
    }

    const refreshProductsArray = () => {
        const products = search(title)
        if (products.length >= 0) setProductsArray([...products])
    }

    const navigationToListsScreen = () => {
        navigation.goBack()
    }

    const listDetailFooterComponent = (
        <View style={{alignItems: 'center', margin: 20}}>
            <Button onPress={() => toggleProductForm()} iconName='plus' bRadius={30} bBackgroundColor='#161E33' width={50} height={50}/>
        </View>
    )

    const emptyListDetailComponent = (
        <Text style={styles.text}>Nenhum produto na lista. {'\n'}Inclua um produto utilizando {'\n'}o botão “+” abaixo.</Text>
    )

    const flatListRef = React.useRef()

    function handleScrollToEnd() {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd()
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Header goBack={navigationToListsScreen} title={title}/>
                <View style={styles.body}>
                    <FlatList
                        ref={flatListRef}
                        onContentSizeChange={handleScrollToEnd} 
                        data={[...productsArray]}
                        renderItem={(product) => <Product listName={title} product={product.item} toggleProductForm={() => toggleProductForm(product.item)} refreshProducts={refreshProductsArray}/>}
                        ListEmptyComponent={emptyListDetailComponent}
                        ListFooterComponent={listDetailFooterComponent}
                    >
                    </FlatList>
                </View>
               
                <Footer amount={productsAmount} count={productsArray.length}/>
                {productFormVisible && (<BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={() => {}}
                    backgroundStyle={{backgroundColor: '#253153'}}
                >
                    <BottomSheetScrollView>
                        <ProductForm listName={title} productToBeEdited={productToBeEdited} toggleProductForm={toggleProductForm}/>
                    </BottomSheetScrollView>
			    </BottomSheet>)}
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0E17'
    },
    body: {
        flex: 1,
    },
    text: {
        color: '#808696',
        fontWeight: 'bold',
        fontSize: 15,
        alignItems: 'center',
        marginTop: 20,
        textAlign: 'center'
    }
})