import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    FlatList,
    View
} from 'react-native';

import Status from '../common/StatusEnum';
import ItemAtividade from '../components/ItemAtividade';

import { Picker } from '@react-native-picker/picker';

import firestore from '@react-native-firebase/firestore';

function getAtividades(status) {
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        let isMounted = true;

        firestore()
            .collection('atividades')
            .where('status', '==', status)
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

const FiltrarAtividadesScreen = () => {
    const [status, setStatus] = useState(Status.PENDENTE);

    const atividades = getAtividades(status);

    return (
        <View style={ styles.container }>
            <View style={ styles.containerPicker }>
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
            </View>

            <View style={ styles.containerList }>
                <FlatList
                    data={ atividades }
                    keyExtractor={ (item, index) => index.toString() }
                    renderItem={ ({item, index}) => {
                        return (
                            <ItemAtividade
                                item={ item }
                                index={ index }
                                onPress={ () => null }
                            />
                        )
                    }}
                    style={ styles.list }
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
    containerPicker: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    picker: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 25
    },
    containerList: {
        marginBottom: 25
    },
    list: {
        marginTop: 25,
    }
});

export default FiltrarAtividadesScreen;