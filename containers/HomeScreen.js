import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, SafeAreaView, Text, Image, Button, AppRegistry, StatusBar, StyleSheet} from "react-native";
import { getGenreList } from "../data/GenreList";
import { getPopularList } from "../data/PopularList";
import { getTopRatedList } from "../data/TopRatedList";
import { getUpcomingList } from "../data/UpcomingList";
import {useTheme} from "@react-navigation/native";
import FullWidthImage from 'react-native-fullwidth-image';
import {FlatList} from "react-native-web";

function HomeScreen (){

    useEffect(() => {
    })

    const {colors} = useTheme();
    const theme = useTheme();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
            <FullWidthImage
                style={styles.imgBanner}
                source={require('../assets/header1.png')}
                resizeMode="cover"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center"
    },
    header: {
        backgroundOrigin: require('../assets/header1.png'),
        backgroundColor: '#DC681E',
        height: 100
    },
    headerTitle: {
        fontSize: 24,
        color: '#ffffff',
        fontStyle: 'bold'
    },
    imgBanner: {
        height: 100
    }
})

export default HomeScreen;