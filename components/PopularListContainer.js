import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const PopularListContainer = props => {
    const { dataResult } = props

    const dataSource = [{}]

    const axiosGetReq = (credits, id, currentData) => {
        axios
            .get(API_DETAIL_URL + id + (credits? "/credits?" : "?") + "api_key=" + API_KEY)
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    if (credits) {
                        var movieItem = {
                            title: currentData.title,
                            poster: currentData.poster_path,
                            backdrop: currentData.backdrop_path,
                            releaseDate: currentData.release_date,
                            country: currentData.production_companies,
                            genre: currentData.genres,
                            duration: currentData.runtime,
                            desc: currentData.overview,
                            rating: currentData.vote_average,
                            crew: response.crew,
                            cast: response.cast
                        };

                        dataSource.push(movieItem);
                    } else {
                        var movieItem = {
                            title: response.title,
                            poster: response.poster_path,
                            backdrop: response.backdrop_path,
                            releaseDate: response.release_date,
                            country: response.production_companies,
                            genre: response.genres,
                            duration: response.runtime,
                            desc: response.overview,
                            rating: response.vote_average
                        };

                        axiosGetReq(true, id, movieItem);
                    }
                    mDataContainer[value] = response
                }, 2000);
            })
            .catch(error => console.log(error));
    }

    const getDatasDetail = () => {
        dataResult.forEach((value) => {
            axiosGetReq(false, value.id.toString(), null);
        });
    }

    useEffect(() => {
        getDatasDetail();
    });

    return(
      <View>
      </View>
    );
}
