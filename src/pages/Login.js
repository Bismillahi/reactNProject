import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import Text from "../components/CustomText";

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <LoginForm/>
                <View style={styles.signupTextCont}>
                    <Text>Tidak punya akun? Daftar</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
