import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";
import { SearchBar } from "react-native-elements";
import PopularItem from "../popular/PopularItem";

const TopRatedList = props => {
    const {dataSource, loaded} = props;
    const [searchInput, setSearchInput] = useState("");
    const [listData, setListData] = useState([]);

    const updateList = (input) => {
        setSearchInput(input);
    }

    useEffect(() =>{
        setListData(dataSource);
    });

    return (
        <View>
            {loaded? (
                <FlatList
                    data={listData}
                    renderItem={({item, index, separators}) => (
                        <PopularItem dataId={item.id.toString()}/>
                    )}
                />
            ) : (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#dc681e" />
                    <Text style={styles.textLoader}>Loading Data...</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32
    },
    textLoader: {
        fontFamily: "Poppins",
        fontSize: 16,
        color: '#dc681e'
    }
})

export default TopRatedList;
