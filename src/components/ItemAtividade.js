import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';

const ItemAtividade = (props) => {
    return (
        <TouchableOpacity 
            style={[ styles.container, { backgroundColor: props.idSelecionado === props.item.id ? 'yellow' : 'white' } ]}
            onPress={ () => props.onPress(props.item.id) }    
        >
            <View style={{ marginHorizontal: 15 }}>
                <Text style={ styles.text }>
                    { props.item.titulo }
                </Text>

                <Text style={ styles.textValues }>
                    Descrição: { props.item.descricao }
                </Text>

                <Text style={ styles.textValues }>
                    Responsável: { props.item.usuarioResponsavel }
                </Text>

                <Text style={ styles.textValues }>
                    Status: { props.item.status }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = new StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        fontSize: 25
    },
    textValues: {
        fontSize: 20,
        color: 'grey',
    }
});

export default ItemAtividade;