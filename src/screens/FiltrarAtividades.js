import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    FlatList,
    View
} from 'react-native';

import Button from '../components/Button';

import { Picker } from '@react-native-picker/picker';

import firestore from '@react-native-firebase/firestore';

const FiltrarAtividades = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.containerPicker }>

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
        height: '30%',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 20
    },
});

export default FiltrarAtividades;