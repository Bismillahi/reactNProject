import React from "react"
import {View, Text, Image, Button, StyleSheet} from "react-native"

export default function HomeScreen() {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hai</Text>
                <Text>Nama....</Text>
            </View>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#DC681E',
        height: 100
    },
    headerTitle: {
        fontSize: 24,
        color: '#ffffff',
        fontStyle: 'bold'
    }
})