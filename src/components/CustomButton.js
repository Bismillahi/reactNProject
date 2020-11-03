import React, {Component} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Text from "./CustomText";

class CustomButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={() => {}} style={styles.appButtonCont}>
                <Text style={styles.appButtonText} type="bold">{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
export default CustomButton;

const styles = StyleSheet.create({
    appButtonCont: {
        elevation: 0,
        backgroundColor: "#DC681E",
        borderRadius: 16,
        paddingVertical: 10,
        marginVertical: 8,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    }
})