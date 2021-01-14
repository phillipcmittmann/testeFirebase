import React, { useState, useEffect } from 'react';
import {
    TextInput,
    FlatList,
    StyleSheet,
    View,
    Alert
} from 'react-native';

import Button from '../components/Button';
import ItemAtividade from '../components/ItemAtividade';
import Status from '../common/StatusEnum';

import { Picker } from '@react-native-picker/picker';

import firestore from '@react-native-firebase/firestore';

function getAtividades() {
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        let isMounted = true;

        firestore()
            .collection('atividades')
            .onSnapshot(snapshot => {
                const newAtividades = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
    
                if (isMounted) setAtividades(newAtividades);
            });

        return () => { isMounted = false };    
    })
    
    return atividades;
}

function salvarAtividade(id, status, usuarioResponsavel) {
    if (id === null) {
        Alert.alert(
            'Erro.',
            'Selecione uma atividade'
        )
    } else if (status === null || usuarioResponsavel === null) {
        Alert.alert(
            'Erro.',
            'Preencha corretamente as informações.'
        )
    } else {
        firestore()
        .collection('atividades')
        .doc(id)
        .update({
            status: status,
            usuarioResponsavel: usuarioResponsavel
        });

        Alert.alert(
            'Sucesso!',
            'Atividade alterada com sucesso.'
        );
    }
}

const ModificarAtividade = () => {
    const [idSelecionado, setIdSelecionado] = useState(null);
    const [usuarioResponsavel, setUsuarioResponsavel] = useState(null);
    const [status, setStatus] = useState(Status.PENDENTE);

    const changeIdSelecionado = (id) => {
        setIdSelecionado(id);
    }

    const atividades = getAtividades();

    return (
        <View style={ styles.container }>
            <View style={ styles.containerList }>
                <FlatList
                    data={ atividades }
                    keyExtractor={ (item, index) => index.toString() }
                    renderItem={ ({item, index}) => {
                        return (
                            <ItemAtividade
                                item={ item }
                                index={ index }
                                idSelecionado={ idSelecionado }
                                onPress={ changeIdSelecionado }
                            />
                        )
                    }}
                    style={ styles.list }
                />
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={ styles.picker }>
                    <Picker
                        selectedValue={ status }
                        style={{ height: 50, width: 300 }}
                        onValueChange={ (itemValue) => setStatus(itemValue) }
                    >
                        <Picker.Item label={Status.PENDENTE} value={Status.PENDENTE} />
                        <Picker.Item label={Status.EM_ANDAMENTO} value={Status.EM_ANDAMENTO} />
                        <Picker.Item label={Status.FINALIZADA} value={Status.FINALIZADA} />
                        <Picker.Item label={Status.CANCELADA} value={Status.CANCELADA} />
                    </Picker>
                </View>
                
                <TextInput
                    style={ styles.inputContainer }
                    onChangeText={ text => setUsuarioResponsavel(text) }
                    value={ usuarioResponsavel }
                    placeholder='Usuário responsável'
                />

                <Button
                    title="Salvar atividade"
                    width={ 250 }
                    onPress={ () => salvarAtividade(idSelecionado, status, usuarioResponsavel) }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerList: {
        height: '60%',
        borderTopColor: 'black',
        borderTopWidth: 1,
        marginBottom: 20
    },
    list: {
        marginTop: 10,
    },
    inputContainer: {
        marginVertical: 15,
        width: 305,
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

export default ModificarAtividade;