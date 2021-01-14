import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Button
                title='Criar atividade'
                onPress={ () => navigation.navigate('CriarAtividade') }
            />

            <Button
                title='Modificar atividade'
                onPress={ () => navigation.navigate('ModificarAtividade') }
            />

            <Button
                fontSize={ 21 }
                title='Filtrar atividade por status'
                onPress={ () => navigation.navigate('FiltrarAtividades') }
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