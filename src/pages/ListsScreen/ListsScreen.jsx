import React, { useMemo, useRef, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { CardList } from '../../components/CardList/CardList'
import { ListForm } from '../../components/ListForm/ListForm'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '@gorhom/bottom-sheet'
import { search, save } from '../../services/Storage'

export const ListsScreen = ({navigation}) => {

    const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['30%'], []);

    const ListsStorage = search('Lists')

    const [shopLists, setShopLists] = useState(ListsStorage || [])
    const [ListFormVisible, setListFormVisible] = useState(false)
    const [listForm, setListForm] = useState('')

    const toggleListForm = (title = '') => {
        setListForm(title)
        setListFormVisible((prev) => (!prev))
    }

    const navigationToDetailScreen = (title) => {
        navigation.navigate('ListDetailScreen', {title})
    }

    const addList = (listName) => {
        let listValues = [...shopLists]
        listValues.push(listName)
        save('Lists', listValues)
        setShopLists(listValues)
        toggleListForm()
    }

    const editList = (listName, newListName) => {
        let listValues = [...shopLists]
        const index = listValues.indexOf(listName)
        listValues[index] = newListName
        save('Lists', listValues)
        setShopLists(listValues)
        toggleListForm()
    }

    const deleteList = (listName) => {
        let listValues  = [...shopLists].filter(item => item != listName)
        save('Lists', listValues)
        setShopLists(listValues)
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
                    renderItem={({item}) => <CardList title={item} onPress={navigationToDetailScreen} deleteList={deleteList} toggleListForm={() => toggleListForm(item)}/>}
                    ListEmptyComponent={emptyListComponent}
                    ListFooterComponent={listFooterComponent}
                />
                {ListFormVisible && (<BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={() => {}}
                    backgroundStyle={{backgroundColor: '#253153'}}
                    >
                        <ListForm listForm={listForm} addList={addList} editList={editList} toggleListForm={toggleListForm}/>
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
        color: '#717785',
        fontWeight: 'bold',
        fontSize: 15,
        alignItems: 'center',
        marginTop: 20,
        textAlign: 'center'
    }
})