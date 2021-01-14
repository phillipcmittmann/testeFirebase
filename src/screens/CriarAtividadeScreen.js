import React, { useState, useEffect, useRef } from 'react';

import {
    ScrollView,
    TextInput,
    StyleSheet,
    View,
    Alert
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import Button from '../components/Button';

import firestore from '@react-native-firebase/firestore';

const CriarAtividadeScreen = () => {
    const [atividade, setAtividade] = useState({
        status: 'Pendente',
        titulo: '',
        descricao: '',
        usuarioResponsavel: ''
    });

    async function criarAtividade() {
        await firestore()
            .collection('atividades')
            .add({
                status: atividade.status,
                titulo: atividade.titulo,
                descricao: atividade.descricao,
                usuarioResponsavel: atividade.usuarioResponsavel
            });

            Alert.alert(
                'Sucesso!',
                'Atividade cadastrada com sucesso.',
                [
                    {
                        text: 'OK'
                    }
                ]
            );

            setAtividade({
                status: 'Pendente',
                titulo: '',
                descricao: '',
                usuarioResponsavel: ''
            });
    }

    return (
        <ScrollView contentContainerStyle={ styles.container }>
            <View style={ styles.picker }>
                <Picker
                    selectedValue={ atividade.status }
                    style={{ height: 50, width: 300 }}
                    onValueChange={ (itemValue) => setAtividade({ ...atividade, status: itemValue }) }
                >
                    <Picker.Item label='Pendente' value='Pendente' />
                    <Picker.Item label='Em andamento' value='Em andamento' />
                    <Picker.Item label='Finalizada' value='Finalizada' />
                    <Picker.Item label='Cancelada' value='Cancelada' />
                </Picker>
            </View>

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setAtividade({ ...atividade, titulo: text })
                }
                value={ atividade.titulo }
                placeholder='Título'
            />

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setAtividade({ ...atividade, descricao: text })
                }
                value={ atividade.descricao }
                placeholder='Descrição'
            />

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setAtividade({ ...atividade, usuarioResponsavel: text })
                }
                value={ atividade.usuarioResponsavel }
                placeholder='Usuário responsável'
            />

            <Button
                title='Salvar'
                width={200}
                onPress={ () => criarAtividade() }
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputContainer: {
        marginVertical: 15,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
        fontSize: 20
    },
    picker: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 15
    }
});

export default CriarAtividadeScreen;