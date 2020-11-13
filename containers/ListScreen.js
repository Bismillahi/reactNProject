import React from "react";
import {View, Text, Image, Button} from "react-native";
import TopRatedList from "../components/movie/toprated/TopRatedList";
import SearchComponent from "../components/SearchComponent";
import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf";
const API_SEARCH = "/search/movie";
const API_TOP_RATED = "/movie/top_rated";

class ListScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state  = {
            movieData: [],
            trLoaded: false
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
            <View>
                <SearchComponent onTextChanged={this.searchMovieData}/>
                <TopRatedList
                    dataSource={this.state.movieData}/>
            </View>
        );
    }
}

export default ListScreen;
