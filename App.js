import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet} from 'react-native';
import MainBottomNavigation from "./navigation/MainBottomNavigation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <MainBottomNavigation/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputText: {
        height: 40,
        width: 310,
        borderColor: 'gray',
        borderWidth: 1
    }
})