import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import Text from "../components/CustomText";
import SignupForm from "../components/SignupForm";

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <SignupForm/>
                <View style={styles.loginTextCont}>
                    <Text>Sudah punya akun? Masuk</Text>
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
   loginTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
