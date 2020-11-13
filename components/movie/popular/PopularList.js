import React, {useEffect} from 'react';
import {
    View, Text, StyleSheet,
    Image, FlatList, ActivityIndicator
} from "react-native";
import PopularItem from "./PopularItem";

const PopularList = props => {
    const {dataSource, loaded} = props

    return (
        <View>
            <Text style={[styles.title, styles.text]}>{"Popular Movie"}</Text>
            {loaded? (
                <FlatList
                    data={dataSource}
                    horizontal={false}
                    renderItem={({item, index, separators}) => (
                        <PopularItem dataId={item.id.toString()}/>
                    )}/>
            ) : (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#dc681e" />
                    <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
                </View>
            )}
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
        fontWeight: "600",
        fontSize: 21,
        padding: 8,
    },
    loader: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
})
