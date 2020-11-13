import React, { useEffect } from 'react';
import { View, Text, StyleSheet,
    SafeAreaView, Image, FlatList, TouchableOpacity,
    ImageBackground } from "react-native";
import UpcomingItem from "./UpcomingItem";

const UpcomingList = props => {
    const { dataSource } = props

    return(
        <SafeAreaView>
            <View>
                <Text style={[styles.text, styles.title]}>{"Upcoming Movie"}</Text>
                <FlatList
                    data={dataSource}
                    horizontal={true}
                    // showsHorizontalScrollIndicator={false}
                    snapToInterval={275}
                    renderItem={({item, index, separators}) => (
                        <UpcomingItem dataId={item.id.toString()}/>
                    )}/>
            </View>
        </SafeAreaView>
    );
}

export default UpcomingList;

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins"
    },
    title: {
        color: '#DC681E',
        fontWeight: "600",
        fontSize: 21,
        padding: 8,
    }
})