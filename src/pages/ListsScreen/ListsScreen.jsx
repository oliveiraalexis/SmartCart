import React, { useMemo, useRef, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { CardList } from '../../components/CardList/CardList'
import { ListEdit } from '../../components/ListEdit/ListEdit'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet'

export const ListsScreen = () => {

    const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['25%'], []);

    const [shopLists, setShopLists] = useState([])
    const [listEditVisible, setListEditVisible] = useState(false)

    const toggleListEdit = () => {
        setListEditVisible((prev) => (!prev))
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Header />
                <View style={styles.body}>
                    <CardList />
                    <CardList />
                    <CardList />
                    { shopLists.length == 0 && (<Text style={styles.text}>
                        Nenhuma lista criada. {'\n'}Crie uma lista utilizando {'\n'}o botão “+” abaixo.
                    </Text>)}
                    <View style={{marginTop: 20}}>
                        <Button onPress={toggleListEdit} margin iconName='plus' bRadius={30} bBackgroundColor='#161E33' width={50} height={50}/>
                    </View>
                </View>
                {listEditVisible && (<BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={() => {}}
                    backgroundStyle={{backgroundColor: '#253153'}}
                    >
                        <ListEdit/>
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
        marginTop: 20,
        textAlign: 'center'
    }
})