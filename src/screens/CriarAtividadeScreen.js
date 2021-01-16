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
import Status from '../common/StatusEnum';

import firestore from '@react-native-firebase/firestore';

const CriarAtividadeScreen = () => {
    const [atividade, setAtividade] = useState({
        status: Status.PENDENTE,
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
                status: Status.PENDENTE,
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
                    <Picker.Item label={Status.PENDENTE} value={Status.PENDENTE} />
                    <Picker.Item label={Status.EM_ANDAMENTO} value={Status.EM_ANDAMENTO} />
                    <Picker.Item label={Status.FINALIZADA} value={Status.FINALIZADA} />
                    <Picker.Item label={Status.CANCELADA} value={Status.CANCELADA} />
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
                width={ 200 }
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