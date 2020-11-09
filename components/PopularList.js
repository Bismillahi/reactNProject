import React, { useEffect } from 'react';
import { View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity } from "react-native";

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const PopularList = props => {
    const { dataSource } = props

    return(
      <FlatList
        data={dataSource}
        horizontal={true}
        renderItem={({item, index, separators}) => (
          <TouchableOpacity>
          </TouchableOpacity>
        )}/>
    );
}

export default PopularList;
