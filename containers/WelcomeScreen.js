import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import Logo from "../components/Logo";

class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(2000).then(() => this.props.navigation.navigate('Login'))
    };

    async componentDidMount() {
        const data = await this.navigateToHome();
        if (data !== null) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
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
