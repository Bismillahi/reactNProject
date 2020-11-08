import React from "react";
import {View, Text, Image, Button, StyleSheet} from "react-native";
import { getGenreList } from "../data/GenreList";
import { getPopularList } from "../data/PopularList";
import { getTopRatedList } from "../data/TopRatedList";
import { getUpcomingList } from "../data/UpcomingList";

function HomeScreen() {
    React.useEffect(() => {

    })

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

export default HomeScreen;