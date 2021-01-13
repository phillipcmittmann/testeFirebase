import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={[ styles.container ]}
            onPress={ props.onPress }
        >
            <Text style={ styles.text }>
                { props.title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 15,
        width: 300
    },
    text: {
        margin: 10,
        fontSize: 25,
        textAlign: 'center'
    }
});

export default Button;