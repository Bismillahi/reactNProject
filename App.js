import React, { Component } from 'react';
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from '@react-navigation/native';
import {AppLoading} from "expo";
import * as Font from 'expo-font';

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
        // await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    render() {
        if (this.state.fontsLoaded) {
            return (
                <NavigationContainer>
                    <StackNavigation/>
                </NavigationContainer>
            );
        } else {
            return <AppLoading />;
        }
    }
}
