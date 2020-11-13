import React from "react";
import {View, Text, Image, Button, ImageBackground, StyleSheet, Dimensions, ScrollView} from "react-native";
import TopRatedList from "../components/movie/toprated/TopRatedList";
import SearchComponent from "../components/SearchComponent";
import axios from 'axios';
import UpcomingList from "../components/movie/upcoming/UpcomingList";
import PopularList from "../components/movie/popular/PopularList";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf";
const API_SEARCH = "/search/movie";
const API_TOP_RATED = "/movie/top_rated";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class ListScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state  = {
            movieData: [],
            trLoaded: false,
            tempTopRatedMovieData: []
        }
    }

    searchMovieData = (input) => {
        const query = input;
        query.replace(/\s/g, '+');

        this.getDataFetch(true, query);
    }

    getDataFetch = (search, query) => {
        axios
            .get(API_URL + (search? API_SEARCH : API_TOP_RATED)
                + "?api_key=" + (search? (API_KEY + "&query=" + query) : (API_KEY)))
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    this.setState({
                        trLoaded: true,
                        movieData: response.data.results
                    });
                }, 2000);
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getDataFetch(false, null);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.appBar}>
                    <Text fontSize={24} style={[styles.title, styles.text]}>Watch Your Movie!</Text>
                    <SearchComponent
                        style={styles.searchBox}
                        onTextChanged={this.searchMovieData}
                    />
                </View>
                <ScrollView style={styles.container}>
                    <TopRatedList
                        dataSource={this.state.movieData}
                        loaded={this.state.trLoaded}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchBox: {
        margin: 16
    },
    appBar: {
        backgroundColor: '#DC681E',
        width: deviceWidth,
        height: deviceHeight * 0.22,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
    },
    text: {
        fontFamily: "Poppins"
    },
    title: {
        fontWeight: "bold",
        color: '#ffffff',
        fontSize: 24,
        marginBottom: 24
    },
})