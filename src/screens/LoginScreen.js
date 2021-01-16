import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';

import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    function login() {
        auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(() => {
            Alert.alert(
                'Sucesso!',
                'Usuário criado com sucesso.',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Home')
                    }
                ]
            )
        })
        .catch(error => {
            if (error.code == 'auth/email-already-in-use') {
                Alert.alert(
                    'Atençâo',
                    'Usuário já cadastrado. Realizando login com estas credenciais.',
                    [
                        {
                            text: 'OK',
                            onPress: () => navigation.navigate('Home')
                        }
                    ]
                );
            }

            if (error.code === 'auth/invalid-email') {
                Alert.alert(
                    'Erro.',
                    'E-mail inválido.',
                    [
                        {
                            text: 'OK'
                        }
                    ]
                );
            }
        })
    }

    return (
        <View style={ styles.container }>
            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setEmail(text)
                }
                value={ email }
                placeholder='E-mail'
                autoCapitalize='none'
                keyboardType='email-address'
            />

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setSenha(text)
                }
                value={ senha }
                placeholder='Senha'
                autoCapitalize='none'
                secureTextEntry={ true }
            />

            <Button
                title='Log-in'
                width={ 200 }
                onPress={ () => login() }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

export default LoginScreen;