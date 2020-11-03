import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import CustomButton from "./CustomButton";
import CustomInputBox from "./CustomInputBox";

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomInputBox placeholder="Email"/>
                <CustomInputBox placeholder="Password"/>
                <CustomButton>Masuk</CustomButton>
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
