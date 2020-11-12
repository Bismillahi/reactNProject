import React, {useEffect} from 'react';
import {
    View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity
} from "react-native";
import PopularItem from "./PopularItem";

const PopularList = props => {
    const {dataSource} = props

    return (
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

export default PopularList;
