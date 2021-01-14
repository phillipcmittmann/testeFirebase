import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import CriarAtividadeScreen from './src/screens/CriarAtividadeScreen';
import ModificarAtividadeScreen from './src/screens/ModificarAtividadeScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CriarAtividade" component={CriarAtividadeScreen} />
                <Stack.Screen name="ModificarAtividade" component={ModificarAtividadeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;