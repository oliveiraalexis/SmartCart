import { MMKVLoader } from "react-native-mmkv-storage"

const storage = new MMKVLoader().initialize();

export const save = (key, value) => {
    storage.setArray(key, value)
}

export const search = (key) => {
    return storage.getArray(key)
}

export const clear = () => {
    storage.clearStore()
}