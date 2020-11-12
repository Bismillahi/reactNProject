import React, { useEffect } from 'react';
import { View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity,
    ImageBackground } from "react-native";
import UpcomingItem from "./UpcomingItem";

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
