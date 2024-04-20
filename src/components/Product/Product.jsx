import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Checkbox } from '../Checkbox/Checkbox'
import { PopupMenu } from '../PopupMenu/PopupMenu'
import { usePriceMask } from '../../hooks/usePriceMask'
import { editItem } from '../../hooks/useStorageManager'

export const Product = ({listName, product, refreshProducts, toggleProductForm}) => {

    const [isSelected, setSelection] = useState(product.checked);
    const totalPrice = parseFloat(product.qtde) * parseFloat(product.preco)
    let checkboxColor = isSelected == true ? '#348555' : '#FFFFFF'
    
    function onValueChange(){
        let newProduct = {...product}
        newProduct.checked = !newProduct.checked
        setSelection(newProduct.checked)
        editItem(listName, product, newProduct, null)
        refreshProducts()
    }

    return (
        <View style={styles.container}>
                <View style={styles.viewleft}>                
                    <View style={styles.viewtop}>
                        <Checkbox value={isSelected} onValueChange={onValueChange} checkboxColor={checkboxColor}/>
                        <Text style={{
                            color: checkboxColor,
                            fontWeight: 'bold',
                            fontSize: 15,}}
                        >{product.nome}</Text>
                    </View>
                    <Text style={styles.text}>Quantidade: {product.qtde} {product.tipo}</Text>
                    <Text style={styles.text}>Preço Total: {usePriceMask(totalPrice.toString())}</Text>
                </View>
                <View style={styles.viewright}>
                    <PopupMenu item={{...product}} storageKey={listName} refreshItemArray={refreshProducts} toggleForm={toggleProductForm}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#161E33',
        borderRadius: 10
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text: {
        color: '#808696',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 6,
        marginLeft: 7
    },
    viewtop: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewleft: {
        justifyContent: 'space-around'
    },
    viewright: {
        marginTop: 7,
        justifyContent: 'space-between'
    }
})