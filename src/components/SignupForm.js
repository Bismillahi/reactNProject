import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import CustomButton from "./CustomButton";
import CustomInputBox from "./CustomInputBox";

export default class SignupForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomInputBox placeholder="Email"/>
                <CustomInputBox placeholder="Password"/>
                <CustomInputBox placeholder="Repeat Password"/>
                <CustomButton>Daftar</CustomButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center"
    }
})
