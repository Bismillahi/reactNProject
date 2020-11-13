import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from "../components/Logo";
import CustomButton from "../components/CustomButton";
import CustomInputBox from "../components/CustomInputBox";

class LoginScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Logo/>
                <CustomInputBox placeholder="Email"/>
                <CustomInputBox placeholder="Password"/>
                <CustomButton screenNav={() => navigation.navigate("MainNavigation")}>Masuk</CustomButton>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Tidak punya akun? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                        <Text style={styles.signupButton}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: '16',
        backgroundColor: "#fff"
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14,
        fontFamily: "Poppins"
    },
    signupButton: {
        color: '#000000',
        fontSize: 14,
        fontWeight:"500"
    }
})
