import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={[ styles.container, { width: props.width ?? 300 } ]}
            onPress={ props.onPress }
        >
            <Text style={[ styles.text, { fontSize: props.fontSize ?? 25 } ]}>
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
        marginVertical: 15
    },
    text: {
        margin: 10,
        fontSize: 25,
        textAlign: 'center'
    }
});

export default Button;