import { MMKVLoader } from 'react-native-mmkv-storage'

const storage = new MMKVLoader().initialize();

export const save = (key, value) => {
    storage.setArray(key, value)
}

export const search = (key) => {
    const data = storage.getArray(key)
    if (data) return data
    return []
}

export const clear = () => {
    storage.clearStore()
}