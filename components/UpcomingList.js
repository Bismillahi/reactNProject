import React, { useEffect } from 'react';
import { View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity,
    ImageBackground } from "react-native";
import UpcomingItem from "./UpcomingItem";

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
                // showsHorizontalScrollIndicator={false}
                snapToInterval={275}
                renderItem={({item, index, separators}) => (
                    <UpcomingItem dataId={item.id.toString()}/>
                )}/>
        </View>
    );
}

export default UpcomingList;
