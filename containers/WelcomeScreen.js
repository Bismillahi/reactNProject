import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import Logo from "../components/Logo";

class WelcomeScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Logo/>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#fff',
    }
})
