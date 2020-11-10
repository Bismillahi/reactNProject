import React from 'react';
import {View, Text, Image, Button, AppRegistry, StatusBar, StyleSheet} from "react-native";
import { getGenreList } from "../data/GenreList";
import { getPopularList } from "../data/PopularList";
import { getTopRatedList } from "../data/TopRatedList";
import { getUpcomingList } from "../data/UpcomingList";
import {useTheme} from "@react-navigation/native";
import Swiper from 'react-native-swiper';

const HomeScreen  = () => {
    React.useEffect(() => {

    })

    const {colors} = useTheme();
    const theme = useTheme();

    return (
        <View>
            <View style={styles.container}>
                <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
                <Image
                    style={styles.imgBanner}
                    source={require('../assets/header1.png')}
                />
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        backgroundColor: '#DC681E',
        height: 100
    },
    headerTitle: {
        fontSize: 24,
        color: '#ffffff',
        fontStyle: 'bold'
    },
    imgBanner: {
        width: 250,
        height: 100
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default HomeScreen;
AppRegistry.registerComponent('myproject', () => SwiperComponent)