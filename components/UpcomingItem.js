import React, {useEffect, useState} from 'react';
import {
    View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity, ImageBackground
} from "react-native";
import axios from 'axios';

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const UpcomingItem = props => {
    const { dataId } = props;
    const [movieData, setMovie] = useState({});
    const [movieGenres, setGenres] = useState([]);
    const [genres, setStringGenre] = useState("");

    const axiosGetReq = (id) => {
        axios
            .get(API_DETAIL_URL + id + "?api_key=" + API_KEY)
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    setMovie(response.data);
                    setGenres(response.data.genres);
                }, 2000);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        var str = "";

        axiosGetReq(dataId);
        movieGenres.map(function (item, i) {
            str += item.name + ", ";
        });

        setStringGenre(str);
    });

    return(
        <TouchableOpacity
            style={styles.movieContainer}>
            <ImageBackground
                style={styles.imageBG}
                source={{ uri: dataSource.backdrop}}>
                <View>
                    <Text style={styles.title}>{movieData.title}</Text>
                    <Text style={styles.genre}>{genres}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        width: 275,
        paddingVertical: 28,
        justifyContent: 'center',
        alignItems: 'center',
        height: 155,
        marginRight: 20
    },
    imageBG: {
        resizeMode: 'cover',
        borderRadius: 8
    },
    title: {
        fonSize: 24,
        fonWeight: "bold",
        color: '#000000'
    },
    genre: {
        fonSize: 14,
        color: '#808080',
        ellipsizeMode: "tail"
    }
})

export default UpcomingItem;
