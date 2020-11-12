import React from "react";
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from "react-native";
import axios from 'axios';
import ListContainer from '../components/ListContainer';
import PopularList from "../components/PopularList";
import UpcomingList from "../components/UpcomingList";
import FullWidthImage from 'react-native-fullwidth-image';
import {FlatList} from "react-native-web";

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

export default class HomeScreen extends React.Component {

    dataName = [
        "popular", "upcoming"
    ];

    static API_NAME = {
        popular: "/movie/popular",
        upcoming: "/movie/upcoming"
    };

    constructor(props) {
        super(props)
        this.state = {
            popularMovieData: [],
            upcomingMovieData: [],
            pmLoaded: false,
            umLoaded: false
        }
    }

    successLoad = () => {
        this.setState({
            loaded: true
        });
    }

    getDataFetch = () => {
        const mDataContainer = {
            popular: {},
            upcoming: {}
        };
        this.dataName.forEach((value) => {
            axios
                .get(API_URL + HomeScreen.API_NAME[value] + "?api_key=" + API_KEY)
                .then(response => {
                    console.log('getting data from fetch', response);
                    setTimeout(() => {
                        if (value === "popular") {
                            this.setState({
                                popularMovieData: response.data.results,
                                pmLoaded: true
                            });
                        } else {
                            this.setState({
                                upcomingMovieData: response.data.results,
                                umLoaded: true
                            });
                        }
                    }, 2000);
                })
                .catch(error => console.log(error));
        });
    }

    componentDidMount() {
        this.getDataFetch()
    }

    render() {
        return (
            <View>
                {/*<FullWidthImage*/}
                {/*    style={styles.imgBanner}*/}
                {/*    source={require('../assets/header1.png')}*/}
                {/*    resizeMode="cover"*/}
                {/*/>*/}
                {/*{this.state.popularMovieData.map(function (obj, i) {*/}
                {/*    return(*/}
                {/*        <Text>{obj.title}</Text>*/}
                {/*    );*/}
                {/*})}*/}
                <UpcomingList
                    dataSource={this.state.upcomingMovieData}/>
                {/*<ListContainer*/}
                {/*    listType={"Upcoming"}*/}
                {/*    dataResult={this.state.upcomingMovieData.results}*/}
                {/*    loaded={this.state.pmLoaded}/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center"
    },
    header: {
        backgroundColor: '#DC681E',
        height: 100
    },
    headerTitle: {
        fontSize: 24,
        color: '#ffffff',
        fontStyle: 'bold'
    },
    imgBanner: {
        height: 100
    }
})
