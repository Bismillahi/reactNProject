import React, {useEffect, useState} from "react";
import {FlatList, Text, View} from "react-native";
import { SearchBar } from "react-native-elements";
import PopularItem from "../popular/PopularItem";

const TopRatedList = props => {
    const {dataSource} = props;
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
            {/*<SearchBar*/}
            {/*    placeholder={"Nama film ..."}*/}
            {/*    onChangeText={updateList}*/}
            {/*    value={searchInput}*/}
            {/*/>*/}
            <Text>{"Top Rated Movie"}</Text>
            <FlatList
                data={listData}
                horizontal={true}
                renderItem={({item, index, separators}) => (
                    <PopularItem dataId={item.id.toString()}/>
                )}/>
        </View>
    );
}

export default TopRatedList;
