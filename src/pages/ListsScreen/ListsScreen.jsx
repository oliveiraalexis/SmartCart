import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { CardList } from '../../components/CardList/CardList'
import { ListForm } from '../../components/ListForm/ListForm'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { search, save, remove } from '../../services/Storage'
import { useEffect } from 'react'

export const ListsScreen = ({navigation}) => {

    const bottomSheetRef = useRef(null);

    const [shopLists, setShopLists] = useState([])
    const [ListFormVisible, setListFormVisible] = useState(false)
    const [listToBeEdited, setListToBeEdited] = useState('')

    useEffect(() => {
        const storageLists = search('Lists')
        if (storageLists.length >= 0) setShopLists(storageLists)

    }, [ListFormVisible])

    const toggleListForm = (title = '') => {
        setListToBeEdited(title)
        setListFormVisible((prev) => (!prev))
    }

    const refreshListsArray = () => {
        const storageLists = search('Lists')
        if (storageLists.length >= 0) setShopLists(storageLists)
    }

    const navigationToDetailScreen = (title) => {
        navigation.navigate('ListDetailScreen', {title})
    }

    const listFooterComponent = (
        <View style={{alignItems: 'center', margin: 20}}>
            <Button onPress={() => toggleListForm()} margin iconName='plus' bRadius={30} bBackgroundColor='#161E33' width={50} height={50}/>
        </View>
    )

    const emptyListComponent = (
        <Text style={styles.text}>Nenhuma lista criada. {'\n'}Crie uma lista utilizando {'\n'}o botão “+” abaixo.</Text>
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
                <Header title='SMARTCART'/>
                <FlatList
                    ref={flatListRef}
                    onContentSizeChange={handleScrollToEnd} 
                    contentContainerStyle={styles.body}
                    data={shopLists}
                    renderItem={({item}) => <CardList title={item} onPress={navigationToDetailScreen} refreshLists={refreshListsArray} toggleListForm={() => toggleListForm(item)}/>}
                    ListEmptyComponent={emptyListComponent}
                    ListFooterComponent={listFooterComponent}
                />
                {ListFormVisible && (<BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    onChange={() => {}}
                    backgroundStyle={{backgroundColor: '#253153'}}
                    enableDynamicSizing='true'
                    >
                        <BottomSheetScrollView>
                            <ListForm listToBeEdited={listToBeEdited} toggleListForm={toggleListForm}/>
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
        alignItems: 'center',
        marginHorizontal: 20
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