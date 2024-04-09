import { search, save, remove } from "../services/Storage"
import { useDuplicatedItemAlert } from "./useDuplicatedItemAlert"

export const deleteItem = (storageKey, item, refreshItemArray) => {
    const storage = search(storageKey)
    let filteredStorage = [...storage].filter(value => JSON.stringify(value) != JSON.stringify(item))
    if (storageKey == 'Lists') remove(item)
    save(storageKey, [...filteredStorage])
    refreshItemArray()
}

export const addItem = (storageKey, item, toggleForm) => {

    const index = findIndex(storageKey, item)
    if (index < 0){

        const storage = search(storageKey) 
        let newStorage = [...storage]
        newStorage.push(item)
        save(storageKey, newStorage)
        toggleForm()
    } else {
        useDuplicatedItemAlert(storageKey)
    }
}

export const editItem = (storageKey, item, newItem, toggleForm) => {
    
    const indexNewItem = findIndex(storageKey, newItem)
    
    if (indexNewItem < 0) {
        const storage = search(storageKey)
        const indexItem = findIndex(storageKey, item)
        let newStorage = [...storage]
    
        newStorage[indexItem] = newItem
        save(storageKey, newStorage)
        if(toggleForm) toggleForm()
    } else {
        useDuplicatedItemAlert(storageKey)
    }
}

const findIndex = (storageKey, item) => {
    const storage = search(storageKey)
    let index = -1
    
    if (storageKey === 'Lists') index = storage.indexOf(item)
    else index = storage.findIndex(value => JSON.stringify(value) === JSON.stringify(item))
    return index
}