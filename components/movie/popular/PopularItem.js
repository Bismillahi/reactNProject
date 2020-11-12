import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity } from "react-native";
import axios from 'axios';

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const PopularItem = props => {
    const { dataId } = props;
    const [movieDataItem, setMovie] = useState({});
    const [movieCrew, setCrew] = useState([])

    const axiosGetReq = (credits, id) => {
        axios
            .get(API_DETAIL_URL + id + (credits? "/credits?" : "?") + "api_key=" + API_KEY)
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    if (credits) {
                        setCrew(response.data.crew)
                    } else {
                        setMovie(response.data);
                        axiosGetReq(true, dataId);
                    }
                }, 2000);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        axiosGetReq(false, dataId);
    });

    return(
        <View>
            {/*{movieCrew.map(function (item, i) {*/}
            {/*    return (*/}
            {/*        <Text>{item.name}</Text>*/}
            {/*    );*/}
            {/*})}*/}
            {/*{movieCrew.map((value) => {*/}
            {/*    <Text>{value.name}</Text>*/}
            {/*})}*/}
            <Text>{movieDataItem.title}</Text>
        </View>
    );
}

export default PopularItem;
