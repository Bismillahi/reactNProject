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
            <Text style={[styles.title, styles.text]}>{"Popular Movie"}</Text>
            <FlatList
                data={dataSource}
                horizontal={false}
                renderItem={({item, index, separators}) => (
                    <PopularItem dataId={item.id.toString()}/>
                )}/>
        </View>
    );
}

export default PopularList;
const styles = StyleSheet.create({
    listCont: {
        flex: 1,
        margin: 16
    },
    text: {
        fontFamily: "Poppins"
    },
    title: {
        color: '#DC681E',
        fontWeight: 600,
        fontSize: 21,
        padding: 8,
    }
})