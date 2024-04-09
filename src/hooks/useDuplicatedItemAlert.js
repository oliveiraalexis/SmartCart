import { Alert } from "react-native"

export const useDuplicatedItemAlert = (storageKey) => {

    const message = (storageKey == 'Lists') ? 'Já existe uma lista com este nome.' : 'Já existe um produto na lista com estes mesmos dados.'
    Alert.alert(
        'Atenção!',
        message,
        [
            {
                text: 'OK',
                onPress: null
            }
        ]
    )
}