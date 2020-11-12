import React from "react";
import {View, Text, Image, Button} from "react-native";
import TopRatedList from "../components/movie/toprated/TopRatedList";
import SearchComponent from "../components/SearchComponent";
import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

class ListScreen extends React.Component {

    static API_NAME = "/movie/top_rated";

    constructor(props) {
        super(props)
        this.state  = {
            topRatedMovieData: [],
            trLoaded: false
        }
    }

    getDataFetch = () => {
        axios
            .get(API_URL + ListScreen.API_NAME + "?api_key=" + API_KEY)
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    this.setState({
                        trLoaded: true,
                        topRatedMovieData: response.data.results
                    });
                }, 2000);
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getDataFetch()
    }

    render() {
        return (
            <View>
                <SearchComponent/>
                <TopRatedList
                    dataSource={this.state.topRatedMovieData}/>
            </View>
        );
    }
}

export default ListScreen;
