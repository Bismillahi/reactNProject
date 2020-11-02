import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet} from 'react-native';

class LoginApp extends Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""}
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
                    }}
                    style={{width: 200, height: 200}}
                />
                <Text> Selamat Datang! </Text>
                <TextInput
                    style={styles.inputText}
                    defaultValue="Email"
                />
                <Button
                    title="Masuk"
                    onPress={() => Alert.alert('Im pressed')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputText: {
        height: 40,
        width: 310,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default LoginApp;