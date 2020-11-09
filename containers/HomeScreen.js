import React from "react";
import {View, Text, Image, Button, StatusBar, StyleSheet} from "react-native";
import { getGenreList } from "../data/GenreList";
import { getPopularList } from "../data/PopularList";
import { getTopRatedList } from "../data/TopRatedList";
import { getUpcomingList } from "../data/UpcomingList";
import {useTheme} from "@react-navigation/native";
import Swiper from 'react-native-swiper';

function HomeScreen() {
    React.useEffect(() => {

    })

    const {colors} = useTheme();
    const theme = useTheme();

    return (
        <View>
            <View style={styles.header}>
                <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
                <Swiper>
                    <View>
                        <Image
                            source={require('.../assets/header1.png')}
                        />
                    </View>
                    <Text style={styles.headerTitle}>Hai</Text>
                    <Text>Nama Fiqey</Text>
                </Swiper>
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