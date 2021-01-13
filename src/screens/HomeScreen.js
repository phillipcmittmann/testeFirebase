import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import Button from '../components/Button';

const HomeScreen = () => {
    return (
        <View style={ styles.container }>
            <Button
                title='Criar atividade'
            />

            <Button
                title='Modificar atividade'
            />

            <Button
                title='Buscar atividade'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;