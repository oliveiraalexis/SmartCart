import React from 'react'
import {  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ListsScreen } from '../pages/ListsScreen/ListsScreen'
import { ListDetailScreen } from '../pages/ListDetailScreen/ListDetailScreen'
import BootSplash from "react-native-bootsplash";

export const Routes = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer 
            onReady={() => {
                BootSplash.hide({fade: true});
            }}
        >
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='ListsScreen'>
                <Stack.Screen name='ListsScreen' component={ListsScreen}/>
                <Stack.Screen name='ListDetailScreen' component={ListDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
