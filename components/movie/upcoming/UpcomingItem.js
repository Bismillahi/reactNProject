import React, {useEffect, useState} from 'react';
import {
    View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity, ImageBackground
} from "react-native";
import axios from 'axios';

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w500/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const UpcomingItem = props => {
    const {dataId} = props;
    const [movieData, setMovie] = useState({});
    const [movieGenres, setGenres] = useState([]);
    const [genres, setStringGenre] = useState("");
    const [loaded, setLoadStatus] = useState(false);

    const axiosGetReq = (id) => {
        axios
            .get(API_DETAIL_URL + id + "?api_key=" + API_KEY)
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    setMovie(response.data);
                    setGenres(response.data.genres);
                    setLoadStatus(true);
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

    return (
        <View>
            {loaded? (
                <TouchableOpacity
                    style={styles.movieContainer}>
                    <ImageBackground
                        style={styles.imageBG}
                        source={{uri: API_IMAGE_URL + movieData.backdrop_path}}>
                        <View style={styles.descContainer}>
                            <Text fontSize={24} style={styles.title}>{movieData.title}</Text>
                            <Text fontSize={12} numberOfLines={1} style={styles.genre}>{genres}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ) : (
                <View
                    style={[styles.movieContainer, {
                        backgroundColor: '#888888'
                    }]}
                >
                    <Text>Loading ...</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        width: 275,
        justifyContent: 'center',
        alignItems: 'center',
        height: 155,
        marginRight: 20,
    },
    imageBG: {
        flex: 1,
        flexDirection: 'row',
        width: 275,
        height: 155,
        borderRadius: 8,
        resizeMode: 'cover',
        overflow: "hidden",
        alignItems: 'flex-end'
    },
    descContainer: {
        flex: 1,
        padding: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        fonWeight: "bold",
        color: '#ffffff',
    },
    genre: {
        color: '#ffffff',
        ellipsizeMode: "tail",
    }
})

export default UpcomingItem;
