import React, {useEffect, useState} from 'react';
import {
    View, Text, StyleSheet
} from "react-native";

const PopularEmptyItem = () => {
    return (
        <View style={[styles.movieContainer, {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            overflow: "hidden",
        }]}>
            <Text style={styles.title}>Loading ...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        marginVertical: 8,
        height: 90,
    },
    text: {
        fontFamily: "Poppins",
        color: '#00000'
    },
    title: {
        fontWeight: "bold",
        color: '#ffffff',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PopularEmptyItem;
