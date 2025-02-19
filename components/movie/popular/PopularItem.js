import React, {useEffect, useState} from 'react';
import {
    View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity, ImageBackground
} from "react-native";
import axios from 'axios';

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w500/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const PopularItem = props => {
    const { dataId } = props;
    const [movieData, setMovie] = useState({});
    const [movieActor, setActor] = useState([]);
    const [actors, setStringActor] = useState("");
    const [movieGenres, setGenres] = useState([]);
    const [genres, setStringGenre] = useState("");
    const [loaded, setLoadStatus] = useState(false);

    const axiosGetReq = (credits, id) => {
        axios
            .get(API_DETAIL_URL + id + (credits? "/credits?" : "?") + "api_key=" + API_KEY)
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    if (credits) {
                        setActor(response.data.cast)
                    } else {
                        setMovie(response.data);
                        setGenres(response.data.genres);
                        axiosGetReq(true, dataId);
                    }
                }, 2000);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        var str = "";
        axiosGetReq(false, dataId);
        movieGenres.map(function (item, i) {
            str += item.name + ", ";
        });

        setStringGenre(str);

        str = "";
        movieActor.map(function (item, i) {
            str += item.name + ", ";
        });

        setStringActor(str);
        setLoadStatus(true);
    });

    return(

        <View>
            {loaded? (
                <TouchableOpacity style={styles.movieContainer}>
                    <Image
                        style={styles.imageIcon}
                        source={{uri: API_IMAGE_URL + movieData.poster_path}} >
                    </Image>
                    <View style={styles.descContainer}>
                        <Text style={[styles.title, styles.text]}>{movieData.title}</Text>
                        <Text numberOfLines={1} style={[styles.genre, styles.text, {fontSize: 10, color: '#C1C1C1'}]}>{genres}</Text>
                        <Text numberOfLines={1} style={[styles.actor, styles.text, {fontSize: 12, color: '#7E7E7E'}]}>{actors}</Text>
                    </View>
                    <ImageBackground
                        source={require('../../../assets/star.png')}
                        style={styles.ratingIcon}
                    >
                        <Text style={[styles.text, styles.ratingText]}>{movieData.vote_average}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            ) : (
                <View style={[styles.movieContainer, {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    overflow: "hidden",
                }]}>
                    <Text style={[styles.title, styles.text, {color: '#C1C1C1'}]}>
                        Loading ...
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 8,
        elevation: 2,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    text: {
        fontFamily: "Poppins",
    },
    descContainer: {
        padding: 12,
        flex: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    ratingIcon: {
        width: 48,
        height: 48,
        padding: 8,
        marginHorizontal: 16
    },
    ratingText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: "600",
        marginTop: 8,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    actor: {
        color: '#ffffff',
        fontSize: 12
    },
    genre: {
        color: '#ffffff',
        fontSize: 12,
    },
    imageIcon: {
        width: 60,
        height: 90,
        borderRadius: 2,
        padding: 8,
        margin: 16,
        alignContent: 'center'
    }
})

export default PopularItem;
