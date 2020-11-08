import React, { Component } from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default class CustomInputBox extends Component {
    render() {
        return (
            <TextInput
                style={styles.inputBox}
                placeholder={this.props.placeholder}
            />
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: 300,
        height: 40,
        backgroundColor: "#fff3e0",
        borderRadius: 16,
        paddingLeft: 16,
        marginVertical: 4,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#B8562B'
    }
})
