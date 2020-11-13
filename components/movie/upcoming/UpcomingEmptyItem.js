import React, {useEffect, useState} from 'react';
import {
    View, Text, StyleSheet
} from "react-native";

const UpcomingEmptyItem = () => {
    return (
        <View style={styles.movieContainer}>
            <Text
                style={[styles.title, {color: 'rgba(255, 255, 255, 1)'}]}
            >
                Loading ...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        width: 275,
        justifyContent: 'center',
        alignItems: 'center',
        height: 155,
        marginRight: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        overflow: "hidden",
    },
    text: {
        fontFamily: "Poppins"
    },
    title: {
        color: '#ffffff',
        fontSize: 16
    }
})

export default UpcomingEmptyItem;
