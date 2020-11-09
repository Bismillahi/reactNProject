import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Logo from "../components/Logo";
import CustomInputBox from "../components/CustomInputBox";
import CustomButton from "../components/CustomButton";

class SignupScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Logo/>
                <CustomInputBox placeholder="Email"/>
                <CustomInputBox placeholder="Password"/>
                <CustomInputBox placeholder="Repeat Password"/>
                <CustomButton screenNav={() => navigation.navigate("MainNavigation")}>Daftar</CustomButton>
                <View style={styles.loginTextCont}>
                    <Text style={styles.loginText}>Sudah punya akun? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.loginButton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
   loginTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
       flexDirection: 'row'
    },
    loginText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
    },
    loginButton: {
        color: '#000000',
        fontSize: 14,
        fontWeight:'500'
    }
})
