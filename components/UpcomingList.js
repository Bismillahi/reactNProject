import React, { useEffect } from 'react';
import { View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity,
    ImageBackground } from "react-native";
import PopularItem from "./PopularItem";

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const UpcomingList = props => {
    const { dataSource } = props

    return(
        <View>
            <Text>{"Popular Movie"}</Text>
            <FlatList
                data={dataSource}
                horizontal={true}
                renderItem={({item, index, separators}) => (
                    <PopularItem dataId={item.id.toString()}/>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBG: {
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {

    },
    genre: {

    }
})

export default UpcomingList;
