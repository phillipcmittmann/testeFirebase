import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import CriarAtividadeScreen from './src/screens/CriarAtividadeScreen';
import ModificarAtividadeScreen from './src/screens/ModificarAtividadeScreen';
import FiltrarAtividadesScreen from './src/screens/FiltrarAtividadesScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CriarAtividade" component={CriarAtividadeScreen} />
                <Stack.Screen name="ModificarAtividade" component={ModificarAtividadeScreen} />
                <Stack.Screen name="FiltrarAtividades" component={FiltrarAtividadesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;