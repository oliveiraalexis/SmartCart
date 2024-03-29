import { search, save, remove } from "../services/Storage"

export const deleteItem = (storageKey, item) => {
    const storage = search(storageKey)
    let filteredStorage = [...storageItens].filter(value => JSON.stringify(value) != JSON.stringify(item))
    if (storageKey == 'Lists') remove(item)
    save(storageKey, [...filteredStorage])
    refreshItemArray()
}

export const addItem = (storageKey, item, toggleForm) => {
    const storage = search(storageKey) 
    let newStorage = [...storage]
    newStorage.push(item)
    save(storageKey, newStorage)
    toggleForm()
}

export const editItem = (storageKey, item, newItem, toggleForm) => {
    const storage = search(storageKey)
    let newStorage = [...storage]
    let index = -1
    
    if (storageKey === 'Lists') index = newStorage.indexOf(item)
    else index = newStorage.findIndex(value => JSON.stringify(value) === JSON.stringify(item))

    newStorage[index] = newItem
    save(storageKey, newStorage)
    toggleForm()
}