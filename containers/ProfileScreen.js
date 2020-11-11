import React from "react"
import {View, Text, Image, Button, TouchableOpacity, StyleSheet} from "react-native"
import Logo from "../components/Logo";
import CustomInputBox from "../components/CustomInputBox";
import CustomButton from "../components/CustomButton";

class ProfileScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Nama</Text>
                <Text>M Maroqi Abdul Jalil</Text>
                <Text>Email</Text>
                <Text>jalilpro31@gmail.com</Text>
            </View>
        );
    }
}
export default ProfileScreen;

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
    text: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
    },
    button: {
        color: '#000000',
        fontSize: 14,
        fontWeight:'500'
    }
})
