import React, { Component } from 'react';
import { View, Text, Button,TouchableOpacity, StyleSheet} from 'react-native';

class WelcomeScreen extends Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
