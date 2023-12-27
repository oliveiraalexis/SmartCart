import React, { useCallback, useMemo, useRef } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Modal } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { FlatList } from 'react-native'
import { Button } from '../../components/Button/Button'
import { Product } from '../../components/Product/Product'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet'
import { ProductEdit } from '../../components/ProductEdit/ProductEdit'

export const ListDetailScreen = () => {

    const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['70%'], []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
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
                <BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={() => {}}
                    backgroundStyle={{backgroundColor: '#253153'}}
                >
                    <ProductEdit/>
			    </BottomSheet>
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
        paddingBottom: 15,
        marginBottom: 40
    }
})