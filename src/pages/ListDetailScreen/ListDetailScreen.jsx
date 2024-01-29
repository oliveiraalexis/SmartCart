import React, { useState, useMemo, useRef } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Modal } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { FlatList } from 'react-native'
import { Button } from '../../components/Button/Button'
import { Product } from '../../components/Product/Product'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '@gorhom/bottom-sheet'
import { ProductEdit } from '../../components/ProductEdit/ProductEdit'

export const ListDetailScreen = () => {

    const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['55%'], []);

    const [productEditVisible, setProductEditVisible] = useState(false)
    const [productEdit, setProductEdit] = useState({})
    
    const [produtos, setProdutos] = useState([])

    const toggleProductEdit = (product = {}) => {
        setProductEdit(product)
        setProductEditVisible((prev) => (!prev))
    }

    const addProduct = (product) => {
        const edicao = Object.keys(productEdit).includes("nome", "tipo", "qtde", "preco") //Se for 'true' significa que o método está sendo chamado a partir do botão de edição de produto, logo não deve adicionar o produto de novo
        if (!edicao) setProdutos([...produtos, {...product}])
        setProductEditVisible((prev) => (!prev))
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Header />
                <View style={styles.body}>
                   { produtos.length > 0 && ( <View style={styles.products}>
                        <FlatList
                            data={
                                [
                                    produtos.map((p, index)=>{
                                        return <Product {...p} toggleProductEdit={() => toggleProductEdit(p)} key={index}/>
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
                        <Button onPress={toggleProductEdit} iconName='plus' bRadius={30} bBackgroundColor='#161E33' width={50} height={50}/>
                    </View>
                </View>
                <Footer />
                {productEditVisible && (<BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={() => {}}
                    backgroundStyle={{backgroundColor: '#253153'}}
                >
                    <ProductEdit addProduct={addProduct} toggleProductEdit={toggleProductEdit} {...productEdit}/>
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