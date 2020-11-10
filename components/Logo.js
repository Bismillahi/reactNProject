import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import * as Font from "expo-font";
import Text from "./CustomText";


let customFonts = {
    'Poppins-Regular': require('../assets/font/Poppins/Poppins-Regular.ttf')
};

export default class Logo extends Component {
    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/dekriya.png')}
                />
                <Text style={styles.logoText}>DeMovie</Text>
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
    logo: {
        height: 75.53,
        width: 60
    },
    logoText: {
        fontSize: 18,
        color: '#B8562B',
        fontWeight: "600",
        marginVertical: 8
    }
})
