import React, {Component} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Text from "./CustomText";

const CustomButton = (props) => {
    const {screenNav} = props;
    return (
        <TouchableOpacity onPress={screenNav} style={styles.appButtonCont}>
            <Text style={styles.appButtonText} type="bold">{props.children}</Text>
        </TouchableOpacity>
    );
}
export default CustomButton;

const styles = StyleSheet.create({
    appButtonCont: {
        elevation: 0,
        backgroundColor: "#DC681E",
        borderRadius: 16,
        paddingVertical: 10,
        marginVertical: 8,
        paddingHorizontal: 12,
        width:"90%"
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontFamily: "Poppins",
        alignSelf: "center"
    }
})