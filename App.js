import React, { Component } from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import {AppLoading} from "expo";
import Text from "./src/components/CustomText"
import * as Font from "expo-font";

import Login from './src/pages/Login';

let customFonts = {
    'Poppins-Regular': require('./assets/font/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/font/Poppins/Poppins-Bold.ttf'),
    'Poppins-Black': require('./assets/font/Poppins/Poppins-Black.ttf'),
    'Poppins-Medium': require('./assets/font/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/font/Poppins/Poppins-SemiBold.ttf')
};

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    render() {
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <StatusBar barStyle="dark-content" />
                    <Login/>
                </View>
            );
        } else {
            return <AppLoading />;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    inputText: {
        height: 40,
        width: 310,
        borderColor: 'gray',
        borderWidth: 1
    },
    mainText: {
        fontSize: 18
    }
})